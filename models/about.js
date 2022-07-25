const makeDb = require("../libraries/db");

async function aboutModel(){
    const db = makeDb();
 

    try{
    const checkAbout = 'SELECT main_heading, description FROM about'; 
    console.log(checkAbout,"ffffffffffffffffffff");
    const selectAbout = await db.query(checkAbout);

    
    console.log(selectAbout,"about");
    return selectAbout;
    }
    catch(error){
        console.log(error);
        return false;
    } finally {
        await db.close();
    }
}

module.exports = {aboutModel};
