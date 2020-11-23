import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

import { APIInfo, Module } from './types';
import { router } from './router';


export function server(
  module: Module,
  api?: APIInfo,
) {
  const app = express();
  app.use(cors());
  app.use(json());
  app.use(router(module, api));

  return app;
}
