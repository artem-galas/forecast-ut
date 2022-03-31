import {FastifyInstance, RouteOptions} from 'fastify';
import {
    ForecastReplySchema,
    ForecastByCityParamsSchema,
    ForecastByCityRequestDto,
    formatResponse
} from '../../mappers/forecast.mapper';
import * as service from '../../services/forecast.service';

export default function getForecast(fastify: FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/forecast/:city',
        schema: {
            params: ForecastByCityParamsSchema,
            response: {
                '2xx': ForecastReplySchema
            }
        },
        handler: async (request, reply) => {
            const {params} = request;
            const city = (params as ForecastByCityRequestDto).city

            const random = Math.ceil(Math.random() * 100);

            if (random >= 30) {
                return formatResponse(service.getForecast(city));
            }

            return reply.code(400).send(new Error('Something went wrong. Please try again'))
        }
    }
}
