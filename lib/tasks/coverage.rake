namespace :coverage do
  desc "View test coverage"
  task :view do
    system("yarn view-coverage")
  end
end
