
import './App.css';
import { useState, useEffect } from "react";
import { List } from './components/List';
import { Card } from './components/Card';

function App() {
 const [users, setUSers] = useState([]);
 const [userId, setId] = useState('');
 const [userData, setData] = useState('');

  const setActiveRow = (e) => {
    setId(e.target.id);
};

  useEffect(() => {
    (async () => {
        try {
        const response = await fetch(import.meta.env.VITE_GET_LIST);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        setUSers(data);

        } catch (e) {
        console.error(e);
        }
    })()
},  []);


useEffect(() => {
  if (userId && Number(userId) > 0) {
    (async () => {
        try {
        const response = await fetch(import.meta.env.VITE_GET_USER +  userId + '.json');
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const userData = await response.json();
        setData(userData);
        } catch (e) {
        console.error(e);
        }
    })()
  }

  return setData({"id": 0,
                  "name": "",
                  "avatar": "",
                  "details": {
                  "city": "",
                  "company": "",
                  "position": ""
    }})
  }, [userId]
)
  return (
    <div className="container">
      <List users = { users } setActiveRow = { setActiveRow } userId = { userId } />
      <Card data = { userData }/>
    </div>
  )
}

export default App
