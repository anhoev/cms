import expressConfig from './configs/express.config'
import databaseConfig from './configs/database'

expressConfig();
databaseConfig();

module.exports = 'app';