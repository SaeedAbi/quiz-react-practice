import Index from "./Components/Header";
import Main from "./Components/Main";
import {useEffect, useReducer} from "react";

const initialState={
  questions:[],
  status:'loading'
}

function reducer(state,action){
switch (action.type){
  case'dataReceived': return{...state,questions:action.payload,status:'ready'}
  case "dataFailed": return {...state,status:'error'}
  default: throw new Error('Action Unknown')
}

}

export default function App(){

  const [state,dispach]=useReducer(reducer,initialState)

  useEffect(() => {
   fetch('http://localhost:8000/questions').then(res=>res.json()).then(data=>dispach({type: "dataReceived",payload:data})).catch(err=>dispach({type:'dataFailed'}))
  }, []);
  return <div className='app'>
    <Index/>
    <Main className='main'>
      <p>1.15</p>
      <p>Question?</p>
    </Main>
  </div>
}