import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

// let num = ()=>{
//   return 2 + 3;
// }
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [sum,setSum] = useState(0);
    const add = (e)=>{
              e.preventDefault();

  setSum(parseInt(num1) + parseInt(num2));
  
}
// console.log(num1);

  return (
    <div>
  
        
          {/* <p> this is the first react </p> 
          <p>{num()}*/}
        {/* <p>{num1}</p>   */}
           <form onSubmit={add}>
                  <input type="text" id="num1" value={num1} onChange={(event) => setNum1(event.target.value)}></input>
                  <input type="text" id="num2" value={num2} onChange={(event) => setNum2(event.target.value)}></input>
                  <input type="submit"></input> 
                     </form>
                     <p>{sum}</p>     
    </div>



  );

}

export default App;
