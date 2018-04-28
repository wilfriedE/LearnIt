source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby File.read(File.expand_path('../.ruby-version', __FILE__)).chomp

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.0'

# Use Puma as the app server
gem 'puma', '~> 3.7'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

# Use devise for authentication
gem 'devise'

# Use pundit for authorization
gem "pundit"

# Use ransack for Searching
gem 'ransack'

# Use kaminari for pagination
gem 'kaminari'

# Use SimpleForm for forms
gem 'simple_form'

# Use webpacker for assets
gem 'webpacker', '~> 3.4'

# Use Sanitize for html sanitizing
gem 'sanitize'

# Use postgresql for database
gem 'pg'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  # Use dotenv for ENV variables
  gem 'dotenv-rails'

  # Use rspec for testing
  gem 'rspec-rails', '~> 3.7'

  # Allow assigns and assert_template in tests
  gem 'rails-controller-testing'

  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Use factory bot for fixtures
  gem "factory_bot_rails", "~> 4.0"

  # Use daabase_cleaner for database cleaning in tests
  gem 'database_cleaner'

  # Use pundit-matchers for pundit tests
  gem 'pundit-matchers', '~> 1.3.1'

  # Use simplecov for code coverage
  gem 'simplecov'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
