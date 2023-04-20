
import {Image} from './components/ReactLogo/logo';
import {Button} from './components/Button/button';
import './App.css';
import { ReactBenefit } from './components/ReactBenefits/benefit';

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
        <Image/>
        <ReactBenefit/>
        <Button/>
        </header>
      </div>
   
  );
}

export default App;
