class MessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.contact.subject
  #

  def contact(message)
    set_message(message)
    @subject = message.subject.empty? ? '' : "#{message.subject} - "
    
    mail  to: 'chelyho@gmail.com', 
          subject: "#{@subject}Portfolio Contact Form"
  end

  def copy(message)
    set_message(message)
    @subject = message.subject.empty? ? '' : " - #{message.subject}"

    mail  to: @email, 
          subject: "Copy of your message to Chely#{@subject}"
  end

  private

  def set_message(message)
    @name = message.name
    @email = message.email
    @body = message.body
  end
end
