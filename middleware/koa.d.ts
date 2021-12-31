import { Context } from 'koa';
import { MiddlewareOptions } from './render-voyager-page';
export default function koaMiddleware(options: MiddlewareOptions): (ctx: Context, next: () => void) => void;
