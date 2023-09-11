import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './services/stateService.js'
import { BrowserRouter } from 'react-router-dom'

// React and ReactDom this is two npm packegas that create React
// ReactDOM with WebPack take all components composite that writed with React and send it to DIV element 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
      //Render transform all components into Vanilla JS
      //Render have 2 types:
      // 1.First type is MOUNT (first render)
      // 2. Render( all others renders)
      // There is also UNMOUNT that means component dissapier from DOM. And render doesn't happen.

      // To work with redux in react we need npm module react-redux
      <BrowserRouter>
            <Provider store={store}>
                  <App />
            </Provider>
      </BrowserRouter>
)
