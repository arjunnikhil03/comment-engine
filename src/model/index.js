const { Sequelize ,DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: console.log,
    storage: 'db/comment-engine.sqlite'
});

const Users = require('./users')(sequelize,DataTypes);

module.exports = {
    sequelize,
    Users
}