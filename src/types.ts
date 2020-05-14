export interface RawCountry {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: { name: string }[];
  languages: { name: string }[];
  alpha3Code: string;
  borders: string[];
}

export interface Country
  extends Pick<
    RawCountry,
    Exclude<keyof RawCountry, "languages" | "currencies" | "borders">
  > {
  languages: string[];
  currencies: string[];
  borders: { name: string; alpha3Code: string }[];
}

export type CountryRecord = Record<string, Country>;
