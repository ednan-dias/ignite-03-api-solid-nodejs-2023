import { makeFetchUserCheckInsHistoryUseCase } from '@/useCases/factories/makeFetchUserCheckInsHistoryUseCase'

import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function history(req: FastifyRequest, reply: FastifyReply) {
  const checkInHistoryQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
  })

  const { page } = checkInHistoryQuerySchema.parse(req.query)

  const fetchUserCheckInsUseCase = makeFetchUserCheckInsHistoryUseCase()

  const { checkIns } = await fetchUserCheckInsUseCase.execute({
    page,
    userId: req.user.sub,
  })

  return reply.status(200).send({
    checkIns,
  })
}
