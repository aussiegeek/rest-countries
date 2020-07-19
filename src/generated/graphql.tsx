import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/** Information about a single country */
export type Country = {
  __typename?: 'Country';
  /** Commonly used English name for the country */
  name: Scalars['String'];
  /** Offically used English name for the country */
  officialName: Scalars['String'];
  /** Other native & translated country names */
  names: Array<CountryName>;
  /** country code top-level domain */
  tld: Array<Scalars['String']>;
  /** code ISO 3166-1 alpha-2 */
  cca2: Scalars['String'];
  /** code ISO 3166-1 numeric */
  ccn3: Scalars['String'];
  /** code ISO 3166-1 alpha-3 */
  cca3: Scalars['String'];
  /** code International Olympic Committee */
  cioc: Scalars['String'];
  /** ISO 3166-1 independence status, true if indepdendent */
  independent?: Maybe<Scalars['Boolean']>;
  /** ISO 3166-1 assignment status */
  status: Iso3166Status;
  /** Currencies used in the country */
  currencies: Array<Currency>;
  /** Name of the capital city or cities */
  capitalCities: Array<Scalars['String']>;
  /** Alternative spellings */
  altSpellings: Array<Scalars['String']>;
  /** Region */
  region: Region;
  /** Subregion */
  subregion: Scalars['String'];
  /** Emoji representation of the country's flag */
  emoji: Scalars['String'];
  /** Bordering countries */
  borders: Array<Country>;
  /** URL for the country's flag in SVG */
  flagURL: Scalars['String'];
  /** Languages used in the country */
  languages: Array<Language>;
};

export enum Iso3166Status {
  OfficiallyAssigned = 'OFFICIALLY_ASSIGNED',
  UserAssigned = 'USER_ASSIGNED'
}

/** Translations of the name of a Country */
export type CountryName = {
  __typename?: 'CountryName';
  /** three-letter ISO 639-3 language code */
  code: Scalars['String'];
  /** Official name of country in this language */
  official: Scalars['String'];
  /** Commonly used name of country in this language */
  common: Scalars['String'];
  /** Is this name native or translated */
  type: CountryNameType;
};

/** Details about a language */
export type Language = {
  __typename?: 'Language';
  /** Name of the language in English */
  name: Scalars['String'];
  /** three-letter ISO 639-3 language code */
  code: Scalars['String'];
};

/** Is this name native or translated */
export enum CountryNameType {
  Native = 'NATIVE',
  Translated = 'TRANSLATED'
}

/** Currency */
export type Currency = {
  __typename?: 'Currency';
  /** ISO 4127 Currency code */
  code: Scalars['String'];
  /** Name of the currency */
  name: Scalars['String'];
  /** Symbol of the currency */
  symbol: Scalars['String'];
};

export enum Region {
  Africa = 'AFRICA',
  Americas = 'AMERICAS',
  Antartic = 'ANTARTIC',
  Asia = 'ASIA',
  Europe = 'EUROPE',
  Oceania = 'OCEANIA'
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Fetch information about Countries */
  countries: Array<Country>;
  /** Fetch information about a single country */
  country?: Maybe<Country>;
};


/** The query root for this schema */
export type QueryCountryArgs = {
  cca3: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CountryQueryVariables = Exact<{
  cca3: Scalars['String'];
}>;


export type CountryQuery = (
  { __typename?: 'Query' }
  & { country?: Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'cca3' | 'capitalCities' | 'region' | 'flagURL' | 'name' | 'subregion' | 'tld'>
    & { names: Array<(
      { __typename?: 'CountryName' }
      & Pick<CountryName, 'common' | 'type'>
    )>, currencies: Array<(
      { __typename?: 'Currency' }
      & Pick<Currency, 'name'>
    )>, borders: Array<(
      { __typename?: 'Country' }
      & Pick<Country, 'cca3' | 'name'>
    )>, languages: Array<(
      { __typename?: 'Language' }
      & Pick<Language, 'name' | 'code'>
    )> }
  )> }
);

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = (
  { __typename?: 'Query' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Country, 'name' | 'cca3' | 'flagURL' | 'region' | 'capitalCities'>
  )> }
);


export const CountryDocument = gql`
    query Country($cca3: String!) {
  country(cca3: $cca3) {
    cca3
    capitalCities
    region
    flagURL
    name
    names {
      common
      type
    }
    subregion
    tld
    currencies {
      name
    }
    borders {
      cca3
      name
    }
    languages {
      name
      code
    }
  }
}
    `;

/**
 * __useCountryQuery__
 *
 * To run a query within a React component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryQuery({
 *   variables: {
 *      cca3: // value for 'cca3'
 *   },
 * });
 */
export function useCountryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CountryQuery, CountryQueryVariables>) {
        return ApolloReactHooks.useQuery<CountryQuery, CountryQueryVariables>(CountryDocument, baseOptions);
      }
export function useCountryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CountryQuery, CountryQueryVariables>(CountryDocument, baseOptions);
        }
export type CountryQueryHookResult = ReturnType<typeof useCountryQuery>;
export type CountryLazyQueryHookResult = ReturnType<typeof useCountryLazyQuery>;
export type CountryQueryResult = ApolloReactCommon.QueryResult<CountryQuery, CountryQueryVariables>;
export const HomeDocument = gql`
    query Home {
  countries {
    name
    cca3
    flagURL
    region
    capitalCities
  }
}
    `;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
        return ApolloReactHooks.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
      }
export function useHomeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
        }
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = ApolloReactCommon.QueryResult<HomeQuery, HomeQueryVariables>;