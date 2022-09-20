import { ITaskRepository } from '~/interfaces/repository/index'
import { Task, TaskState } from '~/domain/Task'

const KEY = 'tasks'

interface IStorage {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
}

export class TaskRepository implements ITaskRepository {
  storage: IStorage

  constructor() {
    // this.storage = localStorage as Storage
  }

  load(): Task[] {
    // const taskStr = this.storage.getItem(KEY)
    // return taskStr ? JSON.parse(taskStr) : []
    return [
      {
        title: 'Task',
        description: 'hello, world',
        state: 'TODO' as TaskState,
      },
    ]
  }

  add(task: Task) {
    const tasks = this.load()
    tasks.push(task)
    this.save(tasks)
    return tasks
  }

  save(tasks: Task[]) {
    // this.storage.setItem(KEY, JSON.stringify(tasks))
  }
}
