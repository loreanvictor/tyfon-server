import { Request, Response } from 'express';
import { APIFunction } from './types';


function tryParse(value: string) {
  try { return JSON.parse(value); }
  catch { return value; }
}


function source(req: Request) {
  if (req.method === 'GET' || req.method === 'DELETE') {
    return { src: req.query, parsed: false };
  } else {
    return { src: req.body, parsed: true };
  }
}


function extract({src, parsed}: {src: {[key: string]: string}, parsed: boolean}) {
  const params: any[] = [];
  Object.entries(src).forEach(([key, value]) => {
    try {
      const index = parseInt(key);
      params[index] = parsed ? value : tryParse(value);
    } catch {}
  });

  return params;
}


export function run(func: APIFunction, req: Request, res: Response) {
  (async() => { return await func.apply({ request: req, response: res }, extract(source(req))); })()
  .then(result => {
    if (!res.headersSent) {
      res.status(200).json(result);
    }
  })
  .catch(error => {
    if (error) {
      const status = error.status || 500;
      const msg = (error.expose !== false) ? (error.message || '') : '';
      res.status(status).send(msg);
    } else {
      res.status(500).send();
    }
  });
}
