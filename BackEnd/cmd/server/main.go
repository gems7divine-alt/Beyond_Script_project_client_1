package main

import (
	"log"

	"beyond-script/backend/config"
	"beyond-script/backend/database"
	"beyond-script/backend/handlers"
	"beyond-script/backend/middleware"
	"beyond-script/backend/routes"
	"beyond-script/backend/services"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	// Load configuration
	cfg := config.Load()

	// Validate JWT secret
	if cfg.JWTSecret == "" {
		log.Fatal("JWT_SECRET is not configured")
	}

	// Connect PostgreSQL
	db, err := database.ConnectPostgres(*cfg)
	if err != nil {
		log.Fatal("Unable to connect to PostgreSQL: ", err)
	}
	defer db.Close()

	// Create authentication service
	authService := services.NewAuthService(
		db,
		cfg.JWTSecret,
		cfg.JWTExpireHours,
	)

	// Create email service
	emailService := services.NewEmailService(
		cfg.SMTPHost,
		cfg.SMTPPort,
		cfg.SMTPUsername,
		cfg.SMTPPassword,
		cfg.SMTPFrom,
	)

	// Create authentication handler
	authHandler := handlers.NewAuthHandler(
		authService,
		emailService,
	)

	// Create rate limiter
	rateLimiter := middleware.NewRateLimiter()

	// Create Gin router
	router := gin.Default()

	// CORS configuration
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:5173",
		},
		AllowMethods: []string{
			"GET",
			"POST",
			"PUT",
			"DELETE",
			"OPTIONS",
		},
		AllowHeaders: []string{
			"Origin",
			"Content-Type",
			"Accept",
			"Authorization",
		},
		AllowCredentials: true,
	}))

	// Health check
	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"success": true,
			"message": "Beyond Script backend is running",
		})
	})

	// API routes
	api := router.Group("/api")

	// Authentication routes
	routes.AuthRoutes(
		api,
		authHandler,
		rateLimiter,
	)

	// Start server
	log.Println("Beyond Script backend running on port", cfg.Port)

	if err := router.Run(":" + cfg.Port); err != nil {
		log.Fatal(err)
	}
}