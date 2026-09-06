package utils

import (
	"crypto/rand"
	"fmt"
)

func GenerateOTP() (string, error) {
	b := make([]byte, 4)

	if _, err := rand.Read(b); err != nil {
		return "", err
	}

	number := uint32(b[0])<<24 |
		uint32(b[1])<<16 |
		uint32(b[2])<<8 |
		uint32(b[3])

	otp := number%1000000

	return fmt.Sprintf("%06d", otp), nil
}