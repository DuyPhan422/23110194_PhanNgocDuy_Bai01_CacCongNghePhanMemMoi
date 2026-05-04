import { Sequelize } from 'sequelize';

// Truyền đúng tên DB, username và password của bạn
const sequelize = new Sequelize('node_fulltask', 'duyphan42', '40938813dD#', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = connectDB;