import { createStore } from 'vuex'

export default createStore({
    state: {
        authState: false
    },
    mutations: {
        toggleAuthState: (state) => {
            state.authState = !state.authState
        }
    }
})