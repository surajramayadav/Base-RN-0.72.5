import React from 'react'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Navigation from './src/routes/navigation';

const App = () => {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App