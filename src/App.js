// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './components/PostList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <h1>Redux</h1> */}
        </header>
        <main>
          <PostList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
