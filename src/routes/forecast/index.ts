import {FastifyInstance} from 'fastify'
import getForecast from './get-forecast';

export default async function (fastify: FastifyInstance) {
    fastify.route(getForecast(fastify));
}
