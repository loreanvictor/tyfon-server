import { server } from '../server';
import { testTyFONServerDateArgSupport, testTyFONServerSpec } from './spec';

describe('server()', () => {
  testTyFONServerSpec((module, api) => server(module, api));
  testTyFONServerDateArgSupport((module, api) => server(module, api));
});
