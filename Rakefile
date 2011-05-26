namespace :urlol do
  
  desc "compile coffeescript files"
  task :compile do
    system 'coffee -c javascripts tests'
  end
  
  desc "compile and watch coffeescript files"
  task :compile_and_watch do
    system 'coffee -wc javascripts tests'
  end
  
end

task :default => ["urlol:compile"]