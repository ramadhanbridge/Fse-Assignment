import pkg from 'pg';
import { config } from 'dotenv';
const { Pool } = pkg;
config();
class Database{

  dbConnection = () => {
    return new Pool({
      connectionString: process.env.PG_CONNECTION
    });
  }
  
}

export default new Database();