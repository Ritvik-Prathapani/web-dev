import './App.css';
// import Greeting from './components/Greetings';
// import Temp from './components/Temp';
import Header from './components/Header';
function App() {
  return (
    <div className="container-fluid">
      <header className="text-center">
        <h1 className='text-primary'>Hello All</h1>
        <Header/>
        {/* <Greeting />  
        <Temp/> */}
      </header>
    </div>
  );
}

export default App;
