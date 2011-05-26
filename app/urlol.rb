require 'sinatra'

module URLOL
  class App < Sinatra::Base
    
    dir = File.dirname(File.expand_path(__FILE__))
    set :root,     "#{dir}/.."
    set :public,   "#{dir}/.."
    set :app_file, __FILE__
    set :views,    "app/views"
    enable :static
    
    get '/' do
      erb :index
    end
    
  end
end