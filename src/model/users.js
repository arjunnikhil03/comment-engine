const { Model  } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return Users.init(sequelize, DataTypes);
}
  
class Users extends Model {
    static init(sequelize, DataTypes) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                type:DataTypes.TEXT,
                unique: true
            },
            password: {
                type:DataTypes.TEXT
            },
            salt: {
                type:DataTypes.TEXT
            },
            email: {
                type:DataTypes.TEXT
            },
            fullname:{
                type:DataTypes.TEXT
            },
            is_deleted:{
                type:DataTypes.BOOLEAN,
                default:false
            },
            type:{
                type:DataTypes.TEXT,
                default:"manual"
            },
            last_login:{
                type:DataTypes.DATE
            },
            created_at:{
                type:DataTypes.DATE
            },
            updated_at:{
                type:DataTypes.DATE
            }
        }, {
        sequelize,
        modelName: 'Users' 
        });

        return Users;
    }
}