const sequelize = require('../config/connection');


const seedAll = async() => {
    // add try and catch later
    await sequelize.sync({force: true});
    console.log('\n----------------Database synced---------------\n');

    process.exit(0);
};

seedAll();