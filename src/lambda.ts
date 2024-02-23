import type { RequestListener } from 'node:http';
import type { Handler, Context, Callback } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@codegenie/serverless-express';
import { AppModule } from './app.module';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance() as RequestListener;
  return serverlessExpress({ app: expressApp });
}

export const handler = async (
  event: unknown,
  context: Context,
  callback: Callback,
): Promise<Handler> => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
