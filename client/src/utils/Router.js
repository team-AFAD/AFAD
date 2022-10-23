import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from '../components/Header/Header';
import RegisterForm from '../components/Register/RegisterForm';


const Router = () => {
    return (
        <div>
            <BrowserRouter>
            {/* <Header /> */}
                <Routes>
                    {/* <Route path="/" element={<Main />} /> */}
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/messenger">
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;