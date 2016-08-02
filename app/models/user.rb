class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  #, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  has_many :contributions, as: :contributor

  def is_current_user(user)
    if self.id == user.id
      return true
    end
    return false
  end
end
