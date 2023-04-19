import { makeGetUserMetricsUseCase } from '@/useCases/factories/makeGetUserMetricsUseCase'

import { FastifyReply, FastifyRequest } from 'fastify'

export async function metrics(req: FastifyRequest, reply: FastifyReply) {
  const getUserMetricsUseCase = makeGetUserMetricsUseCase()

  const { checkInsCount } = await getUserMetricsUseCase.execute({
    userId: req.user.sub,
  })

  return reply.status(200).send({
    checkInsCount,
  })
}
