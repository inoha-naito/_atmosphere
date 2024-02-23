import type { INestApplication } from '@nestjs/common';
import type { App } from 'supertest/types';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('PingController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('GET /ping', () => {
    return request(app.getHttpServer() as App)
      .get('/ping')
      .expect(200)
      .expect('pong');
  });
});
