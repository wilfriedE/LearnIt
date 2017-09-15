require 'sanitize'

module Sanitizable
  extend ActiveSupport::Concern

  def cleaned_html(html)
    Sanitize.fragment(html, Sanitize::Config.merge(Sanitize::Config::RELAXED, remove_contents: true,
                                                                              add_attributes: { 'a': { 'rel' => 'nofollow' } }))
  end
end
