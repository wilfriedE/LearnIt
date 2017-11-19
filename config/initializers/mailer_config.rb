ActionMailer::Base.smtp_settings = {
  address:              ENV["SMTP_ADDRESS"],
  port:                 587,
  domain:               ENV["APP_DOMAIN"],
  user_name:            ENV["MAILER_USERNAME"].present? ? ENV["MAILER_USERNAME"] : ENV["SENDGRID_USERNAME"],
  password:             ENV["MAILER_PASSWORD"].present? ? ENV["MAILER_PASSWORD"] : ENV["SENDGRID_PASSWORD"],
  authentication:       :plain,
  enable_starttls_auto: true
}
