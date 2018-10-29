class Api::ProjectsController < ApplicationController
  before_action :authenticate_user, only: [:create, :update, :destroy]
  before_action :set_project, only: [:show, :update, :destroy]

  def index
    render json: Project.all
  end

  def show
    render json: @project
  end

  def create
    project = Project.new(project_params)
    if current_user.admin && project.save
      render json: project
    else
      render json: { errors: project.errors }, status: 422
    end
  end

  def update
    if current_user.admin && @project.update(project_params)
      render json: @project
    else
      render json: { errors: @project.errors }, status: 422
    end
  end

  def destroy
    if current_user.admin && @project.destroy
      render json: { message: "Project successfully deleted" }, status: 200
    else
      render json: { error: "Unable to delete"}, status: 400
    end
  end

  private

    def project_params
      params.require(:project).permit(:name, :description, :img_url, :hidden)
    end

    def set_project
      @project = Project.find(params[:id])
    end

end