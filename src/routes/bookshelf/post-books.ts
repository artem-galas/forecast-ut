import {FastifyInstance, RouteOptions} from 'fastify';
import * as service from '../../services/book.service';
import {BookReplySchema, BookRequestDto, BookRequestSchema} from '../../mappers/books.mapper';


export default function postBooks(fastify: FastifyInstance): RouteOptions {
    return {
        method: 'POST',
        url: '/books',
        schema: {
            body: BookRequestSchema,
            response: {
                '2xx': BookReplySchema,
            }
        },
        handler: async (request, reply) => {
            return service.createBook(request.body as BookRequestDto);
        }
    }
}
