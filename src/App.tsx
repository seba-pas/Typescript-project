import React, {useState, useEffect} from 'react';
import List from './components/List';
import './App.css';




 

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string

}

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [

  {
  nick: 'dapelu',
  subMonths: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu',
  description: 'dapelu hace de moderador'
  },
  {
  nick: 'seba_pas',
  subMonths: 9,
  avatar: 'https://i.pravatar.cc/150?u=sebapas'
  }

]
    


function App() {
  const [subs, setSubs] = useState<Array<Sub>>([]) //<Sub>[]
  const [newsSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

 useEffect(() => {
setSubs(INITIAL_STATE)
 }, [])


  return (
    <div className="App">
      <h1>los aubs de la pagina</h1>
<List subs={subs}/>
     
    </div>
  );
}

export default App;
