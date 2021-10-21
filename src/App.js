import './App.css';
import { CentralContainer } from './components/CentralContainer/CentralContainer';

import { CollapsableLandingBackground } from './components/CollapsableLandingBackground/CollapsableLandingBackground';
import { TopLevelTransparentClick } from './components/TopLevelTransparentClick/TopLevelTransparentClick';


function App() {

  return (
    <div className="App">
      <CollapsableLandingBackground />
      <TopLevelTransparentClick />
      <CentralContainer />
    </div>
  );
}

export default App;
