import React,{useState} from 'react'
import './App.css';

function App() {

  const [firstname,setfirstname]=useState('');
  const [lastname,setlastname]=useState('');
  const [email,setemail]=useState('');
  const [sub,setsub]=useState('React');

 const handlefirstname=(e)=>{
  setfirstname(e.target.value);
}
const handlelastname=(e)=>{
  setlastname(e.target.value);
}
const handleemail=(e)=>{
  setemail(e.target.value);
}
const handlesub=(e)=>{
  setsub(e.target.value);
}
const handlesubmit=(e)=>{
  alert(`firstname: ${firstname} \nlastname: ${lastname} \nemail: ${email} \nsub: ${sub}`)
  e.prevantDefault();
}

  return (
    <div className="App">
       <nav>
            <ul className="Navbarstyle">
                <li className="Navbarelements ">HOME</li> 
            </ul>
        </nav>
        <h1>Registration form to be filled</h1>
       <div className="registeration">
                <h1 className="head">Registeration Form</h1>
                <form onSubmit={handlesubmit}>
                    <div className="names"><label className="name" >First Name<input type="text" className="space" placeholder="Enter First Name" value={firstname} onChange={handlefirstname}></input></label> </div>
                    <div className="names"> <label className="name">Last Name<input type="text" className="space" placeholder="Enter last Name" value={lastname} onChange={handlelastname}></input></label> </div>
                    <div className="names"><label className="name">Email<input type="text" className="space" placeholder="Enter Email Id" value={email} onChange={handleemail}></input></label> </div>
                    <div className="names"><label className="name">Subject<select className="space" value={sub} onChange={handlesub}><option>React</option><option>Angular</option><option>Vue</option></select></label></div>
                    <div className="names"><button type="submit">Submit</button></div>
                </form>
            </div>
    </div>
  );
}

export default App;
