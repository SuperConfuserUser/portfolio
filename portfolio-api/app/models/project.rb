class Project < ApplicationRecord
  validates :name, :img_url, :description, presence: true
end
