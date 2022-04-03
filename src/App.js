import './App.css';
import { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import db from './firebase';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(
    () => 
      onSnapshot(collection(db, "entries"), (snapshot) => 
        setEntries(snapshot.docs.map((doc) => doc.data()))
      ),
     []
  );

  return (
    <div className="App">
      <span>hello</span>
      <div>
      {
        entries.map(item => (
          <div className='entries'>
          {item.entry}
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default App;
