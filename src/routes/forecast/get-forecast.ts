import {FastifyInstance, RouteOptions} from 'fastify';
import {
    ForecastReplySchema,
    ForecastByCityParamsSchema,
    ForecastByCityRequestDto,
    formatResponse, ForecastByCityQuerySchema, ForecastByCityQuery
} from '../../mappers/forecast.mapper';
import * as service from '../../services/forecast.service';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default function getForecast(fastify: FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/forecast/:city',
        schema: {
            querystring: ForecastByCityQuerySchema,
            params: ForecastByCityParamsSchema,
            response: {
                '2xx': ForecastReplySchema
            }
        },
        handler: async (request, reply) => {
            const {params, query} = request;
            const delay = (query as ForecastByCityQuery).delay || 0;
            const city = (params as ForecastByCityRequestDto).city
            await sleep(delay);

            const random = Math.ceil(Math.random() * 100);

            if (random >= 30) {
                return formatResponse(service.getForecast(city));
            }

            return reply.code(400).send(new Error('Something went wrong. Please try again'))
        }
    }
}
