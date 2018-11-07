class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :img_url, :created_at, :hidden, :category, :content
  has_many :links
end