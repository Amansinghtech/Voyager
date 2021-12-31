import { Request, Response } from 'express';
import { MiddlewareOptions } from './render-voyager-page';
export default function expressMiddleware(options: MiddlewareOptions): (_req: Request, res: Response, next: () => void) => void;
