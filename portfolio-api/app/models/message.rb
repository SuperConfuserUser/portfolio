class Message
  include ActiveModel::Model
  attr_accessor :name, :email, :subject, :body, :copy

  validates :name, :email, :body, presence: true
  validates_format_of :email, :with => /.+@.+\..+/i
  
end
