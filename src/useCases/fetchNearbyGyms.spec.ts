import { InMemoryGymsRepository } from '@/repositories/inMemory/inMemoryGymsRepository'
import { expect, describe, it, beforeEach } from 'vitest'

import { FetchNearbyGymsUseCase } from './fetchNearbyGyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -20.9867995,
      longitude: -48.9114187,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -21.3081447,
      longitude: -49.0526248,
    })

    const { gyms } = await sut.execute({
      userLatitude: -20.9867995,
      userLongitude: -48.9114187,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
