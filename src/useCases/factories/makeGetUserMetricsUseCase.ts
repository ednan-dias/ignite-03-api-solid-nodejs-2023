import { GetUserMetricsUseCase } from '../getUserMetrics'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prismaCheckInsRepository'

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new GetUserMetricsUseCase(checkInsRepository)

  return useCase
}
