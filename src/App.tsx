import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Home from './routes/Home';
import i18n from './i18n';
import Navbar from './components/Navbar';

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
