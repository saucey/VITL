import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import Reducer from './store/reducer'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './store/epics'
import reportWebVitals from './reportWebVitals';

const observableMiddleware = createEpicMiddleware();
const store = createStore(Reducer, applyMiddleware(observableMiddleware))

observableMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)

reportWebVitals()
