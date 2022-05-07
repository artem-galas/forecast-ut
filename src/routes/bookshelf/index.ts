import {FastifyInstance} from 'fastify'
import getBooks from './get-books';
import postBook from './post-books';

export default async function (fastify: FastifyInstance) {
    fastify.route(getBooks(fastify));
    fastify.route(postBook(fastify));
}
