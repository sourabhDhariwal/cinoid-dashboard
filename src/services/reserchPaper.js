
import React from 'react';
import config from '../config.json';

  const getResearchList = (body,callback) => {
    console.log("body=======",body)
   return fetch(config.BASE_URL+"/research-paper/get-list",
      {
        method: "POST",
        headers: {
        'Content-Type': 'application/vnd.cinoid-dashboard',
      },
      body: JSON.stringify(body)
      }
    )
    
      .then(res => res.json())
      .then(response =>{return response}
       )
      .catch(error => console.log(error));
};

const insertReportData = (body,callback) => {
    console.log("body=======",body)
    const data = new FormData() 
    data.append('research_paper', body)
    console.log(data)
   return fetch(config.BASE_URL+"/research-paper/file-upload",
      {
        method: "POST",
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // },
      body: data
      }
    )
    
      .then(res => res.json())
      .then(response =>{return response}
       )
      .catch(error => console.log(error));
};
export default {
  getResearchList:getResearchList,
  insertReportData:insertReportData
}


