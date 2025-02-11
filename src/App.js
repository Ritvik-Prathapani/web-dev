import './App.css';
// import Greeting from './components/Greetings';
// import Temp from './components/Temp';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login';
function App() {
  return (
    <div >
      <header className="text-center">
        {/* <h1 className='text-primary'>Hello All</h1> */}
        {/* <Header/>
        <Body />
        <Footer />  */}
        {/* <Greeting />   */}
        {/* <Temp/> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
