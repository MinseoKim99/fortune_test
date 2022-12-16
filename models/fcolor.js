module.exports = (sequelize, Sequelize) => {
    const fcolor = sequelize.define("fcolor", {
        idcolor:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type : Sequelize.STRING
        }
    },
        {
            timestamps: false,
            tableName: 'fcolor'
        });
    return fcolor;
}