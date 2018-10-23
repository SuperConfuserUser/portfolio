require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest

  test "POST create" do
    post api_create_message_url, params: {
      message: {
        name: 'cornholio',
        email: 'cornholio@example.org',
        subject: 'howdy',
        body: 'hai'
      }
    }
  end

  test "invalid POST create" do
    post api_create_message_url, params: {
      message: { name: '', email: '', subject: '', body: '' }
    }
  end

  test "POST create delivery" do
    assert_difference 'ActionMailer::Base.deliveries.size', 1 do
      post api_create_message_url, params: {
        message: {
          name: 'cornholio',
          email: 'cornholio@example.org',
          body: 'hai'
        }
      }
    end
  end
end
