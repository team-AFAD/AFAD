// import PostWrite from "./components/Post/PostWrite";
import PostView from "./components/Read/PostView";
// import RegisterForm from "./components/Register/RegisterForm";
import Messenger from "./pages/messenger/messenger";

import './app.scss';

function App() {
  return (
    <div className="App">

      {/* <PostWrite /> */}
      <PostView />
      <Messenger />
      {/* <RegisterForm /> */}
    </div>
  );
}

export default App;
