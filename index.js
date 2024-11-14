const fastify = require('fastify')({ logger: true })

require('dotenv').config();

const PORT = process.env.PORT;
// Declare a route
fastify.get('/', function handler (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: PORT , hoest: '0.0.0.0'}, (err) => {
    
  if (err) {
    fastify.log.error(err)
    console.log("jhatkrhe", err)
    process.exit(1)
  }
})