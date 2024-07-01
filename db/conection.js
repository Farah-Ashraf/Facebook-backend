//import modules
import { Sequelize } from 'sequelize'

//create connection 
export const sequlizeInstance = new Sequelize("assignment6_facebook","root","",{
    host:'localhost',
    dialect:"mysql",
})
// check connection
const db_connection = async () => {
    try {
        await sequlizeInstance.sync({ alter:true });
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}
//export
export {
    db_connection
}

