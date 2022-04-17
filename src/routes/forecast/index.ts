import {FastifyInstance} from 'fastify'
import getForecast from './get-forecast';
import postCity from './post-city';
import wsMagnitude from './ws-magnitude';

export default async function (fastify: FastifyInstance) {
    fastify.route(getForecast(fastify));
    fastify.route(postCity(fastify));
    fastify.get('/magnitude/:city',
        { websocket: true },
        (conn, req) => wsMagnitude(conn, req)
    );
}
