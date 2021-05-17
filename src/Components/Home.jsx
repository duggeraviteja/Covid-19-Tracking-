import React,  {useEffect, useState}from "react";
import { NavLink } from "react-router-dom";

const Home=  () => {

const [data,setdata] = useState([]);

  const getCoviddata = async () =>{
    const response = await fetch('https://api.covid19india.org/data.json');
    const actualData = await response.json();
    //console.log(data);

    if(actualData){
     // console.log(actualData.statewise[0]);
      setdata(actualData.statewise[0]);
    }
    else{
      console.log("check your connection");
    }
    

  }
  useEffect(() => {
    getCoviddata();
  
  }, []);
 
    return (
        <>


  <div className="main m-4">
<h2 >Track Covid-19 In India </h2> 
<i className="live"><li>live</li></i>
  </div>



  <div className="container-fluid cnt mt-5">
     <div className="row">
     

                

<div className="col-11 mx-auto mt-3 mb-5  ">

<div className="row gy-4">


<div className="col-md-4 col-12 mx-auto">
  <div className="card ca" >
    <div className="card-body">
      <h4 className="card-title"> Country </h4> <hr />
      <h1>INDIA</h1> 
    </div>
  </div>
</div>


<div className="col-md-4 col-12 mx-auto">
  <div className="card-2 ca" >
    <div className="card-body">
      <h4 className="card-title"> Total ActiveCases</h4>
      <hr />
      <h1>{data.active}</h1>
    </div>
  </div>
</div>


<div className="col-md-4 col-12 mx-auto">
  <div className="card-3 ca">
    <div className="card-body">
      <h4 className="card-title"> Total Confirmed</h4>
      <hr />
      <h1>{data.confirmed}</h1>
    </div>
  </div>
</div>

<div className="col-md-4 col-12 mx-auto">
  <div className="card-4 ca">
    <div className="card-body">
      <h4 className="card-title"> Total Recovered</h4>
      <hr />
      <h1>{data.recovered}</h1>
    </div>
  </div>
</div>

<div className="col-md-4 col-12 mx-auto">
  <div className="card-5 ca">
    <div className="card-body">
      <h4 className="card-title"> Total Deaths</h4>
      <hr />
      <h1>{data.deaths}</h1>
    </div>
  </div>
</div>

<div className="col-md-4 col-12 mx-auto">
  <div className="card-6 ca">
    <div className="card-body">
      <h4 className="card-title"> Last  Updated</h4>
      <hr />
      <h1>{data.lastupdatedtime}</h1>
    </div>
  </div>
</div>

</div>
</div>
<div>
  <NavLink to="/statewisedata"  className="state-wise btn ">  Track covid-19 cases statewise </NavLink>
</div>


</div>
</div>







 


 





        </>

    );

}


export default Home;
