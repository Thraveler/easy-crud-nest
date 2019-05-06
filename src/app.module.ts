import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsModule } from './dogs/dogs.module';
import { LogerMiddleware } from './common/middleware/loger.middleware';

@Module({
  imports: [DogsModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogerMiddleware)
      // .exclude(
      //   { path: "dogs", method: RequestMethod.POST }
      // )
      // .forRoutes('dogs');
      .forRoutes({ path: 'dogs', method: RequestMethod.GET });
  }
}
