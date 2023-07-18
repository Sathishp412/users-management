import React from 'react'

export const UserService = {
  getUserData() {
    return [
        {
          id: "1",
          userName: "Sathish",
          companyID: "E009",
          companyName: "Trivium",
          userType: "Developer"
        },
        {
          id: "2",
          userName: "Dheeraj",
          companyID: "E023",
          companyName: "TCS",
          userType: "Tester",
        },
        {
            id: "3",
            userName: "Naveen",
            companyID: "E024",
            companyName: "CG",
            userType: "Tester",
          },
      ] 
  },
  
  getUserDataWithProjectDetails() {

    return [
      {
        id: "1",
        userName: "Sathish",
        companyID: "E009",
        companyName: "Trivium",
        userType: "Developer",
        projects : [
           { id: "PID-1",
             projectName: "Sams"            

           },
           { id: "PID-2",
             projectName: "Reiter Esential"            

           }

        ]
      },
      {
        id: "2",
        userName: "Dheeraj",
        companyID: "E023",
        companyName: "TCS",
        userType: "Tester",
        projects : [
          { id: "PID-1",
            projectName: "Siemens Energy"            

          },
          { id: "PID-2",
            projectName: "Evora"            

          }

       ]
      },
      {
          id: "3",
          userName: "Avinash",
          companyID: "E024",
          companyName: "Trivium",
          userType: "Developer",
          projects : [
            { id: "PID-1",
              projectName: "Siemens Mobility"            
  
            },
            { id: "PID-2",
              projectName: "SAMS"            
  
            }
  
         ]
        },
        {
          id: "4",
          userName: "Naveen",
          companyID: "E025",
          companyName: "Trivium",
          userType: "Developer",
          projects : [           
  
         ]
        },
    ]
  },

  getUserWithProjectData(){
    return Promise.resolve(this.getUserDataWithProjectDetails().slice(0, 10));
},

getUser(){
  return Promise.resolve(this.getUserData)
},




}
