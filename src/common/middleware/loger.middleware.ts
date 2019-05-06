import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // console.log('Request at dogs');
    console.log('Request GET at dogs');
    next();
  }
}
