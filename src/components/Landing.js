import logo from '../github.svg';
import '../App.css';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        GITHUB-USER insight generator
        </p>
      </header>
    </div>
  );
}

export default Landing;