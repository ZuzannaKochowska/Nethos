import './App.css';
import { Headline } from './Headline';
import { Services } from './Services';
import { Why } from './Why';
import { About } from './AboutUs';
import { Clients } from './Clients';

function App() {
  return (
    <div className="App">
      
      <Headline />
      <Services />
      <Why />
      <About/>
      <Clients />
      
    </div>
  );
}

export default App;
