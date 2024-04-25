const  pool = require( '../database.js');



 async function getMostActiveUser(){
    try{
        const [rows] = await pool.query(`
        SELECT u.username,
            COUNT(DISTINCT p.project_id) AS projects_involved,
            COUNT(DISTINCT sg.group_id) AS study_groups_involved,
            COUNT(DISTINCT ht.team_id) AS hackathon_teams_involved,
            COUNT(DISTINCT po.post_id) AS posts_created
        FROM User u
        LEFT JOIN Project p ON u.user_id = p.created_by
        LEFT JOIN UserStudyGroups usg ON u.user_id = usg.user_id
        LEFT JOIN StudyGroups sg ON usg.group_id = sg.group_id
        LEFT JOIN UserHackathonTeams uht ON u.user_id = uht.user_id
        LEFT JOIN HackathonTeams ht ON uht.team_id = ht.team_id
        LEFT JOIN Posts po ON u.user_id = po.created_by
        GROUP BY u.user_id
        ORDER BY (projects_involved + study_groups_involved + hackathon_teams_involved + posts_created) DESC limit 3;
    `, );
        return rows; 
        }
       
            catch (error) {
                console.error(error);
                throw error;
              }
        }     
   

        module.exports = {
     getMostActiveUser
        };
        
