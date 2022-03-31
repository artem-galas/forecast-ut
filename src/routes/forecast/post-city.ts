import {FastifyInstance, RouteOptions} from 'fastify';
import {
    ForecastReplySchema,
    ForecastByCityParamsSchema,
    ForecastByCityRequestDto,
    formatError, allowedCityList, formatResponse
} from '../../mappers/forecast.mapper';
import * as service from '../../services/forecast.service';

export default function postCity(fastify: FastifyInstance): RouteOptions {
    return {
        method: 'POST',
        url: '/forecast',
        schema: {
            body: ForecastByCityParamsSchema,
            response: {
                '2xx': ForecastReplySchema
            }
        },
        handler: async (request, reply) => {
            const {body} = request;
            const city = (body as ForecastByCityRequestDto).city

            if (allowedCityList.includes(city.toLowerCase().trim())) {
                return formatResponse(service.getForecast(city));
            }

            return reply.code(404).send(new Error(formatError()))
        }
    }
}
