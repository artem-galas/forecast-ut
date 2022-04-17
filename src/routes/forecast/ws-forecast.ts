import {FastifyInstance} from 'fastify';
import {RouteOptions, SocketStream,} from 'fastify-websocket';
import {
    ForecastByCityParamsSchema,
    ForecastByCityRequestDto,
    ForecastReplySchema,
    formatResponse
} from '../../mappers/forecast.mapper';
import * as service from '../../services/forecast.service';

export default function wsForecast(connection: SocketStream, request: any) {
    connection.socket.on('message', async (message: any) => {
        const {city, id} = JSON.parse(message);
        // const forecast = formatResponse(service.getForecast(city));
        // connection.socket.send(JSON.stringify(forecast));
        setInterval(() => {
            const forecast = formatResponse(service.getForecast(city));
            connection.socket.send(JSON.stringify({id, ...forecast}));
        }, 3000)
    })
}
