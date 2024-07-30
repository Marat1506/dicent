export interface CountryType {
    altSpellings: string[];
    area: number;
    borders: string[];
    capital: string[];
    capitalInfo: {
        latlng: number[];
    };
    car: {
        side: string;
        signs: string[];
    };
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms: {
        png: string;
        svg: string;
    };
    continents: string[];
    currencies: never;
    demonyms: {
        eng: {
            f: string;
            m: string;
        };
        fra: {
            f: string;
            m: string;
        };
    };
    fifa: string;
    flag: string;
    flags: {
        alt: string;
        png: string;
        svg: string;
    };
    gini: {
        2018: number;
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    independent: boolean;
    landlocked: boolean;
    languages: {
        fra: string;
    };
    latlng: number[];
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    name: {
        common: string;
        nativeName: {
            ron: {
                official: string;
                common: string;
            };
        };
        official: string;
        native: unknown;
    };
    population: number;
    postalCode: {
        format: string;
        regex: string;
    };
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: unknown;
    unMember: boolean;
}