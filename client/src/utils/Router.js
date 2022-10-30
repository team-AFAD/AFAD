import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from '../components/Header/Header';
import Main from '../pages/Main';
import Register from '../pages/Register';
import Login from '../pages/Login';
import FindId from '../pages/FindId';
import ResetPw from '../pages/ResetPw';
import PostList from '../pages/PostList';
import PostWrite from '../pages/PostWrite';
import PostView from '../pages/PostView';
import Messenger from "../pages/messenger/messenger";
import MyPage from '../pages/MyPage';
import UserModify from '../pages/UserModify';
import LoginEmail from '../components/Login/LoginEmail';
import Header from '../components/Layout/Header/Header';


const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    {/* <Route path="/" element={<LoginEmail/>} /> */}
                    <Route path="/" element={<Main />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/findid" element={<FindId />} />
                    <Route path='/resetpw' element={<ResetPw />} />
                    
                    <Route path="/post" element={<PostList />} />
                    <Route path="/post/write" element={<PostWrite />} />
                    <Route path="/post/:id" element={<PostView />} />
                    
                    <Route path="/messenger" element={<Messenger />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/modify" element={<UserModify />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
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

export default Router;