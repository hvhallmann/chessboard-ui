## MS: neide-ui
@baas
Descrição do que o projeto faz

# Ultimo Build Pipeline
| Dev                                                                                               | Master   |
| :---:                                                                                             | :---:    |
| ![dev](http://git.btfinanceira.com.br/baas/neide-ui/badges/dev/pipeline.svg "Ultimo Deploy Dev")  | ![master](http://git.btfinanceira.com.br/baas/neide-ui/badges/master/pipeline.svg "Ultimo Master")   |

# Health Ambiente
- Ambiente Single [healths](http://10.100.98.65:8089/healths)
- Ambiente Cluster [healths](http://10.100.98.94/mp/healths)

# Env Files
### What other .env files can be used?

* .env: Default.
* .env.local: Local overrides. This file is loaded for all environments except test.
* .env.development, .env.test, .env.production: Environment-specific settings.
* .env.development.local, .env.test.local, .env.production.local: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

* npm start: .env.development.local, .env.development, .env.local, .env
* npm run build: .env.production.local, .env.production, .env.local, .env
* npm test: .env.test.local, .env.test, .env (note .env.local is missing)