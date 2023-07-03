import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { theme } from "./components/Resourse/theme/theme.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Auth0Provider
          domain="dev-tqinqrn4chmb6p7m.us.auth0.com"
          clientId="0VbI0VgjMwnZ0YhQZZ4tJSjfcc7v7jaq"
          authorizationParams={{
            redirect_uri: window.location.origin
          }} 
          cacheLocation="localstorage"
     
        >
          <Provider store={store}>
            <App />
          </Provider>
        </Auth0Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
