import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TopScreen } from './components/screens/TopScreen';

const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  </main>
);

export default App;
