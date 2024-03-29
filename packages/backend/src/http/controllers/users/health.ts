import { FastifyReply, FastifyRequest } from 'fastify'

export async function health(request: FastifyRequest, reply: FastifyReply) {
  reply.code(200).send({ message: 'OK' })
}
