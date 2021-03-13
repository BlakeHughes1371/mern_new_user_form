import logo from './logo.svg';
import './App.css';
import PersonInfo from './components/PersonInfo';
function App() {
  return (
    <div className="App">
      <PersonInfo firstName={""} lastName={""} email={""} password={""} confirmpassword={""}></PersonInfo>
    </div>
  );
}

export default App;
