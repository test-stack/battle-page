{TestError} = dependencies.errors
module.exports = ( nameOfComponent ) ->

  describe "Open component #{nameOfComponent}", ->

    availableTypeOfComponents = [
      'Todo'
    ]

    describe "Select Todo component from Komponenty select", ->

      it "#{nameOfComponent} component is available", (done) ->
        return done new TestError "#{nameOfComponent} isn't available." if nameOfComponent not in availableTypeOfComponents
        done()

      it "open list Komponenty", (done) ->
        xPath = "//a[@id='navbarDropdownMenuLink']"
        client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
          return done new TestError "#{xPath} not found for component button" if !isExist
        .click xPath, done

      it "open component #{nameOfComponent}", (done) ->
        xPath = "//a[@id='navBarTodoButton']"
        client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
          return done new TestError "#{xPath} not found for component #{nameOfComponent}" if !isExist
        .click xPath, done

      it "H2 Todo komponenta exist", (done) ->
        xPath = "//h2[contains(text(),'Todo komponenta')]"
        client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
          return done new TestError "#{xPath} not found." if !isExist
          done()
