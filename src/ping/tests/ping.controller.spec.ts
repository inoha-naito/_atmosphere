import { Test } from '@nestjs/testing';
import { PingController } from '../controllers/ping.controller';
import { PingService } from '../services/ping.service';

describe('PingController', () => {
  let pingController: PingController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [PingController],
      providers: [PingService],
    }).compile();

    pingController = app.get<PingController>(PingController);
  });

  describe('GET /ping', () => {
    test("'pong'という文字列を返す", () => {
      expect(pingController.ping()).toBe('pong');
    });
  });
});
