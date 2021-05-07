import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const nums = Array.from(Array(100).keys()).map((i) => i + 1);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/item/:id">
          <ItemPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="link-demo">
          {nums.map((n) => (
            <div key={n}>
              <Link to={`/item/${n}`}>Item #{n}</Link>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

function ItemPage() {
  const { id } = useParams();
  const history = useHistory();
  return (
    <div className="page">
      <p>This is item #{id}.</p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
}

export default App;
