

module.exports = ->

  describe 'Battle Page | Todo | Add todo', ->

    BattlePage.open()

    BattlePage.components.open 'Todo'

    BattlePage.components.todo.addForm({
      topic: 'Todo1',
      tags: 'peformanceTests',
      category: 'Práce',
      description: 'Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker.'
      })

    BattlePage.components.todo.notifyBox true 

module.exports.tags = [
  'battlePage'
  'components'
  'todo'
  'addForm'
  'saveSuccessful'
]
