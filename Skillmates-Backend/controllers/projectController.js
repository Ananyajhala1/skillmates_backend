const  pool= require ( '../database.js');

async function getProjects(){
    const result = await pool.query("SELECT * from Project");
    const [rows] =result;
    console.log(rows);
    return rows;
    }
    
    async function getProject(id){
        const [rows] = await pool.query(`SELECT * FROM Project WHERE project_id = ${id}`);
        return rows[0];
    }
    
    // const Users = await getUsers;
    // const User = await getUser(1);
    // console.log(User);
    
    async function createProject(created_by,title,description,created_at,github_repository,tech_stack_tags) {
        const [rows] = await pool.query(`INSERT INTO Project (created_by,title,description,created_at,github_repository,tech_stack_tags)
                                          values(?,?,?,?,?,?,?) `,[created_by,title,description,created_at,github_repository,tech_stack_tags])
        return rows;               
    }

  
      async function deleteproject(id) {
        try {
          const [rows] = await pool.query(`DELETE FROM Project WHERE project_id = ?`, [id]);
          return rows;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
      
  module.exports= {getProject,deleteproject,createProject,getProjects};