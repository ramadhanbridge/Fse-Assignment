import conn from '../config/db.js';

class Message_model {
  constructor() {
    this.connection = conn.dbConnection();
  }

  add_message = async (message) => {
    try {
      const result = await this.connection.query(`
        INSERT INTO messages(user_id, user_name, message_body)
        VALUES('${message.user_id}', '${message.user_name}', '${message.message_body}')
        RETURNING *;
      `);

      return result.rows[0];
    } catch (error) {
      console.error(error);
    }
  }

  get_all_message = async () => {
    try {
      const result = await this.connection.query(`SELECT * FROM messages`);
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Message_model();
