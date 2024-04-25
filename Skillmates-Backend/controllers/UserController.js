const  pool = require( '../database.js');
const mongoose = require('mongoose');
const Image = require('../models/image');
const multer = require('multer');
const fs = require('fs');
const mysql = require('mysql2/promise');
const { MongoClient, GridFSBucket } = require('mongodb');
const axios = require('axios');


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
  
async function createUser(username, password, github_username, email, profilePicture) {
    try {
        // Connect to MongoDB
        console.log("hi");
        // const uri = process.env.MONGO_URI;
        // const client = new MongoClient(uri);
        // await client.connect();
        // const database = client.db('test');

        // // Obtain GridFSBucket object
        // const bucket = new GridFSBucket(database);

        // // Download the profile picture from the provided URL
        // const response = await axios.get(profilePicture.url, { responseType: 'arraybuffer' });
        // const imageBuffer = Buffer.from(response.data);

        // // Upload the profile picture to MongoDB using GridFS
        // const uploadStream = bucket.openUploadStream(profilePicture.name);
        // uploadStream.end(imageBuffer);

        // await new Promise((resolve, reject) => {
        //     uploadStream.on('error', (error) => {
        //         console.error('Error uploading profile picture to MongoDB:', error);
        //         reject(new Error('Failed to save profile picture'));
        //     });

        //     uploadStream.on('finish', () => {
        //         resolve();
        //     });
        // });

        // // Insert user information into your MySQL database
        

        const [rows] = await pool.query(`
            INSERT INTO User (username, github_username, email)
            VALUES (?, ?, ?)`, [username, github_username, email]);
          
        // Close the MySQL pool
        await pool.end();

        // Close the MongoDB client
        // await client.close();

        console.log('User created successfully');
    } catch (error) {
        console.error('Failed to create user:', error);
        throw new Error('Failed to create user');
    }
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

    