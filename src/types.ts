
export type PlainType = string | number | boolean | undefined | PlainType[] | {[key: string]: PlainType};

export type APIFunction = (...args: PlainType[]) => Promise<PlainType>;

export type Module = {
  [name: string]: APIFunction;
}

export interface APIInfo {
  name: string;
  version: string;
  types: {[name: string]: string};
  funcs: string[];
}
