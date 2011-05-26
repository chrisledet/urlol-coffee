(function() {
  jQuery(function() {
    var account, account_source, account_template, bookmark, json_source, json_template, key, keys, url, _i, _len;
    $('#entry').focus();
    account = new Account;
    account_source = ($('#account-template')).html();
    account_template = Handlebars.compile(account_source);
    json_source = ($('#json-template')).html();
    json_template = Handlebars.compile(json_source);
    keys = $.jStorage.index();
    for (_i = 0, _len = keys.length; _i < _len; _i++) {
      key = keys[_i];
      url = $.jStorage.get(key);
      bookmark = new Bookmark(key + " " + url);
      account.add(bookmark);
    }
    ($('div#json')).html(json_template(account.toJSON()));
    ($('ul#account')).html(account_template(account.toJSON()));
    $('#entry_form').submit(function(event) {
      event.preventDefault();
      bookmark = new Bookmark(($('#entry')).val());
      $.jStorage.set(bookmark.title, bookmark.url);
      account.add(bookmark);
      ($('ul#account')).html(account_template(account.toJSON()));
      ($('div#json')).html(json_template(account.toJSON()));
      return ($('#entry')).val("");
    });
    window.exportJSON = function() {
      return $("html").html($('#json').html());
    };
    return window.removeBookmark = function(title) {
      $.jStorage.deleteKey(title);
      return location.reload();
    };
  });
}).call(this);
