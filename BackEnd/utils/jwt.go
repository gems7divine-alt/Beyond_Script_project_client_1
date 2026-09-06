package utils

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type Claims struct {
	UserID int64  `json:"user_id"`
	Email  string `json:"email"`

	jwt.RegisteredClaims
}

func GenerateToken(
	userID int64,
	email string,
	secret string,
	expireHours int,
) (string, error) {

	now := time.Now()

	claims := Claims{
		UserID: userID,
		Email:  email,

		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(
				now.Add(time.Duration(expireHours) * time.Hour),
			),

			IssuedAt: jwt.NewNumericDate(now),

			NotBefore: jwt.NewNumericDate(now),
		},
	}

	token := jwt.NewWithClaims(
		jwt.SigningMethodHS256,
		claims,
	)

	return token.SignedString([]byte(secret))
}