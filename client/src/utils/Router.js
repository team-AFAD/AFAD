import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Header from '../components/Header/Header';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PostList from '../pages/PostList';
import PostWrite from '../pages/PostWrite';
import PostView from '../pages/PostView';


const Router = () => {
    return (
        <div>
            <BrowserRouter>
            {/* <Header /> */}
                <Routes>
                    {/* <Route path="/" element={<Main />} /> */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/post" element={<PostList />} />
                    <Route path="/post/write" element={<PostWrite />} />
                    <Route path="/post/:id" element={<PostView />} />
                    {/* <Route path="/messenger"> */}
                    {/* </Route> */}

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