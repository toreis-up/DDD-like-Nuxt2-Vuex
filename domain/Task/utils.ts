import { Task } from './types'

export function createTask(title: string): Task {
  if (!title) {
    throw new Error('title is required')
  }
  return {
    title,
    description: '',
    state: 'TODO',
  }
}

export function visibleTasks(tasks: Task[]) {
  return tasks.filter((t) => t.state === 'TODO')
}
