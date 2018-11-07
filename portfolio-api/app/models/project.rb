class Project < ApplicationRecord
  validates :name, :img_url, :description, presence: true

  has_many :links, dependent: :destroy
end
