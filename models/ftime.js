module.exports = (sequelize, Sequelize) => {
    const ftime = sequelize.define("ftime", {
        idtime:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time: {
            type : Sequelize.STRING
        }
    },
        {
            timestamps: false,
            tableName: 'ftime'
        });
    return ftime;
}