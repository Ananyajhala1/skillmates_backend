const  pool = require( '../database.js');

async function getPosts(){
    const result = await pool.query("SELECT * from Posts");
    const [rows] =result;
    console.log(rows);
    return rows;
    }
    
    async function getPost(id){
        const [rows] = await pool.query(`SELECT * FROM Posts WHERE post_id = ${id}`);
        return rows[0];
    }

    async function createPost(description,title,image,created_by) {
        const [rows] = await pool.query(`INSERT INTO Posts (description,title,image,created_by)
                                          values(?,?,?,?) `,[description,title,image,created_by])
        return rows;               
    }

    async function updatePost(id,description,title,image) {
        try {
          const [rows] = await pool.query(`UPDATE Posts SET description = ?, title = ?, image =? WHERE post_id = ?`, [description,title,image,id]);
          return rows;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
      async function deletePost(id) {
        try {
          const [rows] = await pool.query(`DELETE FROM Post WHERE post_id = ?`, [id]);
          return rows;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

      async function UpdateUpVotes(id){
        try{
        const [rows] = await pool.query(`SELECT * FROM Posts WHERE post_id = ${id}`)
        const upvotes= rows.upvotes +1;
        const [result] = await pool.query(`UPDATE Posts SET upvotes = ? WHERE user_id = ?`, [upvotes, id]);
        return result;
        }
       
            catch (error) {
                console.error(error);
                throw error;
              }
        }  
        

    
module.exports={getPost,getPosts,createPost,deletePost,updatePost,UpdateUpVotes}

   