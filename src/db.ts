import * as mysql from 'mysql2';
import { environment } from './env';
export class Database {
  
  public readonly connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: environment.DB_HOST,
      user: environment.DB_USERNAME,
      password: environment.DB_PASSWORD,
      database: environment.DB_DATABASE,
      port:environment.DB_PORT
    });

    this.connection.connect(function(err:mysql.QueryError) {
      if (err) {
        return console.error('error: ' + err.message);
      }    
      console.log('Connected to the MySQL server.');
    });
  }
}



