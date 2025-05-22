import { BrowserRouter } from 'react-router-dom'
import Router from './pages/Router'
import {Provider} from 'react-redux'
import { persistStore } from 'redux-persist'
import { Store } from './redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

const persister = persistStore(Store)

const App = () => {

  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persister}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
