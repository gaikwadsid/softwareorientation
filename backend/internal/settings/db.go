package settings

type Postgres struct {
	Host     string `env:"HOST"`
	Name     string `env:"NAME"`
	Port     int    `env:"PORT"`
	User     string `env:"USER"`
	Password string `env:"PASSWORD"`
}

// TODO: implement the connection string
func (p Postgres) Connection() string {
	return ""
}
