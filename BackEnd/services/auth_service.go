// package services

// import (
// 	"context"
// 	"errors"
// 	"strings"
// 	"time"

// 	"github.com/jackc/pgx/v5"
// 	"github.com/jackc/pgx/v5/pgxpool"

// 	"beyond-script/backend/models"
// 	"beyond-script/backend/utils"
// )

// type AuthService struct {
// 	DB         *pgxpool.Pool
// 	JWTSecret  string
// 	JWTExpires int
// }

// func (s *AuthService) RequestPasswordReset(context context.Context, email string, param any) error {
// 	panic("unimplemented")
// }

// func NewAuthService(
// 	db *pgxpool.Pool,
// 	jwtSecret string,
// 	jwtExpires int,
// ) *AuthService {

// 	return &AuthService{
// 		DB:         db,
// 		JWTSecret:  jwtSecret,
// 		JWTExpires: jwtExpires,
// 	}
// }

// func (s *AuthService) Register(
// 	ctx context.Context,
// 	name string,
// 	email string,
// 	password string,
// ) (*models.User, error) {

// 	name = strings.TrimSpace(name)
// 	email = strings.ToLower(strings.TrimSpace(email))

// 	if name == "" {
// 		return nil, errors.New("name is required")
// 	}

// 	if email == "" {
// 		return nil, errors.New("email is required")
// 	}

// 	if len(password) < 6 {
// 		return nil, errors.New("password must contain at least 6 characters")
// 	}

// 	// Check whether email already exists
// 	var existingID int64

// 	err := s.DB.QueryRow(
// 		ctx,
// 		`SELECT id FROM users WHERE email = $1`,
// 		email,
// 	).Scan(&existingID)

// 	if err == nil {
// 		return nil, errors.New("email already registered")
// 	}

// 	if !errors.Is(err, pgx.ErrNoRows) {
// 		return nil, err
// 	}

// 	// Hash password
// 	passwordHash, err := utils.HashPassword(password)

// 	if err != nil {
// 		return nil, err
// 	}

// 	var user models.User

// 	err = s.DB.QueryRow(
// 		ctx,
// 		`
// 		INSERT INTO users
// 			(name, email, password_hash)
// 		VALUES
// 			($1, $2, $3)
// 		RETURNING id, name, email, created_at, updated_at
// 		`,
// 		name,
// 		email,
// 		passwordHash,
// 	).Scan(
// 		&user.ID,
// 		&user.Name,
// 		&user.Email,
// 		&user.CreatedAt,
// 		&user.UpdatedAt,
// 	)

// 	if err != nil {
// 		return nil, err
// 	}

// 	return &user, nil
// }

// type LoginResult struct {
// 	User  *models.User
// 	Token string
// }

// func (s *AuthService) Login(
// 	ctx context.Context,
// 	email string,
// 	password string,
// ) (*LoginResult, error) {

// 	email = strings.ToLower(strings.TrimSpace(email))

// 	var user models.User

// 	err := s.DB.QueryRow(
// 		ctx,
// 		`
// 		SELECT
// 			id,
// 			name,
// 			email,
// 			password_hash,
// 			created_at,
// 			updated_at
// 		FROM users
// 		WHERE email = $1
// 		`,
// 		email,
// 	).Scan(
// 		&user.ID,
// 		&user.Name,
// 		&user.Email,
// 		&user.PasswordHash,
// 		&user.CreatedAt,
// 		&user.UpdatedAt,
// 	)

// 	if errors.Is(err, pgx.ErrNoRows) {
// 		return nil, errors.New("invalid email or password")
// 	}

// 	if err != nil {
// 		return nil, err
// 	}

// 	err = utils.CheckPassword(
// 		password,
// 		user.PasswordHash,
// 	)

// 	if err != nil {
// 		return nil, errors.New("invalid email or password")
// 	}

// 	token, err := utils.GenerateToken(
// 		user.ID,
// 		user.Email,
// 		s.JWTSecret,
// 		s.JWTExpires,
// 	)

// 	if err != nil {
// 		return nil, err
// 	}

// 	return &LoginResult{
// 		User:  &user,
// 		Token: token,
// 	}, nil
// }

// func (s *AuthService) RequestPasswordReset(
// 	ctx context.Context,
// 	email string,
// 	emailService *EmailService,
// ) error {

// 	email = strings.ToLower(strings.TrimSpace(email))

// 	// Check whether user exists
// 	var userID int64

// 	err := s.DB.QueryRow(
// 		ctx,
// 		`SELECT id FROM users WHERE email = $1`,
// 		email,
// 	).Scan(&userID)

// 	if errors.Is(err, pgx.ErrNoRows) {
// 		return errors.New("email is not registered")
// 	}

// 	if err != nil {
// 		return err
// 	}

// 	// Generate OTP
// 	otp, err := utils.GenerateOTP()
// 	if err != nil {
// 		return err
// 	}

// 	// Hash OTP
// 	otpHash, err := utils.HashPassword(otp)
// 	if err != nil {
// 		return err
// 	}

// 	expiresAt := time.Now().Add(10 * time.Minute)

// 	// Remove previous OTPs
// 	_, err = s.DB.Exec(
// 		ctx,
// 		`DELETE FROM password_reset_otps WHERE email = $1`,
// 		email,
// 	)

// 	if err != nil {
// 		return err
// 	}

// 	// Save new OTP
// 	_, err = s.DB.Exec(
// 		ctx,
// 		`
// 		INSERT INTO password_reset_otps
// 		(email, otp_hash, expires_at)
// 		VALUES ($1, $2, $3)
// 		`,
// 		email,
// 		otpHash,
// 		expiresAt,
// 	)

// 	if err != nil {
// 		return err
// 	}

// 	// Send OTP
// 	if err := emailService.SendOTP(email, otp); err != nil {
// 		return err
// 	}

// 	return nil
// }

// func (s *AuthService) VerifyPasswordResetOTP(
// 	ctx context.Context,
// 	email string,
// 	otp string,
// ) error {

// 	email = strings.ToLower(strings.TrimSpace(email))

// 	var (
// 		id        int64
// 		otpHash   string
// 		expiresAt time.Time
// 		verified  bool
// 		attempts  int
// 	)

// 	err := s.DB.QueryRow(
// 		ctx,
// 		`
// 		SELECT id, otp_hash, expires_at, verified, attempts
// 		FROM password_reset_otps
// 		WHERE email = $1
// 		ORDER BY created_at DESC
// 		LIMIT 1
// 		`,
// 		email,
// 	).Scan(
// 		&id,
// 		&otpHash,
// 		&expiresAt,
// 		&verified,
// 		&attempts,
// 	)

// 	if errors.Is(err, pgx.ErrNoRows) {
// 		return errors.New("OTP not found or expired")
// 	}

// 	if err != nil {
// 		return err
// 	}

// 	if time.Now().After(expiresAt) {
// 		return errors.New("OTP has expired")
// 	}

// 	if verified {
// 		return errors.New("OTP has already been used")
// 	}

// 	if attempts >= 5 {
// 		return errors.New("too many OTP attempts")
// 	}

// 	// Increase attempt count
// 	_, _ = s.DB.Exec(
// 		ctx,
// 		`
// 		UPDATE password_reset_otps
// 		SET attempts = attempts + 1
// 		WHERE id = $1
// 		`,
// 		id,
// 	)

// 	// Compare OTP
// 	if err := utils.CheckPassword(otp, otpHash); err != nil {
// 		return errors.New("invalid OTP")
// 	}

// 	// Mark verified
// 	_, err = s.DB.Exec(
// 		ctx,
// 		`
// 		UPDATE password_reset_otps
// 		SET verified = TRUE
// 		WHERE id = $1
// 		`,
// 		id,
// 	)

// 	return err
// }

// func (s *AuthService) ResetPassword(
// 	ctx context.Context,
// 	email string,
// 	newPassword string,
// ) error {

// 	email = strings.ToLower(strings.TrimSpace(email))

// 	if len(newPassword) < 6 {
// 		return errors.New("password must be at least 6 characters")
// 	}

// 	var verified bool

// 	err := s.DB.QueryRow(
// 		ctx,
// 		`
// 		SELECT verified
// 		FROM password_reset_otps
// 		WHERE email = $1
// 		ORDER BY created_at DESC
// 		LIMIT 1
// 		`,
// 		email,
// 	).Scan(&verified)

// 	if errors.Is(err, pgx.ErrNoRows) {
// 		return errors.New("please verify OTP first")
// 	}

// 	if err != nil {
// 		return err
// 	}

// 	if !verified {
// 		return errors.New("please verify OTP first")
// 	}

// 	// Hash new password
// 	passwordHash, err := utils.HashPassword(newPassword)
// 	if err != nil {
// 		return err
// 	}

// 	// Update password
// 	commandTag, err := s.DB.Exec(
// 		ctx,
// 		`
// 		UPDATE users
// 		SET password_hash = $1,
// 		    updated_at = NOW()
// 		WHERE email = $2
// 		`,
// 		passwordHash,
// 		email,
// 	)

// 	if err != nil {
// 		return err
// 	}

// 	if commandTag.RowsAffected() == 0 {
// 		return errors.New("email is not registered")
// 	}

// 	// Delete OTP after successful reset
// 	_, err = s.DB.Exec(
// 		ctx,
// 		`
// 		DELETE FROM password_reset_otps
// 		WHERE email = $1
// 		`,
// 		email,
// 	)

// 	return err
// }


package services

import (
	"context"
	"errors"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"

	"beyond-script/backend/models"
	"beyond-script/backend/utils"
)

type AuthService struct {
	DB         *pgxpool.Pool
	JWTSecret  string
	JWTExpires int
}

func NewAuthService(
	db *pgxpool.Pool,
	jwtSecret string,
	jwtExpires int,
) *AuthService {

	return &AuthService{
		DB:         db,
		JWTSecret:  jwtSecret,
		JWTExpires: jwtExpires,
	}
}

func (s *AuthService) Register(
	ctx context.Context,
	name string,
	email string,
	password string,
) (*models.User, error) {

	name = strings.TrimSpace(name)
	email = strings.ToLower(strings.TrimSpace(email))

	if name == "" {
		return nil, errors.New("name is required")
	}

	if email == "" {
		return nil, errors.New("email is required")
	}

	if len(password) < 6 {
		return nil, errors.New("password must contain at least 6 characters")
	}

	// Check whether email already exists
	var existingID int64

	err := s.DB.QueryRow(
		ctx,
		`SELECT id FROM users WHERE email = $1`,
		email,
	).Scan(&existingID)

	if err == nil {
		return nil, errors.New("email already registered")
	}

	if !errors.Is(err, pgx.ErrNoRows) {
		return nil, err
	}

	// Hash password
	passwordHash, err := utils.HashPassword(password)

	if err != nil {
		return nil, err
	}

	var user models.User

	err = s.DB.QueryRow(
		ctx,
		`
		INSERT INTO users
			(name, email, password_hash)
		VALUES
			($1, $2, $3)
		RETURNING id, name, email, created_at, updated_at
		`,
		name,
		email,
		passwordHash,
	).Scan(
		&user.ID,
		&user.Name,
		&user.Email,
		&user.CreatedAt,
		&user.UpdatedAt,
	)

	if err != nil {
		return nil, err
	}

	return &user, nil
}

type LoginResult struct {
	User  *models.User
	Token string
}

func (s *AuthService) Login(
	ctx context.Context,
	email string,
	password string,
) (*LoginResult, error) {

	email = strings.ToLower(strings.TrimSpace(email))

	var user models.User

	err := s.DB.QueryRow(
		ctx,
		`
		SELECT
			id,
			name,
			email,
			password_hash,
			created_at,
			updated_at
		FROM users
		WHERE email = $1
		`,
		email,
	).Scan(
		&user.ID,
		&user.Name,
		&user.Email,
		&user.PasswordHash,
		&user.CreatedAt,
		&user.UpdatedAt,
	)

	if errors.Is(err, pgx.ErrNoRows) {
		return nil, errors.New("invalid email or password")
	}

	if err != nil {
		return nil, err
	}

	err = utils.CheckPassword(
		password,
		user.PasswordHash,
	)

	if err != nil {
		return nil, errors.New("invalid email or password")
	}

	token, err := utils.GenerateToken(
		user.ID,
		user.Email,
		s.JWTSecret,
		s.JWTExpires,
	)

	if err != nil {
		return nil, err
	}

	return &LoginResult{
		User:  &user,
		Token: token,
	}, nil
}

func (s *AuthService) RequestPasswordReset(
	ctx context.Context,
	email string,
	emailService *EmailService,
) error {

	email = strings.ToLower(strings.TrimSpace(email))

	// Check whether user exists
	var userID int64

	err := s.DB.QueryRow(
		ctx,
		`SELECT id FROM users WHERE email = $1`,
		email,
	).Scan(&userID)

	if errors.Is(err, pgx.ErrNoRows) {
		return errors.New("email is not registered")
	}

	if err != nil {
		return err
	}

	// Generate OTP
	otp, err := utils.GenerateOTP()
	if err != nil {
		return err
	}

	// Hash OTP
	otpHash, err := utils.HashPassword(otp)
	if err != nil {
		return err
	}

	expiresAt := time.Now().Add(10 * time.Minute)

	// Remove previous OTPs
	_, err = s.DB.Exec(
		ctx,
		`DELETE FROM password_reset_otps WHERE email = $1`,
		email,
	)

	if err != nil {
		return err
	}

	// Save new OTP
	_, err = s.DB.Exec(
		ctx,
		`
		INSERT INTO password_reset_otps
		(email, otp_hash, expires_at)
		VALUES ($1, $2, $3)
		`,
		email,
		otpHash,
		expiresAt,
	)

	if err != nil {
		return err
	}

	// Send OTP
	if err := emailService.SendOTP(email, otp); err != nil {
		return err
	}

	return nil
}

func (s *AuthService) VerifyPasswordResetOTP(
	ctx context.Context,
	email string,
	otp string,
) error {

	email = strings.ToLower(strings.TrimSpace(email))

	var (
		id        int64
		otpHash   string
		expiresAt time.Time
		verified  bool
		attempts  int
	)

	err := s.DB.QueryRow(
		ctx,
		`
		SELECT id, otp_hash, expires_at, verified, attempts
		FROM password_reset_otps
		WHERE email = $1
		ORDER BY created_at DESC
		LIMIT 1
		`,
		email,
	).Scan(
		&id,
		&otpHash,
		&expiresAt,
		&verified,
		&attempts,
	)

	if errors.Is(err, pgx.ErrNoRows) {
		return errors.New("OTP not found or expired")
	}

	if err != nil {
		return err
	}

	if time.Now().After(expiresAt) {
		return errors.New("OTP has expired")
	}

	if verified {
		return errors.New("OTP has already been used")
	}

	if attempts >= 5 {
		return errors.New("too many OTP attempts")
	}

	// Increase attempt count
	_, _ = s.DB.Exec(
		ctx,
		`
		UPDATE password_reset_otps
		SET attempts = attempts + 1
		WHERE id = $1
		`,
		id,
	)

	// Compare OTP
	if err := utils.CheckPassword(otp, otpHash); err != nil {
		return errors.New("invalid OTP")
	}

	// Mark verified
	_, err = s.DB.Exec(
		ctx,
		`
		UPDATE password_reset_otps
		SET verified = TRUE
		WHERE id = $1
		`,
		id,
	)

	return err
}

func (s *AuthService) ResetPassword(
	ctx context.Context,
	email string,
	newPassword string,
) error {

	email = strings.ToLower(strings.TrimSpace(email))

	if len(newPassword) < 6 {
		return errors.New("password must be at least 6 characters")
	}

	var verified bool

	err := s.DB.QueryRow(
		ctx,
		`
		SELECT verified
		FROM password_reset_otps
		WHERE email = $1
		ORDER BY created_at DESC
		LIMIT 1
		`,
		email,
	).Scan(&verified)

	if errors.Is(err, pgx.ErrNoRows) {
		return errors.New("please verify OTP first")
	}

	if err != nil {
		return err
	}

	if !verified {
		return errors.New("please verify OTP first")
	}

	// Hash new password
	passwordHash, err := utils.HashPassword(newPassword)
	if err != nil {
		return err
	}

	// Update password
	commandTag, err := s.DB.Exec(
		ctx,
		`
		UPDATE users
		SET password_hash = $1,
		    updated_at = NOW()
		WHERE email = $2
		`,
		passwordHash,
		email,
	)

	if err != nil {
		return err
	}

	if commandTag.RowsAffected() == 0 {
		return errors.New("email is not registered")
	}

	// Delete OTP after successful reset
	_, err = s.DB.Exec(
		ctx,
		`
		DELETE FROM password_reset_otps
		WHERE email = $1
		`,
		email,
	)

	return err
}
