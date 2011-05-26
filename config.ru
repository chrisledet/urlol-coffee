$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__) + '/app')

require 'urlol'
run URLOL::App.new
