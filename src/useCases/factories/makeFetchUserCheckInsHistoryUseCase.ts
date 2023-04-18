import { FetchUserCheckInsHistoryUseCase } from '../fetchUserCheckInsHistory'

import { PrismaCheckInsRepository } from '@/repositories/prisma/prismaCheckInsRepository'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInsHistoryUseCase(checkInsRepository)

  return useCase
}
