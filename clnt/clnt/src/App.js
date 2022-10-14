import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [customerName,setName]=useState("");
  const [customerNumber,setNumber]=useState(0);
  const [customerEmail,setEmail]=useState("");
const [upName,setUpName]=useState("");
const [upEmail,setUpEmail]=useState("");
const [upNumber,setUpNumber]=useState(0);
const [customerList,setcustomerList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setcustomerList(response.data);
    })
  },[]);
  const  addToList=()=>{
    axios.post("/newcustomer",{customerName:customerName,customerNumber:customerNumber,customerEmail:customerEmail});
    console.log(customerName,customerNumber,customerEmail);
  }
  const updateName=(id)=>{
    axios.put("/upcustomer",{id:id,upName:upName});
  }
  const updateEmail=(id)=>{
    axios.put("/upcustomeremail",{id:id,upEmail:upEmail});
  }

  const updateNumber=(id)=>{
    axios.put("/upcustomernumber",{id:id,upNumber:upNumber});
  }

  const deletecustomer=(id)=>{
    axios.delete(`/delcustomer/${id}`);
  }
  return (
    <div 
   
    className="App">
      <h1>Customer details</h1>
<label>Customer Name</label><br/>
<input type="text"
onChange={(event)=>setName(event.target.value)}/><br/>
<label>Customer phone number</label><br/>
<input type="number"
onChange={(event)=>setNumber(event.target.value)}/><br/>
<label>Customer email</label><br/>
<input type="text"
onChange={(event)=>setEmail(event.target.value)}/><br/>
<button onClick={addToList}>Submit</button>
    <h1>Customer Data</h1>
    {customerList.map((val,key)=>{
  return <center><div key={key} class="customer" >
    <h2>{val.name}</h2>
    <h2>{val.phno}</h2>
    <h2>{val.email}</h2>
  <input type="text" onChange={(event)=>setUpName(event.target.value)} placeholder='Enter Name here to Update'/>&nbsp;
  <button onClick={()=>updateName(val._id)}>Update Name</button><br/>

  
  <input type="text" onChange={(event)=>setUpNumber(event.target.value)} placeholder='Enter Number here to Update'/>&nbsp;
  <button onClick={()=>updateNumber(val._id)}>Update Number</button><br/>

  <input type="text" onChange={(event)=>setUpEmail(event.target.value)} placeholder='Enter Email here to Update'/>&nbsp;
  <button onClick={()=>updateEmail(val._id)}>Update Email</button><br/>

  <button onClick={()=>deletecustomer(val._id)}>Delete coustmer</button>
  </div>
  </center>

  })}
    </div>
  );
}

export default App;