const  pool = require( '../database.js');

async function getUsers(){
    const result = await pool.query("SELECT * from User");
    const [rows] =result;
    console.log(rows);
    return rows;                

    }
    
    async function getUser(id){
      try{
        const [rows] = await pool.query(`SELECT * FROM User WHERE user_id= ${id}`);
        return rows;
      }
      catch(error){
        console.error(error);
        throw error;
      }
    }
    
    // const Users = await getUsers;
    // const User = await getUser(1);
    // console.log(User);
    
    async function createUser(username,password,github_username,email) {
        const [rows] = await pool.query(`INSERT INTO User (username,password,github_username,email)
                                          values(?,?,?,?) `,[username,password,github_username,email])
        return rows;               
    }

    async function updateUser(id, username, email,) {
        try {
          const [rows] = await pool.query(`UPDATE User SET username = ?, email = ? WHERE user_id = ?`, [username,email, id]);
          return rows;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
      async function deleteUser(id) {
        try {
          const [rows] = await pool.query(`DELETE FROM User WHERE user_id = ?`, [id]);
          return rows;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

      async function UpdateProfilePic(id,profile_pic){
        try{
        const [rows] = await pool.query(`UPDATE User SET profile_pic = ? WHERE user_id = ?`, [profile_pic, id])
        return rows; 
        }
       
            catch (error) {
                console.error(error);
                throw error;
              }
        }  
        async function updateBio(id,bio){
            try{
            const [rows] = await pool.query(`UPDATE User SET bio = ? WHERE user_id  = ?`, [bio, id])
            return rows; 
            }
           
                catch (error) {
                    console.error(error);
                    throw error;
                  }
            } 
            async function getExpert_tags(id){
              try{
              const [rows] = await pool.query(`SELECT * FROM UserExpertTags WHERE user_id = ? `, [id]);
              return rows; 
              }
             
                  catch (error) {
                      console.error(error);
                      throw error;
                    }
              }              
         
            async function CreateExpert_tags(id,tag_name){
                try{
                const [rows] = await pool.query(`INSERT INTO UserExpertTags (user_id ,tag_name) 
                values(?,?) `,[id,tag_name])
                return rows; 
                }
               
                    catch (error) {
                        console.error(error);
                        throw error;
                      }
                }              
                async function getIntrests(id){
                  try{
                  const [rows] = await pool.query(`SELECT * FROM UserExpertTags WHERE user_id = ? `, [id]);
                  return rows; 
                  }
                 
                      catch (error) {
                          console.error(error);
                          throw error;
                        }
                  }              
             
                async function CreateIntrests(id,tag_name){
                    try{
                    const [rows] = await pool.query(`INSERT INTO UserExpertTags (user_id ,tag_name) 
                    values(?,?) `,[id,tag_name])
                    return rows; 
                    }
                   
                        catch (error) {
                            console.error(error);
                            throw error;
                          }
                    }              
                         
    


    
module.exports= {getUsers,getUser,createUser,updateUser,deleteUser,UpdateProfilePic,updateBio,getExpert_tags,CreateExpert_tags};

    