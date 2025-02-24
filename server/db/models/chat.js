'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chat.belongsToMany(models.User, {
        through: 'chats_to_users',
        foreignKey: 'chatId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Chat.hasMany(models.ChatMessage, {
        as: 'chat_messages',
        foreignKey: 'chatId',
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Chat.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    chatPicture: {
      type: DataTypes.STRING,
      field: 'chat_picture',
    }
  }, {
    sequelize,
    modelName: 'Chat',
    tableName: 'chats',
    underscored: true,
  });
  return Chat;
};