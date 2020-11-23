import { server } from '../server';
import { testTyFONServerSpec } from './spec';

describe('server()', () => {
  testTyFONServerSpec((module, api) => server(module, api));
});
