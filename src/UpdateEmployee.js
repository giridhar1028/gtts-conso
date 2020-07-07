import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TableCom from './tableCom';

  class Dashboard extends React.Component  {
    constructor(props) {
      super(props);
      this.state = { 
                  empdetails: [],
                  activitydetails:[],
                  data:"",

       }
       
  }
    

    componentDidMount(){
      var result;
      let formdata =new FormData();  
      formdata.append('filename',"EmployeeData");
      axios.post("http://localhost:8002/getempdata",formdata)
          .then(res=>{  
            result=   res.data;
            console.log("status text",res.data);
            console.log("data from file text",result.Employee);

          var EmployeeList=[];
          var EmpEmailList={};
          var ActivityList=[];

          

           

            
            
            
          result.Activity.map((act)=>{
              ActivityList.push(act);
          });

            this.setState({empdetails:EmployeeList,activitydetails:ActivityList,data:result.Employee});

          })

    }


  
      render(){
        
  
    return (
    <div className="App">
      
                <h1>Update Employee </h1>
                <div style={{width:"500px",height:"500px",overflowX:"auto"}}>
              {this.state.data && <TableCom data={this.state.data}></TableCom>}
              </div>
    </div>
  )}
}

export default Dashboard;



