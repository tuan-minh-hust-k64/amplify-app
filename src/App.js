import logo from './logo.svg';
import './App.css';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const options = useAuthenticator();
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <button onClick={options.signOut} >Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
