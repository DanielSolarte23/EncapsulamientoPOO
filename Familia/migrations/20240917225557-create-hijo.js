"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Hijos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      direccion: {
        type: Sequelize.STRING,
      },
      telefono: {
        type: Sequelize.STRING,
      },
      padreId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Padres", // Nombre de la tabla `Padre`
          key: "id",
        },
        onDelete: "SET NULL",
        allowNull: true,
      },
      madreId: {
        type: Sequelize.INTEGER,
        madreId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Madres", // Nombre de la tabla `Madre`
            key: "id",
          },
          onDelete: "SET NULL",
          allowNull: true,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Hijos");
  },
};
