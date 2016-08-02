module ProgramsHelper
  def program_card(program)
    render partial: "programs/card", locals: { program: program }
  end

  def curated_item_card(curation)
    generalized_card(curation.curatable, curation.curatable_type)
  end

end
