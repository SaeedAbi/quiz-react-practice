import Index from "./Components/Header";
import Main from "./Components/Main";

export default function App(){
  return <div className='app'>
    <Index/>
    <Main className='main'>
      <p>1.15</p>
      <p>Question?</p>
    </Main>
  </div>
}