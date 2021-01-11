export { router } from './router';
export { server } from './server';
export * from './types';

import { Request, Response} from 'express';
import { RequestContextAware } from './context';

export function accessRequestContext(context: RequestContextAware) {
  return {
    request: context.request as Request,
    response: context.response as Response,
  }
}
