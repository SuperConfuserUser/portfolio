class User < ApplicationRecord
  has_secure_password
  validates :username, :email, presence: true
  validates :username, :email, uniqueness: true
  validates_format_of :email, :with => /.+@.+\..+/i

  def self.from_token_request request
    username = request.params["auth"] && request.params["auth"]["username"]
    # knock gem doesn't allow separate params for username AND email
    user = self.find_by(username: username) || self.find_by(email: username)
  end
end
