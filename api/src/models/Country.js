const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    ccid:{
      type:DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type:DataTypes.STRING,
      allowNull: true,
    },
    flags:{
      type:DataTypes.STRING,
      allowNull: true,
  },
  capital:{
    type:DataTypes.STRING,
    allowNull: true,
  },
  subregion:{
    type:DataTypes.STRING,
    allowNull: true
  },
  area:{
    type:DataTypes.INTEGER,
    allowNull: true
  },
  population:{
    type:DataTypes.INTEGER,
    allowNull: true
  },
  continents:{
    type:DataTypes.STRING,
    allowNull: true
}

  });
};


// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población