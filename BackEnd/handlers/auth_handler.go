// package handlers

// import (
// 	"net/http"

// 	"github.com/gin-gonic/gin"

// 	"beyond-script/backend/services"
// )

// type AuthHandler struct {
// 	AuthService *services.AuthService
// 	EmailService *services.EmailService
// }

// func NewAuthHandler(
// 	authService *services.AuthService,
// 	emailService *services.EmailService,
// ) *AuthHandler {
// 	return &AuthHandler{
// 		AuthService: authService,
// 		EmailService: emailService,
// 	}
// }

// type RegisterRequest struct {
// 	Name     string `json:"name" binding:"required"`
// 	Email    string `json:"email" binding:"required,email"`
// 	Password string `json:"password" binding:"required,min=6"`
// }

// type LoginRequest struct {
// 	Email    string `json:"email" binding:"required,email"`
// 	Password string `json:"password" binding:"required"`
// }

// type ForgotPasswordRequest struct {
// 	Email string `json:"email" binding:"required,email"`
// }

// type VerifyOTPRequest struct {
// 	Email string `json:"email" binding:"required,email"`
// 	OTP   string `json:"otp" binding:"required,len=6"`
// }

// type ResetPasswordRequest struct {
// 	Email       string `json:"email" binding:"required,email"`
// 	NewPassword string `json:"new_password" binding:"required,min=6"`
// }

// func (h *AuthHandler) Register(c *gin.Context) {

// 	var request RegisterRequest

// 	if err := c.ShouldBindJSON(&request); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{
// 			"success": false,
// 			"message": "Invalid registration data",
// 			"error":   err.Error(),
// 		})
// 		return
// 	}

// 	user, err := h.AuthService.Register(
// 		c.Request.Context(),
// 		request.Name,
// 		request.Email,
// 		request.Password,
// 	)

// 	if err != nil {

// 		status := http.StatusInternalServerError

// 		if err.Error() == "email already registered" {
// 			status = http.StatusConflict
// 		}

// 		if err.Error() == "password must contain at least 6 characters" {
// 			status = http.StatusBadRequest
// 		}

// 		if err.Error() == "name is required" ||
// 			err.Error() == "email is required" {
// 			status = http.StatusBadRequest
// 		}

// 		c.JSON(status, gin.H{
// 			"success": false,
// 			"message": err.Error(),
// 		})

// 		return
// 	}

// 	c.JSON(http.StatusCreated, gin.H{
// 		"success": true,
// 		"message": "Registration successful",
// 		"user": gin.H{
// 			"id":    user.ID,
// 			"name":  user.Name,
// 			"email": user.Email,
// 		},
// 	})
// }

// func (h *AuthHandler) Login(c *gin.Context) {

// 	var request LoginRequest

// 	if err := c.ShouldBindJSON(&request); err != nil {

// 		c.JSON(http.StatusBadRequest, gin.H{
// 			"success": false,
// 			"message": "Please enter a valid email and password",
// 		})

// 		return
// 	}

// 	result, err := h.AuthService.Login(
// 		c.Request.Context(),
// 		request.Email,
// 		request.Password,
// 	)

// 	if err != nil {

// 		if err.Error() == "invalid email or password" {

// 			c.JSON(http.StatusUnauthorized, gin.H{
// 				"success": false,
// 				"message": "Invalid email or password",
// 			})

// 			return
// 		}

// 		c.JSON(http.StatusInternalServerError, gin.H{
// 			"success": false,
// 			"message": "Something went wrong",
// 		})

// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{

// 		"success": true,

// 		"message": "Login successful",

// 		"token": result.Token,

// 		"user": gin.H{
// 			"id":    result.User.ID,
// 			"name":  result.User.Name,
// 			"email": result.User.Email,
// 		},
// 	})
// }

// func (h *AuthHandler) ForgotPassword(c *gin.Context) {
// 	var request ForgotPasswordRequest

// 	if err := c.ShouldBindJSON(&request); err != nil {
// 		c.JSON(400, gin.H{
// 			"success": false,
// 			"message": "Please enter a valid email address",
// 		})
// 		return
// 	}

// 	err := h.AuthService.RequestPasswordReset(
// 		c.Request.Context(),
// 		request.Email,
// 		h.EmailService,
// 	)

// 	if err != nil {
// 		if err.Error() == "email is not registered" {
// 			c.JSON(404, gin.H{
// 				"success": false,
// 				"message": "Email is not registered",
// 			})
// 			return
// 		}

// 		c.JSON(500, gin.H{
// 			"success": false,
// 			"message": "Unable to send OTP. Please try again later.",
// 		})
// 		return
// 	}

// 	c.JSON(200, gin.H{
// 		"success": true,
// 		"message": "OTP has been sent to your email",
// 	})
// }

// func (h *AuthHandler) VerifyOTP(c *gin.Context) {
// 	var request VerifyOTPRequest

// 	if err := c.ShouldBindJSON(&request); err != nil {
// 		c.JSON(400, gin.H{
// 			"success": false,
// 			"message": "Please enter a valid 6-digit OTP",
// 		})
// 		return
// 	}

// 	err := h.AuthService.VerifyPasswordResetOTP(
// 		c.Request.Context(),
// 		request.Email,
// 		request.OTP,
// 	)

// 	if err != nil {
// 		c.JSON(400, gin.H{
// 			"success": false,
// 			"message": err.Error(),
// 		})
// 		return
// 	}

// 	c.JSON(200, gin.H{
// 		"success": true,
// 		"message": "OTP verified successfully",
// 	})
// }

// func (h *AuthHandler) ResetPassword(c *gin.Context) {
// 	var request ResetPasswordRequest

// 	if err := c.ShouldBindJSON(&request); err != nil {
// 		c.JSON(400, gin.H{
// 			"success": false,
// 			"message": "Please provide a valid password",
// 		})
// 		return
// 	}

// 	err := h.AuthService.ResetPassword(
// 		c.Request.Context(),
// 		request.Email,
// 		request.NewPassword,
// 	)

// 	if err != nil {
// 		c.JSON(400, gin.H{
// 			"success": false,
// 			"message": err.Error(),
// 		})
// 		return
// 	}

// 	c.JSON(200, gin.H{
// 		"success": true,
// 		"message": "Password reset successfully",
// 	})
// }

package handlers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"beyond-script/backend/services"
)

type AuthHandler struct {
	AuthService  *services.AuthService
	EmailService *services.EmailService
}

func NewAuthHandler(
	authService *services.AuthService,
	emailService *services.EmailService,
) *AuthHandler {
	return &AuthHandler{
		AuthService:  authService,
		EmailService: emailService,
	}
}

type RegisterRequest struct {
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}

type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

type ForgotPasswordRequest struct {
	Email string `json:"email" binding:"required,email"`
}

type VerifyOTPRequest struct {
	Email string `json:"email" binding:"required,email"`
	OTP   string `json:"otp" binding:"required,len=6"`
}

type ResetPasswordRequest struct {
	Email       string `json:"email" binding:"required,email"`
	NewPassword string `json:"new_password" binding:"required,min=6"`
}

func (h *AuthHandler) Register(c *gin.Context) {

	var request RegisterRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": "Invalid registration data",
			"error":   err.Error(),
		})
		return
	}

	user, err := h.AuthService.Register(
		c.Request.Context(),
		request.Name,
		request.Email,
		request.Password,
	)

	if err != nil {

		status := http.StatusInternalServerError

		if err.Error() == "email already registered" {
			status = http.StatusConflict
		}

		if err.Error() == "password must contain at least 6 characters" {
			status = http.StatusBadRequest
		}

		if err.Error() == "name is required" ||
			err.Error() == "email is required" {
			status = http.StatusBadRequest
		}

		c.JSON(status, gin.H{
			"success": false,
			"message": err.Error(),
		})

		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"success": true,
		"message": "Registration successful",
		"user": gin.H{
			"id":    user.ID,
			"name":  user.Name,
			"email": user.Email,
		},
	})
}

func (h *AuthHandler) Login(c *gin.Context) {

	var request LoginRequest

	if err := c.ShouldBindJSON(&request); err != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": "Please enter a valid email and password",
		})

		return
	}

	result, err := h.AuthService.Login(
		c.Request.Context(),
		request.Email,
		request.Password,
	)

	if err != nil {

		if err.Error() == "invalid email or password" {

			c.JSON(http.StatusUnauthorized, gin.H{
				"success": false,
				"message": "Invalid email or password",
			})

			return
		}

		c.JSON(http.StatusInternalServerError, gin.H{
			"success": false,
			"message": "Something went wrong",
		})

		return
	}

	c.JSON(http.StatusOK, gin.H{

		"success": true,

		"message": "Login successful",

		"token": result.Token,

		"user": gin.H{
			"id":    result.User.ID,
			"name":  result.User.Name,
			"email": result.User.Email,
		},
	})
}

func (h *AuthHandler) ForgotPassword(c *gin.Context) {
	var request ForgotPasswordRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(400, gin.H{
			"success": false,
			"message": "Please enter a valid email address",
		})
		return
	}

	err := h.AuthService.RequestPasswordReset(
		c.Request.Context(),
		request.Email,
		h.EmailService,
	)

	if err != nil {
		if err.Error() == "email is not registered" {
			c.JSON(404, gin.H{
				"success": false,
				"message": "Email is not registered",
			})
			return
		}

		// TEMPORARY: log the real underlying error so we can see what's
		// actually failing (bad SMTP creds, blocked port, DB error, etc).
		// Remove this log line once the root cause is fixed.
		log.Println("RequestPasswordReset failed:", err)

		c.JSON(500, gin.H{
			"success": false,
			"message": "Unable to send OTP. Please try again later.",
		})
		return
	}

	c.JSON(200, gin.H{
		"success": true,
		"message": "OTP has been sent to your email",
	})
}

func (h *AuthHandler) VerifyOTP(c *gin.Context) {
	var request VerifyOTPRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(400, gin.H{
			"success": false,
			"message": "Please enter a valid 6-digit OTP",
		})
		return
	}

	err := h.AuthService.VerifyPasswordResetOTP(
		c.Request.Context(),
		request.Email,
		request.OTP,
	)

	if err != nil {
		c.JSON(400, gin.H{
			"success": false,
			"message": err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"success": true,
		"message": "OTP verified successfully",
	})
}

func (h *AuthHandler) ResetPassword(c *gin.Context) {
	var request ResetPasswordRequest

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(400, gin.H{
			"success": false,
			"message": "Please provide a valid password",
		})
		return
	}

	err := h.AuthService.ResetPassword(
		c.Request.Context(),
		request.Email,
		request.NewPassword,
	)

	if err != nil {
		c.JSON(400, gin.H{
			"success": false,
			"message": err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"success": true,
		"message": "Password reset successfully",
	})
}