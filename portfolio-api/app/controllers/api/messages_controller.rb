class Api::MessagesController < ApplicationController
  
  def create
    message = Message.new(message_params)

    if message.valid?
      # MessageMailer.contact(message).deliver_now
      # MessageMailer.copy(message).deliver_now if message.copy

      render json: { success: "Thanks #{message.name}! Your message been sent. I'll get back to you soon." }
    else
      render json: message, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :subject, :body, :copy)
  end
end
