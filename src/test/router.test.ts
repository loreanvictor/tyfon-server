import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

import { testTyFONServerSpec } from './spec';
import { router } from '../router';


describe('router()', () => {
  testTyFONServerSpec((module, api) => {
    const app = express();
    app.use(cors());
    app.use(json());
    app.use(router(module, api));
    return app;
  });
});
