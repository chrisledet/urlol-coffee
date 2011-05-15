describe "a bookmark", ->
  beforeEach ->
    @bookmark = new Bookmark "Google http://google.com"
  it "should have title", ->
    (expect @bookmark.title).toEqual "Google"
  it "should have url", ->
    (expect @bookmark.url).toEqual "http://google.com"

  it "should have url even without title", ->
    @bookmark = new Bookmark "http://google.com"
    (expect @bookmark.url).toEqual "http://google.com"
    (expect @bookmark.title).toEqual ""

describe "an invalid bookmark", ->
  it "should have blank url and title", ->
    @bookmark = new Bookmark "LOL GOOGLE"
    (expect @bookmark.title).toEqual ""
    (expect @bookmark.url).toEqual ""
