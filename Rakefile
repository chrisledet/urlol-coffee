namespace :coffee do
  
  desc "compile coffeescript files"
  task :compile do
    system 'coffee -c javascripts tests'
  end
  
  desc "compile and watch coffeescript files"
  task :watch do
    system 'coffee -wc javascripts tests'
  end
  
end

task :default => ["coffee:compile"]