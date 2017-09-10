class ModTicketActivity < Activity
  include SingleTablePolymorphic
  include Assignable
  include Subscribable
  include Outlet

  def self.search(search)
    ModTicketActivity.where("name LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end

  def self.create_ticket(name, description, contents = [], media = [])
    ticket = ModTicketActivity.create(name: name, description: description)
    contents.each do |content|
      ticket.media_outlets += [MediaOutlet.new(content: content)]
    end
    ticket.media_contents += media
  end

  def acknowledge
    self.status = states[0]
  end

  def set_in_progress
    self.status = states[1]
  end

  def set_as_finished
    self.status = states[2]
  end

  def close
    self.status = states[3]
  end

  def self.states
    ["ACKNOWLEDGED", "IN-PROGRESS", "FINISHED", "CLOSED", "REOPENED"]
  end

  def self.a_states(status = "")
    if status == states[3]
      ["ACKNOWLEDGED", "IN-PROGRESS", "FINISHED", "REOPENED"]
    else
      ["ACKNOWLEDGED", "IN-PROGRESS", "FINISHED", "CLOSED"]
    end
  end
end
