import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/ConfigureStore';
import './App.css';
import SignUpUser from './components/SignUp';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/signup" element={<SignUpUser />} />
          <Route path="/" element={<h1>login</h1>} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
