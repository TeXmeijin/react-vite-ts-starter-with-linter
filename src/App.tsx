import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TopScreen } from './components/screens/TopScreen';
import { SecondScreen } from '~/components/screens/SecondScreen';

const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopScreen />
        </Route>
        <Route exact path="/second">
          <SecondScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  </main>
);

export default App;
