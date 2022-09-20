import { getAccessorType } from 'typed-vuex'
import * as flash from './flash'
import * as task from './task'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters = {}

export const mutations = {}

export const actions = {}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: { flash, task },
})
