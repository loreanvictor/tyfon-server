import { RequestContextAware } from './context';

export type APIFunction = (this: RequestContextAware, ...args: any[]) => Promise<any>;

export type Module = {
  [name: string]: APIFunction;
}

export interface APIInfo {
  name: string;
  version: string;
  types: {[name: string]: string};
  funcs: string[];
}
