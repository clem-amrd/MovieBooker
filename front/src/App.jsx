import './App.css'
import { UserProvider } from './contexts/UserContext';
import Router from './routes/router';

function App() {

  return (
    <UserProvider>
      <Router/>
    </UserProvider>
  )
}

export default App
