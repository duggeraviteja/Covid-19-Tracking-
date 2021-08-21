import React,  { useState}from "react";
import {Bar } from "react-chartjs-2";
import { NavLink } from "react-router-dom";



const Graph = ()=>{
    const [values,setdata] = useState([]);
    const [val,setVal] =useState(0);


    function handle(event) {
      let val = parseInt(event.target.value);

      if(val >= 37){
        alert("Enter valid Number");
        return;
      } else {
        setVal(val);
      }
    }
    window.onload = function() {
      getCoviddata();
    };



    function validate(event) {
      getCoviddata();

    }
    const getCoviddata = async () =>{
      const response = await fetch('https://data.covid19india.org/data.json');
      const actualData = await response.json();
      //console.log(data);
     // console.log(actualData.statewise[0]);

      setdata(actualData.statewise[val]);

    }
   

const data = {
    type :'bar',
    labels : ['ActiveCases','Confirmed','Recovered','Deaths'],

    datasets :[{
        label : 'Covid-19 Live Status',
        
    
        data :[values.active,values.confirmed,values.recovered,values.deaths],

    

        backgroundColor: [
            'rgba(255, 255, 0, 0.2)',
            'rgba(255, 0, 64, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(255, 0, 0, 0.2)',
            'rgba(54, 200, 235, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
    }]
}
    
    return(
        <>
<div className="col-8 col-12 mx-auto text-center">
<h2>Graph Showing Data of Covid-19 Cases In India</h2>

<input type="number" id="fname"  className="p-2 m-2" onChange={handle} name="name" placeholder="Enter State Number" autoFocus/>
<input type="submit" className="btn btn-info m-2" onClick={validate} value="Submit"/>

</div>
        <div className="conatainer-flex col-md-6 col-12 mx-auto mt-4 m-2 graph-page">
          <h1 className="text-center m-2 p-2">{values.state }</h1>
  
<div >
<Bar data={data} />

</div>
             
        </div>



<div className="text-center mt-3 mb-3">
<i>Refere State Numbers here</i> 
<NavLink to='/statewisedata'> <h5>  Check </h5></NavLink>

</div>
        
        </>

    );

}

export default Graph;
