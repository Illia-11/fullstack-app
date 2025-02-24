'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChatMessage.belongsTo(models.Chat, {
        as: 'chat',
        foreignKey: 'chatId',
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
      
      ChatMessage.belongsTo(models.User, {
        as: 'author',
        foreignKey: 'userId',
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  ChatMessage.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    }
  }, {
    sequelize,
    modelName: 'ChatMessage',
    tableName: 'chat_messages',
    underscored: true,
  });
  return ChatMessage;
};