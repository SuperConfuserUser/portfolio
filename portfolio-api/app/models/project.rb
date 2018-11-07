class Project < ApplicationRecord
  validates :name, :category, :img_url, :description, presence: true

  has_many :links, dependent: :destroy
end
