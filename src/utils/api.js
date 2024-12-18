import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config()

const config = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json', 
      'x-api-key': process.env.API_KEY, 
    },
  };


const HOST = process.env.HOST

const Api = {};

Api.Get = (url, cnf) =>
  new Promise((res, rej) => {
    fetch(`${HOST}` + url,(cnf || config)).then((response) => {

        if (!response.ok) {
          return rej(new Error(`Error ${response.status}: ${response.statusText}`));
        }
        response.json().then((data)=>{
            res(data);
        }).catch((err)=>{
            console.log("error", err);
            rej(err);    
        })
      })
      .catch((err) => {
        console.log("error", err);
        rej(err);
      });
  });

Api.DefaultGet = (url,cnf) =>
    new Promise((res, rej) => {
        if(!cnf){
            cnf = config
        }
      fetch(url,cnf).then((response) => {
          if (!response.ok) {
            return rej(new Error(`Error ${response.status}: ${response.statusText}`));
          }
          response.json().then((data)=>{
              res(data);
          }).catch((err)=>{
              console.log("error", err);
              rej(err);    
          })
        })
        .catch((err) => {
          console.log("error", err);
          rej(err);
        });
    });

export default Api;