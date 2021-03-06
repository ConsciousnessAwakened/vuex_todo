export default {

    addTodo({commit}, todo) {

        commit('addTodo', {
            label : todo,
            done : false
        })
    },

    editTodo({commit}, {todo, label}){

        commit('editTodo', {todo, label : label});
    },

    removeTodo({commit}, todo){

        commit('removeTodo', todo);
    },

    toggleTodo ({state, commit}, todo) {

        commit('editTodo', {todo, done : !todo.done})
    },

    toggleAll({state, commit}, done) {

        state.todos.forEach(todo => {

            commit('editTodo', {todo, done})
        });
    },

    clearCompleted({state, commit}) {

        state.todos.filter((todo) => todo.done)
            .forEach((todo) => commit('removeTodo', todo))
    },

    resetTodos({commit}) {

        commit('reset');
    }
}
