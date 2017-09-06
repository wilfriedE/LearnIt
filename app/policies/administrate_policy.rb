AdministratePolicy = Struct.new(:user, :administrate)
class AdministratePolicy
  def access?
    user && user.admin?
  end
end
