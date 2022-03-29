import {FastifyInstance, RouteOptions} from 'fastify';
import {
    ForecastReplySchema,
    ForecastByCityParamsSchema,
    ForecastByCityRequestDto,
    formatError, allowedCityList, formatResponse
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

            if (allowedCityList.includes(city.toLowerCase().trim())) {
                return formatResponse(service.getForecast(city));
            }

            return reply.code(404).send(new Error(formatError()))
        }
    }
}
