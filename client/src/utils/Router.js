import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default Router;