class Message
  include ActiveModel::Model
  attr_accessor :name, :email, :subject, :body, :copy
  validates :name, :email, :body, presence: true


  # TODO: add captcha and email regex validation
end
