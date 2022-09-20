import { createTask, Task, changeState } from '~/domain/Task'
import { ITaskRepository } from '@/interfaces/repository'

export class TaskService {
  repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this.repository = repository
  }

  addTask(title: string): Task[] {
    // eslint-disable-next-line no-useless-catch
    try {
      // Domain/utilsでtask作成
      const task = createTask(title)

      // Repository使って保存
      const tasks = this.repository.add(task)

      return tasks
    } catch (e) {
      throw e
    }
  }

  complete(index: number) {
    const tasks = this.repository.load()
    const completedTask = changeState(tasks[index], 'DONE')
    tasks[index] = completedTask
    this.repository.save(tasks)
    return completedTask
  }

  load() {
    const tasks = this.repository.load()
    return tasks
  }
}
