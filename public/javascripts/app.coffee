jQuery ->
  account = new Account
  source = ($ '#account-template').html()
  template = Handlebars.compile source
  
  # load all previous bookmarks
  
  $('#entry').focus()
  keys = $.jStorage.index();
  
  for key in keys
    url = $.jStorage.get key
    bookmark = new Bookmark key + " " + url
    account.add bookmark
  
  ($ 'ul#account').html template account.toJSON()
  
  $('#entry_form').submit (event) ->
    event.preventDefault()
    bookmark = new Bookmark ($ '#entry').val()
    $.jStorage.set bookmark.title, bookmark.url
    account.add bookmark
    ($ 'ul#account').html template account.toJSON()
    ($ '#entry').val('')
    
  window.removeBookmark = (title) ->
    $.jStorage.deleteKey title
    location.reload()
    
# jQuery ->
#   meal = new Meal
#   source = ($ '#meal-template').html()
#   template = Handlebars.compile source
# 
#   $('#entry').focus()
# 
#   $('#entry_form').submit (event) ->
#     event.preventDefault()
#     dish = new Dish ($ '#entry').val()
#     meal.add dish
#     ($ 'ul#meal').html template meal.toJSON()
#     ($ '#entry').val('')