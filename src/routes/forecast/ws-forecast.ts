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
    connection.socket.on('close', function close() {
        console.log('onClose');
        // clearInterval(interval);
    });

    connection.socket.on('message', async (message: any) => {
        const payload = JSON.parse(message);
        if (payload === 'close') {
            connection.destroy();
            return;
        }
        const {city, id} = payload;
        setInterval(() => {
            const forecast = formatResponse(service.getForecast(city));
            connection.socket.send(JSON.stringify({id, ...forecast}));
        }, 3000)
    })
}
