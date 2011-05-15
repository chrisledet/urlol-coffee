window.Bookmark = class Bookmark
  constructor: (rawString) ->
    [@title, @url] = @parseInputString rawString

  parseInputString: (rawString) ->
    # TODO make this a regex instead, dirty!
    results = rawString.split("http://")
    if results.length > 1
      [results[0].trim(), "http://" + results[1].trim()]
    else
      ["", ""]
    
  toJSON: ->
    title: @title
    url: @url

window.Account = class Account
  constructor: -> 
    @bookmarks = []

  add: (bookmarks...) -> 
    @bookmarks.push bookmarks...
  
  remove: (title) ->
    delete @bookmarks[i] if title == bookmark.title for bookmark, i in @bookmarks
    
  toJSON: ->
    bookmarks: bookmark.toJSON() for bookmark in @bookmarks