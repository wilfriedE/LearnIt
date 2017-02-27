class AdministratePolicy < Struct.new(:user, :administrate)
  def access?
    user && user.admin?
  end
end
