/* eslint-disable @typescript-eslint/no-unused-vars */
import { mutationTree, actionTree, getterTree } from 'typed-vuex'
import * as flash from './flash'
import { Task, visibleTasks } from '~/domain/Task'
import { TaskService } from '@/services/TaskService'
import { TaskRepository } from '@/repositories'

export const state = () => ({
  tasks: [] as Task[],
})

// export type TaskState = ReturnType<typeof state>

export const getters = getterTree(state, {
  tasks(state) {
    return visibleTasks(state.tasks)
  },
})

export const mutations = mutationTree(state, {
  updateTasks(state, tasks: Task[]) {
    state.tasks = tasks
  },
  updateTask(state, { index, task }: { index: number; task: Task }) {
    state.tasks.splice(index, 1, task)
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    addTask({ state, commit }, title: string): void {
      const taskService = new TaskService(new TaskRepository())
      try {
        const tasks = taskService.addTask(title)
        this.commit('task/updateTasks', tasks)
      } catch (error: any) {
        this.commit('flash/showFlash', error.message)
      }
    },

    complete(state, index: number): void {
      const taskService = new TaskService(new TaskRepository())
      const completedTask = taskService.complete(index)
      this.commit('task/updateTask', { index, task: completedTask })
    },

    load(state): void {
      const taskService = new TaskService(new TaskRepository())
      const tasks = taskService.load()
      this.commit('task/updateTasks', tasks)
    },
  }
)
