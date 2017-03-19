export const addTodo = (client, todo, cb) => {
    client.create({
        index: 'battle-page-todolist',
        type: 'battle-page-todolist',
        id: new Date().getTime(),
        body: Object.assign({'timestamp': new Date().toISOString()}, todo),
    }, cb);
}

export const getTodos = (client, cb) => {
    client.msearch({
        body: [
            { index: 'battle-page-todolist', type: 'battle-page-todolist' },
            { from: 0, size: 1000, query: { match_all: {} } }
        ]
    }, cb);
}

export const getTodo = (client, todoId, cb) => {
    client.get({
        index: 'battle-page-todolist',
        type: 'battle-page-todolist',
        id: todoId
    }, cb);
}

export const deleteTodo = (client, todoId, cb) => {
    client.delete({
        index: 'battle-page-todolist',
        type: 'battle-page-todolist',
        id: todoId
    }, cb);
}

export const deleteAllTodos = (client, cb) => {
    client.indices.delete({
        index: 'battle-page-todolist'
    }, cb);
}
