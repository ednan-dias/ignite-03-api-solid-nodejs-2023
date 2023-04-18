import { PrismaGymsRepository } from '@/repositories/prisma/prismaGymsRepository'
import { CheckInUseCase } from '../checkin'

import { PrismaCheckInsRepository } from '@/repositories/prisma/prismaCheckInsRepository'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new CheckInUseCase(checkInsRepository, gymsRepository)

  return useCase
}
