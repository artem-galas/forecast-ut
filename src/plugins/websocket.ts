import fp from 'fastify-plugin'

export default fp(async (fastify, opts) => {
    fastify.register(require('fastify-websocket'))
})
