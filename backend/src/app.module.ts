import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './module/task.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${'admin'}:${'m3ga_4dm1n.3000'}@cluster0.avlym.mongodb.net/${'task'}?retryWrites=true&w=majority`,
    ),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
