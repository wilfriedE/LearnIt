module Moderate::TicketsHelper

  def ticket_card(ticket)
    render partial: "moderate/tickets/card", locals: { ticket: ticket }
  end
end
