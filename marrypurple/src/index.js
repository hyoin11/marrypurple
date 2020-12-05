import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser, check } from './modules/user';

const sagaMiddleware = createSagaMiddleware();  //Saga를 Redux Store에 연결하기 위해 쓰는 미들웨어

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));// 스토어 안에 만들어 둔 사가미들웨어와 리듀서를 연결해준다.

function loadUser(){
  try{
    const user = localStorage.getItem('user');
    if(!user) return;

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  }catch(e){
    console.log('localStorage error');
  }
}
sagaMiddleware.run(rootSaga);
loadUser();

//Provider를 가져와 만들어둔 store객체를 싹 넣어주면 어디서 써도 저 store값을 그냥 불러올 수 있다. useSelector가 그 일을 해줄것이다
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
