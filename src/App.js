import Index from "./Components/Header";
import Main from "./Components/Main";
import {useContext, useEffect, useReducer} from "react";
import Loader from "./Components/Loader/Loader";
import Error from "./Components/Error/Error";
import StartScreen from "./Components/StartScreen";
import Question from "./Components/Question";
import NextButton from "./Components/NextButton";
import Progress from "./Components/Progress";
import FinishedScreen from "./Components/FinishedScreen";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";
import quizContext, {useQuiz} from "./Context/QuizContext";

const SEC_PER_QUESTION=30

export default function App(){
const {status} = useQuiz()


  return <div className='app'>
    <Index/>
    <Main>
      {status === 'loading' && <Loader/>}
      {status === 'error' && <Error/>}
      {status === 'ready' && <StartScreen />}
      {status ==='active' && <>
          <Progress/>
         <Question/>
        <Footer>
        <Timer/>
         <NextButton/>
        </Footer> </>
      }
      {status ==='finished' && <FinishedScreen/>}
    </Main>
  </div>
}