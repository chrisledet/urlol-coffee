(function() {
  describe("a bookmark", function() {
    beforeEach(function() {
      return this.bookmark = new Bookmark("Google http://google.com");
    });
    it("should have title", function() {
      return (expect(this.bookmark.title)).toEqual("Google");
    });
    it("should have url", function() {
      return (expect(this.bookmark.url)).toEqual("http://google.com");
    });
    return it("should have url even without title", function() {
      this.bookmark = new Bookmark("http://google.com");
      (expect(this.bookmark.url)).toEqual("http://google.com");
      return (expect(this.bookmark.title)).toEqual("");
    });
  });
  describe("an invalid bookmark", function() {
    return it("should have blank url and title", function() {
      this.bookmark = new Bookmark("LOL GOOGLE");
      (expect(this.bookmark.title)).toEqual("");
      return (expect(this.bookmark.url)).toEqual("");
    });
  });
  describe("account", function() {
    beforeEach(function() {
      this.account = new Account;
      this.google = new Bookmark("Google http://google.com");
      return this.reddit = new Bookmark("Reddit http://reddit.com");
    });
    it("should have one bookmark", function() {
      this.account.add(this.google);
      return (expect(this.account.bookmarks.length)).toEqual(1);
    });
    return it("should have two bookmarks", function() {
      this.account.add(this.google, this.reddit);
      return (expect(this.account.bookmarks.length)).toEqual(2);
    });
  });
}).call(this);
