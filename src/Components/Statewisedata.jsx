import React,  {useEffect, useState}from "react";

const Statewisedata =()=>{


    const [data,setdata] = useState([]);
    const getCoviddata = async () =>{
        const response = await fetch('https://data.covid19india.org/data.json');
        const actualData = await response.json();
        //console.log(data);
       console.log(actualData.statewise);
        setdata(actualData.statewise);
    
      }
      useEffect(() => {
        getCoviddata();
      
      }, []);
  

    return (


        <>
    <div className="col-md-11 col-12 mx-auto"> 

        <div className="Container-fluid "> 
        <div className="m-3 ">
            <h1 className="text-center head"> India Covid-19 StateWise Data</h1>
        </div>

        <div className = "table-responsive m-2">

        <table className=" table table-hover table-bordered m-3 mb-5">
  <thead>
    <tr className="heading">
      <th scope="col">#</th>
      <th scope="col">State</th>
      <th scope="col">ActiveCases</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
      <th scope="col">LastUpdated</th>

    </tr>
  </thead>
  {
        data.map((curEle, index) => {
            return(
                <tbody key={index}>
                <tr >

                <td>{index}</td>
                  <td className="state-bgm" >{curEle.state}</td>
                  <td  className="active-bgm"  >{curEle.active}</td>
                  <td  className="confirmed-bgm" >{curEle.confirmed}</td>
                  <td  className="recovered-bgm" >{curEle.recovered}</td>
                  <td className="deaths-bgm">{curEle.deaths}</td>
                  <td className="lastupdate-bgm">{curEle.lastupdatedtime}</td>
                </tr>
                
              </tbody>
            );
        })
    }


  

 
</table>

</div>



        </div>
        </div>

        </>
    );
}


export default Statewisedata;
