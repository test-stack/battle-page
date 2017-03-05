{TestError} = dependencies.errors
module.exports = () ->

  describe "Smazat všechny Todo exists", ->

    it "will appear a successful confirmation message", (done) ->
      xPath = "//button[@id='showTodosDeleteModalButton']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found" if !isExist
      .click xPath, done

    it "h5 Smazat všechny Todo", (done) ->
      xPath = "//h5[@id='titleModal']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found" if !isExist
        done();

    it "click on Ano, smazat button", (done) ->
      xPath = "//button[@id='yesDeleteAllButton']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found" if !isExist
      .click xPath, done

    it "total todos is 0", (done) ->
      xPath = "//span[@id='totalTodos' and text()='0']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found" if !isExist
      .click xPath, done
