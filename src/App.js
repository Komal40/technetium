
import './App.css';
import {Invitation} from './component/Invitation/invitation';

function App() {
  const invite="Birthday Party Invitation";
  const id="jaGdish@gmail.com";
  const name=" jaGdish ";
  const party="birthday party";
  const names="Ritu , Saurabh , Kartik .";
  const venue="Green field Avenue .";

  return (
    <div className="content">
    <Invitation invite={invite} id={id} name={name} party={party} names={names} venue={venue}/>
    </div>
  );
}

export default App;
