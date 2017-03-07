{TestError} = dependencies.errors
module.exports = (keyword) ->

  describe "Search Todo #{keyword}", ->

    it "Enter keyword #{keyword} to searchbar", (done) ->
      xPath = "//input[@id='todoSearchBar']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found" if !isExist
      .click xPath
      .keys keyword, done

    it "exist only one todo #{keyword}", (done) ->
      xPath = "//div[@id='todo0']//h3[contains(text(),'Todo Opava')]"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} found" if !isExist
        done()
