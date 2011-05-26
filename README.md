URLol
========
Bookmark app in Sinatra, flexing my [Coffeescript][coffeescript] skills. Uses [jStorage][jstorage] for saving the bookmarks. It makes use of HTML5 local storage and saves all your data there.

Install
---
* Ruby 1.8.7 or 1.9.2 with rubygems
* CoffeeScript 1.1.1
* Bundler

Install
---
    git clone git://github.com/chrisledet/urlol.git
    cd urlol
    rake                  # compiles coffeescript files
    bundle install        # installs required gems
    bundle exec shotgun   # runs sinatra using shotgun

TODO
---
* Export to different formats

Credit
---
Used some of the starter code from [Peepcode's][peepcode] [Coffescript screencast][peepcode-coffeescript]. Very helpful.

License
---
DO WHAT THE FUCK YOU WANT TO + BEER/PIZZA PUBLIC LICENSE

[peepcode]:http://peepcode.com
[peepcode-coffeescript]:http://peepcode.com/products/coffeescript
[coffeescript]:http://jashkenas.github.com/coffee-script/
[jstorage]:http://www.jstorage.info/
