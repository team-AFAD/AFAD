
import Messenger from "./pages/messenger/messenger";
import Login from './components/Login/LoginForm';
import Register from './components/Register/RegisterForm';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

=======
import './app.scss';
import Router from './utils/Router';

// import PostWrite from "./components/Post/PostWrite";
// import PostView from "./components/Read/PostView";
// import PostList from "./components/Read/PostList";


function App() {
  return (

    <div className="App">
      {/* <Router /> */}

      {/* <PostWrite /> */}
      {/* <PostView /> */}
      {/* <PostList /> */}

    <BrowserRouter>
      <Routes>


      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/conversations" element={<Messenger />} />



      </Routes>
    </BrowserRouter>

  );
}

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//       <Routes>
//         <Route path=":id" element={<UserProfile />} />
//         <Route path="me" element={<OwnUserProfile />} />
//       </Routes>
//     </div>
//   );
// }

export default App;
