module.exports = (sequelize, Sequelize) => {
    const fcontents = sequelize.define("fcontents", {
        idcontents:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contents: {
            type : Sequelize.STRING
        }
    },
        {
            timestamps: false,
            tableName: 'fcontents'
        });
    return fcontents;
}