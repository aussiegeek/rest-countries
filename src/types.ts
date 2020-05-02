export interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: Currency[];
  languages: Language[];
  alpha2Code: string;
}

export interface Currency {
  name: null | string;
}

export interface Language {
  name: string;
}
