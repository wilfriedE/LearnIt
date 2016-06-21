# The Welcome controller takes care of general pages.
class WelcomeController < ApplicationController
  def index
    @programs = Program.all
  end

  def library
  end

  def contribute
  end

  def about
  end
end
