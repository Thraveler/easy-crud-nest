import { LogerMiddleware } from './loger.middleware';

describe('LogerMiddleware', () => {
  it('should be defined', () => {
    expect(new LogerMiddleware()).toBeDefined();
  });
});
