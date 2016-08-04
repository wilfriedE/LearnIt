module ContributionHelper
  def contribution_card(contribution)
    generalized_card(contribution.contribution, contribution.contribution_type)
  end
  
  def contributor_card(contributor)
    generalized_card(contributor, contributor.class.name)
  end
end
