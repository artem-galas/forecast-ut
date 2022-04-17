import {FastifyInstance} from 'fastify'
import getForecast from './get-forecast';
import postCity from './post-city';
import wsForecast from './ws-forecast';

export default async function (fastify: FastifyInstance) {
    fastify.route(getForecast(fastify));
    fastify.route(postCity(fastify));
    fastify.get('/ws-forecast', { websocket: true }, wsForecast);
    // fastify.get('/ws-forecast', { websocket: true }, (connection /* SocketStream */, req /* FastifyRequest */) => {
    //     connection.socket.on('message', message => {
    //         setInterval(() => {
    //             connection.socket.send('hi from server')
    //         }, 3000)
    //     })
    // })
}
