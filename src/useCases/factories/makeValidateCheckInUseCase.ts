import { PrismaCheckInsRepository } from '@/repositories/prisma/prismaCheckInsRepository'
import { ValidateCheckInUseCase } from '../validateCheckIn'

export function makeValidateCheckInsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidateCheckInUseCase(checkInsRepository)

  return useCase
}
