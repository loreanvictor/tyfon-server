import { RequestContext } from './context';

export type APIFunction = (this: RequestContext, ...args: any[]) => Promise<any>;

export type Module = {
  [name: string]: APIFunction;
}

export interface APIInfo {
  name: string;
  version: string;
  types: {[name: string]: string};
  funcs: string[];
}
