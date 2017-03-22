{TestError} = dependencies.errors
module.exports = ( form ) ->

  describe "Open AddForm component", ->

    it "open form", (done) ->
      xPath = "//a[@id='listNavBarAddTodoButton']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found for add todo button" if !isExist
      .click xPath, done

    it "h2 Todo Formulář Komponenta", (done) ->
      xPath = "//h2[contains(text(),'Todo Formulář Komponenta')]"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found." if !isExist
        done()

    it "fill #{form.topic} to Topic input", (done) ->
      xPath = "//input[@id='topic']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found for topic input" if !isExist
      .click(xPath)
      .keys form.topic, done

    it "fill #{form.tags} to Tags input", (done) ->
      xPath = "//input[@id='tags']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found for tags input" if !isExist
      .click(xPath)
      .keys form.tags, done

    it "select type of category #{form.category}", (done) ->
      xPath = "//option[text()='#{form.category}']"
      client.click xPath, done

    it "fill text to Description textarea", (done) ->
      xPath = "//textarea[@id='description']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found for description textarea" if !isExist
      .click(xPath)
      .keys form.description, done

    it "yes, share Todo", (done) ->
      xPath = "//input[@id='optionsRadios2']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found for radiobutton optionsRadios2" if !isExist
      .click xPath, done

    it "yes, toggle on notify", (done) ->
      xPath = "//input[@id='notification']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found for checkbox notification" if !isExist
      .click xPath, done

    it "click on Ulozit Todo button", (done) ->
      xPath = "//button[@id='saveTodoButton']"
      client.waitForExist(xPath, dependencies.explicitWaitMs).then (isExist) ->
        return done new TestError "#{xPath} not found for Ulozit Todo button" if !isExist
      .click xPath, done
