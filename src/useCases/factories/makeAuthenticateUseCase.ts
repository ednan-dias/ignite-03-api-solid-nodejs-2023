import { PrismaUsersRepository } from '@/repositories/prisma/prismaUsersRepository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const useCase = new AuthenticateUseCase(usersRepository)

  return useCase
}
