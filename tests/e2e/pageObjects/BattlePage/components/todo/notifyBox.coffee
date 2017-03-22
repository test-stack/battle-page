{TestError} = dependencies.errors
module.exports = (stateOfBox) ->

  if stateOfBox

    describe "Verify successful confirmation box", ->

      it "will appear a successful confirmation message", (done) ->
        xPath = "//div[@id='saveBox']/span/strong[contains(text(),'úspěšně')]"
        client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
          return done new TestError "#{xPath} not found" if !isExist
          done();

  else

    describe "Verify unsuccessful confirmation box", ->

      it "will appear a unsuccessful confirmation message", (done) ->
        xPath = "//div[@id='validationErrorBox']"
        client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
          return done new TestError "#{xPath} not found" if !isExist
          done();
