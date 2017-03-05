module.exports = ->

  describe 'Battle Page homepage title', ->

    BattlePage.open()

    BattlePage.components.open 'Todo'

module.exports.tags = [
  'battlePage'
  'components'
  'todo'
]
