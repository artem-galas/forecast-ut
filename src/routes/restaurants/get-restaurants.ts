import {FastifyInstance, RouteOptions} from 'fastify';
import * as service from '../../services/restaurant.service';
import {getRandomArbitrary} from '../../services/restaurant.service';
import {RestaurantListReplySchema} from '../../mappers/restaurants.mapper';

export default function getBooks(fastify: FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/list',
        schema: {
            response: {
                '2xx': RestaurantListReplySchema,
            }
        },
        handler: async (request, reply) => {
            const random = Math.ceil(Math.random() * 100);
            const from = getRandomArbitrary(0, 50)
            const to = getRandomArbitrary(from, 50);

            if (random >= 30) {
                return service.getRestaurants(from, to);
            }

            return reply.code(400).send(new Error('Something went wrong. Please try again'))
        }
    }
}
