
import './App.css';
import ProfilePhoto from './Component/ProfilePhoto';
import FullName from './Component/FullName';
import Address from './Component/Address';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      </header>
    </div>
  );
}

export default App;
