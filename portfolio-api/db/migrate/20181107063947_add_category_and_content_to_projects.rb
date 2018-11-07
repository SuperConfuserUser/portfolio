class AddCategoryAndContentToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :category, :string
    add_column :projects, :content, :text
  end
end
