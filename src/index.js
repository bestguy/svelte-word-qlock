import Qlock from './Qlock.html';
import './index.css';

const qlock = new Qlock({
  target: document.querySelector('body')
});

if (module.hot) {
  module.hot.accept();
}
