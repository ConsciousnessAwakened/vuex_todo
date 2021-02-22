export const STORAGE_KEY = 'todos';

export const mutations = {

    addTodo(state, todo) {

        state.todos.push(todo);
    },

    editTodo(state, {todo, label = todo.label, done = todo.done}) {

        const index = state.todos.indexOf(todo);

        state.todos.splice(index, 1, {
            ...todo,
            label,
            done
        });
    },

    removeTodo(state, todo) {

        const index = state.todos.indexOf(todo);

        state.todos.splice(index, 1);
    }
}
