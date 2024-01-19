import { useSelector } from 'react-redux';
import './App.css'
import Theme from './component/Theme';
import Logout from './component/Logout';
import Login from './component/Login';

function App() {
  const { isLight } = useSelector((state) => state.theme);
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div
      className="App"
      style={{
        backgroundColor: isLight ? 'white' : 'black',
        color: isLight ? 'black' : 'white',
        minHeight: '100vh',
        padding: '3rem'
      }}
    >
      <Theme />
      {
        isAuthenticated ? <Logout /> : <Login />
      }
    </div>
  );
}

export default App;