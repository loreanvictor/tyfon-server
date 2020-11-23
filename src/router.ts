import { Router } from 'express';
import { possibleNames, HttpMethod } from 'tyfon-conventions';

import { Module, APIInfo } from './types';
import { run } from './run';


export function router(module: Module, api?: APIInfo) {
  const router = Router();
  if (api) {
    router.get('/__api', (_, res) => res.status(200).send(api));
  }

  router.all('/:method', (req, res) => {
    const name = possibleNames({
      url: req.params.method,
      method: req.method as HttpMethod
    }).find(n => n in module);

    if (name) {
      const func = module[name];
      return run(func, req, res);
    }
  
    res.status(404).send();
  });

  return router;
}
