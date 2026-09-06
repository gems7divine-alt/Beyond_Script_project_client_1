package services

import (
	"fmt"
	"net/smtp"
)

type EmailService struct {
	SMTPHost string
	SMTPPort string
	Username string
	Password string
	From     string
}

func NewEmailService(
	smtpHost string,
	smtpPort string,
	username string,
	password string,
	from string,
) *EmailService {
	return &EmailService{
		SMTPHost: smtpHost,
		SMTPPort: smtpPort,
		Username: username,
		Password: password,
		From:     from,
	}
}

func (s *EmailService) SendOTP(to string, otp string) error {
	auth := smtp.PlainAuth(
		"",
		s.Username,
		s.Password,
		s.SMTPHost,
	)

	subject := "Beyond Script - Password Reset OTP"

	body := fmt.Sprintf(`
Hello,

We received a request to reset your Beyond Script account password.

Your OTP is:

%s

This OTP is valid for 10 minutes.

If you did not request a password reset, please ignore this email.

Regards,
Beyond Script Team
`, otp)

	message := []byte(
		"From: " + s.From + "\r\n" +
			"To: " + to + "\r\n" +
			"Subject: " + subject + "\r\n" +
			"MIME-Version: 1.0\r\n" +
			"Content-Type: text/plain; charset=UTF-8\r\n" +
			"\r\n" +
			body,
	)

	address := s.SMTPHost + ":" + s.SMTPPort

	return smtp.SendMail(
		address,
		auth,
		s.From,
		[]string{to},
		message,
	)
}