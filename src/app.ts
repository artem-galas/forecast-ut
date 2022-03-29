import { join } from 'path';
import AutoLoad, {AutoloadPluginOptions} from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import {errorMapper, isError, successMapper} from './mappers/api.mapper';

export type AppOptions = {
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
  fastify.addHook('preSerialization', async (request, reply, payload) => {
    if (isError(payload)) {
      return errorMapper(payload);
    }

    return successMapper(payload);
  });

  fastify.addHook('onError', async (request: any, reply, error) => {
    request.fastifyPublicApiError = error;
  });

  fastify.addHook('onSend', async (request: any, reply, payload) => {
    if (request.fastifyPublicApiError) {
      return JSON.stringify(errorMapper(request.fastifyPublicApiError));
    }

    return payload;
  });

  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  })

  fastify.register(require('./routes/forecast'));

};

export default app;
export { app }
