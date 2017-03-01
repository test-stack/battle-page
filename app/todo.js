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
      { index: 'battle-page-form', type: 'battle-page-form' },
      {}
    ]
  }, cb);
}
