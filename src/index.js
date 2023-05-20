import app from './app.js'
import {sequelize} from './database/database.js'

//import './models/project.js'
//import './models/task.js'

async function main(){
    try {
        await sequelize.sync({force: false})
        app.listen(3000)
        console.log('listening on port 3000');
        } catch(err) {
            console.log(err);
        }
}

main();