import './app.scss';
// import PostWrite from "./components/Post/PostWrite";
import PostView from "./components/Read/PostView";
// import RegisterForm from "./components/Register/RegisterForm";
import Messenger from "./pages/messenger/messenger";
// import LoginForm from './components/Login/LoginForm';

function App() {
  return (
    <div className="App">

      {/* <PostWrite /> */}
      <PostView />
      <Messenger />
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
