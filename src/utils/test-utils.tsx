import React from "react";
import fs from "fs";
import { render, RenderOptions } from "@testing-library/react";
import {
  makeExecutableSchema,
  IExecutableSchemaDefinition,
} from "@graphql-tools/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { ThemeProvider } from "styled-components/macro";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  Observable,
} from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { GraphQLError } from "graphql";
import faker from "faker";
import { LightTheme } from "../theme";

const AllTheProviders: React.ComponentType = ({ children }) => {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender: any = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

export const MockedApolloClient: React.FC<{
  resolvers?: IExecutableSchemaDefinition["resolvers"];
}> = ({ children, resolvers }) => {
  const typeDefs = fs.readFileSync("schema.graphql", "utf-8");
  const mocks = {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    Country: () => ({
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      cca3: () => faker.lorem.word(),
    }),
  };
  const schemaWithoutMocks = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const schema = addMocksToSchema({
    schema: schemaWithoutMocks,
    preserveResolvers: true,
    mocks,
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema }),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export const MockedErrorClient: React.FC<{
  graphqlErrors?: GraphQLError[];
}> = ({ children, graphqlErrors }) => {
  // This is just a link that swallows all operations and returns the same thing
  // for every request: The specified error.
  const defaultErrors: ReadonlyArray<GraphQLError> = [
    new GraphQLError("Unspecified error from ErrorProvider."),
  ];
  const link = new ApolloLink(() => {
    return new Observable((observer) => {
      observer.next({
        errors: graphqlErrors || defaultErrors,
      });
      observer.complete();
    });
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export const LoadingClient: React.FC = ({ children }) => {
  const link = new ApolloLink(() => new Observable(() => {}));

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
