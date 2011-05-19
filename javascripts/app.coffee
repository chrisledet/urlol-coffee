jQuery ->
  
  $('#entry').focus()
  
  account = new Account
  
  account_source = ($ '#account-template').html()
  account_template = Handlebars.compile account_source
  
  json_source = ($ '#json-template').html()
  json_template = Handlebars.compile json_source
  
  # load all previous bookmarks
  keys = $.jStorage.index();
  for key in keys
    url = $.jStorage.get key
    bookmark = new Bookmark key + " " + url
    account.add bookmark
  
  ($ 'div#json').html   json_template     account.toJSON()
  ($ 'ul#account').html account_template  account.toJSON()
  
  $('#entry_form').submit (event) ->
    event.preventDefault()
    bookmark = new Bookmark ($ '#entry').val()
    $.jStorage.set bookmark.title, bookmark.url
    account.add bookmark
    ($ 'ul#account').html account_template  account.toJSON()
    ($ 'div#json').html   json_template     account.toJSON()
    ($ '#entry').val ""
  
  window.exportJSON = ->
    $("html").html $('#json').html()

  window.removeBookmark = (title) ->
    $.jStorage.deleteKey title
    location.reload()
