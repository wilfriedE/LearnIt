AdministratePolicy = Struct.new(:user, :administrate)
class AdministratePolicy
  def access?
    return false unless user
    user.admin?
  end
end
