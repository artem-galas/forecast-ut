import {FastifyInstance} from 'fastify';

export default async function (fastify: FastifyInstance) {
    fastify.register(require('./forecast'));
    fastify.register(require('./bookshelf'), {prefix: '/bookshelf'});
    fastify.register(require('./restaurants'), {prefix: '/restaurants'});
}
