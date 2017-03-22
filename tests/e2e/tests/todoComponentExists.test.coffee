module.exports = ->

  describe 'Battle Page | Todo component exist', ->

    BattlePage.open()

    BattlePage.components.open 'Todo'

module.exports.tags = [
  'battlePage'
  'components'
  'todo'
  'exist'
  'fast'
]
