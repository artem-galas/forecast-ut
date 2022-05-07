import {FastifyInstance, RouteOptions} from 'fastify';
import * as service from '../../services/book.service';
import {BookListReplySchema} from '../../mappers/books.mapper';
import {getRandomArbitrary} from '../../services/book.service';

export default function getBooks(fastify: FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/books',
        schema: {
            response: {
                '2xx': BookListReplySchema,
            }
        },
        handler: async (request, reply) => {
            const random = Math.ceil(Math.random() * 100);
            const from = getRandomArbitrary(0, 40)
            const to = getRandomArbitrary(from, 40);

            if (random >= 30) {
                return service.getBooks(from, to);
            }

            return reply.code(400).send(new Error('Something went wrong. Please try again'))
        }
    }
}
