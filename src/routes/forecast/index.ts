import {FastifyInstance} from 'fastify'
import getForecast from './get-forecast';
import postCity from './post-city';

export default async function (fastify: FastifyInstance) {
    fastify.route(getForecast(fastify));
    fastify.route(postCity(fastify));
}
