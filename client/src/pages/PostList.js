import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/Read/postList.scss';
import Card from '../components/Read/Card';
import JoinBtn from '../components/Read/_propeties/JoinBtn';
import axios from 'axios';

const PostList = ()=> {

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get(`http://localhost:8080/api/posts`);
        console.log( response.data );
        setData(response.data);
    }
    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();
    const link = (url) => {
        console.log("work");
        navigate("/post/" + url);
    }
    return (
        <div className="PostList">
            <div className='CompoWrap_flex'>
                {data.map( data =>{
                    console.log(data.id);
                    return (
                        <div>
                            {/* <Card key={data.id} data={data} component={Link} to={'/post/:id'}/> */}
                            <div onClick={() => {link(data._id)}}>
                                <Card key={data._id} data={data} />
                            </div>
                        </div>
                    );
                })}
                
            </div>
            <div onClick={() => {link('write')}}>
                <JoinBtn title="게시글 작성"/>
            </div>
        </div>
    )
}

export default PostList;
