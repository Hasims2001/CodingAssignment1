import { createContext, useState } from 'react';
import { Home } from './Components/Home';
import { RepoCard } from './Components/RepoCard';
export const StoredContext = createContext()
function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div className="App">
     <StoredContext.Provider value={{userData, setUserData}}>
        <Home />
        <RepoCard />
     </StoredContext.Provider>
    </div>
  );
}

export default App;
