import { SearchGymsUseCase } from '../searchGyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prismaGymsRepository'

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(gymsRepository)

  return useCase
}
