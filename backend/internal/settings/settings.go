package settings

import (
	"github.com/caarlos0/env/v11"
)

type Settings struct {
	Application `envPrefix:"APP_"`
	Postgres    `envPrefix:"DB_"`
}

// TOOD: implement loading the environment variables
func Load() (Settings, error) {
	settings, err := env.ParseAs[Settings]()
	if err != nil {
		return Settings{}, err
	}
	// fmt.Printf("settings: %v", settings)
	return settings, nil
}
