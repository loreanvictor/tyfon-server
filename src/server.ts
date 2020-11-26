import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { jsonReviver } from 'tyfon-conventions';

import { APIInfo, Module } from './types';
import { router } from './router';


export function server(
  module: Module,
  api?: APIInfo,
) {
  const app = express();
  app.use(cors());
  app.use(json({ reviver: jsonReviver }));
  app.use(router(module, api));

  return app;
}
