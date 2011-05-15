(function() {
  jQuery(function() {
    var account, bookmark, key, keys, source, template, url, _i, _len;
    account = new Account;
    source = ($('#account-template')).html();
    template = Handlebars.compile(source);
    $('#entry').focus();
    keys = $.jStorage.index();
    for (_i = 0, _len = keys.length; _i < _len; _i++) {
      key = keys[_i];
      url = $.jStorage.get(key);
      bookmark = new Bookmark(key + " " + url);
      account.add(bookmark);
    }
    ($('ul#account')).html(template(account.toJSON()));
    $('#entry_form').submit(function(event) {
      event.preventDefault();
      bookmark = new Bookmark(($('#entry')).val());
      $.jStorage.set(bookmark.title, bookmark.url);
      account.add(bookmark);
      ($('ul#account')).html(template(account.toJSON()));
      return ($('#entry')).val('');
    });
    return window.removeBookmark = function(title) {
      $.jStorage.deleteKey(title);
      return location.reload();
    };
  });
}).call(this);
