(function() {
  var Account, Bookmark;
  var __slice = Array.prototype.slice;
  window.Bookmark = Bookmark = (function() {
    function Bookmark(rawString) {
      var _ref;
      _ref = this.parseInputString(rawString), this.title = _ref[0], this.url = _ref[1];
    }
    Bookmark.prototype.parseInputString = function(rawString) {
      var results;
      results = rawString.split("http://");
      if (results.length > 1) {
        return [results[0].trim(), "http://" + results[1].trim()];
      } else {
        return ["", ""];
      }
    };
    Bookmark.prototype.toJSON = function() {
      return {
        title: this.title,
        url: this.url
      };
    };
    return Bookmark;
  })();
  window.Account = Account = (function() {
    function Account() {
      this.bookmarks = [];
    }
    Account.prototype.add = function() {
      var bookmarks, _ref;
      bookmarks = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.bookmarks).push.apply(_ref, bookmarks);
    };
    Account.prototype.remove = function(title) {
      var bookmark, i;
      if ((function() {
        var _len, _ref, _results;
        _ref = this.bookmarks;
        _results = [];
        for (i = 0, _len = _ref.length; i < _len; i++) {
          bookmark = _ref[i];
          _results.push(title === bookmark.title);
        }
        return _results;
      }).call(this)) {
        return delete this.bookmarks[i];
      }
    };
    Account.prototype.toJSON = function() {
      var bookmark;
      return {
        bookmarks: (function() {
          var _i, _len, _ref, _results;
          _ref = this.bookmarks;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            bookmark = _ref[_i];
            _results.push(bookmark.toJSON());
          }
          return _results;
        }).call(this)
      };
    };
    return Account;
  })();
}).call(this);
