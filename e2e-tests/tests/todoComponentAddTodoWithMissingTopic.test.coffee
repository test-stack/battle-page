module.exports = ->

  describe 'Battle Page | Todo | Add todo with missing Topic', ->

    BattlePage.open()

    BattlePage.components.open 'Todo'

    BattlePage.components.todo.addForm({
      topic: '',
      tags: '',
      category: 'Práce',
      description: ''
      })

    BattlePage.components.todo.notifyBox false

module.exports.tags = [
  'battlePage'
  'components'
  'todo'
  'addForm'
  'saveUnsuccessful'
  'fast'
]
