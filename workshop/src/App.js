
import './App.css';
import Adress from './Profile/Adress';
import FullName from './Profile/FullName';
import PhotoProfile from './Profile/PhotoProfile';


function App() {
  return (
    <>
      <header className="App-header">
        <PhotoProfile/>
        <FullName/>
        <Adress/>
      </header>
    </>
  );
}

export default App;
