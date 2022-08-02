const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {

    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dificulty:{
      type: DataTypes.ENUM(["1", "2", "3", "4", "5"]),
      allowNull: true
    },
    duration:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    season:{
      type: DataTypes.ENUM(["Winter", "Autumn", "Spring", "Summer"]),
      allowNull: true
    }
  });
};


// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)