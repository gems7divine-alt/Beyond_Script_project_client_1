package routes

import (
	"beyond-script/backend/handlers"
	"beyond-script/backend/middleware"

	"github.com/gin-gonic/gin"
	"time"
)

func AuthRoutes(
	router *gin.RouterGroup,
	authHandler *handlers.AuthHandler,
	rateLimiter *middleware.RateLimiter,
) {

	auth := router.Group("/auth")

	auth.Use(
		rateLimiter.Limit(10, time.Minute),
	)

	auth.POST("/register", authHandler.Register)
	auth.POST("/login", authHandler.Login)

	auth.POST(
		"/forgot-password",
		authHandler.ForgotPassword,
	)

	auth.POST(
		"/verify-otp",
		authHandler.VerifyOTP,
	)

	auth.POST(
		"/reset-password",
		authHandler.ResetPassword,
	)
}