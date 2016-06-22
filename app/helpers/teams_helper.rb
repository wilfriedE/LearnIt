module TeamsHelper
  def team_card(team)
    render partial: "teams/card", locals: { team: team }
  end
end
