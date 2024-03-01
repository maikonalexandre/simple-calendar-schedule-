import { Prisma, Event } from '@prisma/client'

export interface EventsRepository {
  create: (data: Prisma.EventCreateInput) => Promise<Event>
  findByDateInterval: (data: {
    userId: string
    startedAt: Date
    finalizedAt: Date
  }) => Promise<Event | null>
  delete: (data: { id: string; userId: string }) => Promise<Event | null>
  findById: (data: { id: string; userId: string }) => Promise<Event | null>
  findAllByUserId: (data: {
    userId: string
    startedDate: Date
    endDate: Date
  }) => Promise<Event[] | void>
}
