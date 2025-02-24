'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // usersId: {
      //   type: Sequelize.INTEGER,
      //   field: 'user_id',
      //   references: {
      //     model: 'users',
      //     key: 'id',
      //   },
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE"
      // },
      messagesId: {
        type: Sequelize.INTEGER,
        field: 'messages_id',
        references: {
          model: 'chat_messages',
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      chatPicture: {
        type: Sequelize.STRING,
        field: 'chat_picture',
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('chats');
  }
};