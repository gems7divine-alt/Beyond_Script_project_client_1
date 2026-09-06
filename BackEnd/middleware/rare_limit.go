package middleware

import (
	"net/http"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
)

type RateLimiter struct {
	mu       sync.Mutex
	requests map[string][]time.Time
}

func NewRateLimiter() *RateLimiter {

	return &RateLimiter{
		requests: make(map[string][]time.Time),
	}
}

func (r *RateLimiter) Limit(
	maxRequests int,
	window time.Duration,
) gin.HandlerFunc {

	return func(c *gin.Context) {

		ip := c.ClientIP()

		now := time.Now()

		r.mu.Lock()

		requests := r.requests[ip]

		var recent []time.Time

		for _, requestTime := range requests {

			if now.Sub(requestTime) < window {
				recent = append(recent, requestTime)
			}
		}

		if len(recent) >= maxRequests {

			r.mu.Unlock()

			c.JSON(http.StatusTooManyRequests, gin.H{
				"success": false,
				"message": "Too many requests. Please try again later.",
			})

			c.Abort()
			return
		}

		recent = append(recent, now)

		r.requests[ip] = recent

		r.mu.Unlock()

		c.Next()
	}
}