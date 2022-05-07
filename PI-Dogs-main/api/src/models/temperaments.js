const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("temperaments", {
    id: {
      type: DataTypes.UUID, // genera un id random para que no se pise con el id de la api
      primaryKey: true // para especificar una primaryKey
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
