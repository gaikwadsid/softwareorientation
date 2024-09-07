package handlers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func (s *Service) Hello(c *fiber.Ctx) error {
	return c.Status(fiber.StatusOK).SendString(fmt.Sprintf("Hello %s!", c.Params("name")))
}

func (s *Service) GetRecipes(c *fiber.Ctx) error {
	recipes, err := s.store.GetRecipes(c.Context())
	if err != nil {
		return err
	}

	return c.Status(fiber.StatusOK).JSON(recipes)
}

func (s *Service) CreateRecipe(c *fiber.Ctx) error {
	return c.Status(fiber.StatusOK).SendString(fmt.Sprintf("Hello %s!", c.Params("name")))
}
