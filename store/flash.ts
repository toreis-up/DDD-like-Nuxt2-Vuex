/* eslint-disable @typescript-eslint/no-unused-vars */
import { mutationTree, actionTree, getterTree } from 'typed-vuex'

export const state = () => ({
  messages: [] as string[],
})

// export type FlashState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getMessages(state): string[] {
    return state.messages
  },
})

export const mutations = mutationTree(state, {
  addMessage(state, message: string) {
    state.messages.push(message)
  },
  clearMessages(state) {
    state.messages.splice(0, state.messages.length)
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    showFlash(state, message: string) {
      this.commit('addMessage', message)
      window.setTimeout(() => this.commit('clearMessages', undefined), 3000)
    },
  }
)
