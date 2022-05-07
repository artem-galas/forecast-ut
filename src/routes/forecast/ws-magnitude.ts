import {FastifyRequest} from 'fastify';
import {SocketStream} from 'fastify-websocket';
import {MagnitudeByCityRequestDto} from '../../mappers/magnitude.mapper';
import * as service from '../../services/magnitude.service';

export default function wsMagnitude(conn: SocketStream, req: FastifyRequest) {
    const city = (req.params as MagnitudeByCityRequestDto).city;
    const interval = setInterval(() => {
        const magnitude = service.getMagnitude(city);
        conn.socket.send(JSON.stringify(magnitude));
    }, 2000);

    conn.socket.on("close", () => {
        clearInterval(interval);
    });
}
