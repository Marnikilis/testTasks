import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router} from "react-router-dom";
import Converter from "./components/Converter/Converter";
import { useSelector } from "react-redux";

function App() {
  const {usd, eur, pln} = useSelector<number[]>(state => state.reducer);
  const {isFetchError} = useSelector(state => state.reducer);

  if(isFetchError){
    return <h1 style={{textAlign:'center', marginTop:"100px"}}>
      At the moment, for some reason, it is impossible to access the necessary data:(</h1>
  }

  return (
    <Router>
      <div className="App">
        <Header/>
        <MainPage/>
        <div className="wrapper">
          <Navbar/>
          <Routes>
            <Route path='/fromUAHtoUSD' element={<Converter val={usd} cur='USD'/>}/>
            <Route path='/fromUAHtoEUR' element={<Converter val={eur} cur='EUR'/>}/>
            <Route path='/fromUAHtoPLN' element={<Converter val={pln} cur='PLN'/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
