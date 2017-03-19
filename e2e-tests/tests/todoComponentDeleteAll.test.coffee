module.exports = ->

  describe 'Battle Page | Todo component delete all', ->

    BattlePage.open()

    BattlePage.components.open 'Todo'

    BattlePage.components.todo.deleteAllTodos()

module.exports.tags = [
  'battlePage'
  'components'
  'todo'
  'deleteAllTodos'
  'fast'
]
