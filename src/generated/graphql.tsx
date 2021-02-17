import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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


export const CountryDocument: DocumentNode<CountryQuery, CountryQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Country"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cca3"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cca3"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cca3"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cca3"}},{"kind":"Field","name":{"kind":"Name","value":"capitalCities"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"flagURL"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"common"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subregion"}},{"kind":"Field","name":{"kind":"Name","value":"tld"}},{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"borders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cca3"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]};
export const HomeDocument: DocumentNode<HomeQuery, HomeQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Home"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cca3"}},{"kind":"Field","name":{"kind":"Name","value":"flagURL"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"capitalCities"}}]}}]}}]};