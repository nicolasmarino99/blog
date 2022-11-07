namespace :mytasks do

  desc "This is a Hello world task. All it does it say hello"
  task :hello => :environment do
    puts "Hello!"
  end
end
