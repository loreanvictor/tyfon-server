import { Request, Response} from 'express';

export interface RequestContext {
  request: any;
  response: any;
}

export function accessRequestContext(context: RequestContext) {
  return {
    request: context.request as Request,
    response: context.response as Response,
  }
}
