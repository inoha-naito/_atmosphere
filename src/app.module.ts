import { Module } from '@nestjs/common';
import { PingModule } from './ping/modules/ping.module';

@Module({
  imports: [PingModule],
})
export class AppModule {}
