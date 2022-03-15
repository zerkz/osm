// really just needed vuex store to be initialized for auth module support.


export const state = () => ({
    counter: 0
  })
  
export const mutations = {
increment(state) {
    state.counter++
}
}