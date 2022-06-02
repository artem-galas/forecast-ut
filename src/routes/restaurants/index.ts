import {FastifyInstance} from 'fastify'
import getRestaurants from './get-restaurants';

export default async function (fastify: FastifyInstance) {
    fastify.route(getRestaurants(fastify));
}
