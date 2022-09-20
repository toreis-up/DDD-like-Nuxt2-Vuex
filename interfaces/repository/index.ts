import { Task } from '@/domain/Task'

export interface ITaskRepository {
  load: () => Task[]
  save: (tasks: Task[]) => void
  add: (task: Task) => Task[]
}
