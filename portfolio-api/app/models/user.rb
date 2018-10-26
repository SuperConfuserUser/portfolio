class User < ApplicationRecord
  has_secure_password
  validates :username, :email, presence: true
  validates :username, :email, uniqueness: true
  validates_format_of :email, :with => /.+@.+\..+/i
end
