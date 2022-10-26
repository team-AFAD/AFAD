import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/Read/postList.scss';
import Card from '../components/Read/Card';
import axios from 'axios';

const PostList = ()=> {

    const [data, setData] = useState();

    const getData = async () => {
        const response = await axios.get(`http://localhost:8080/api/posts`);
        console.log( response.data );
        setData(response.data);
    }
    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();
    const link = (id) => {
        navigate("/post/" + id);
    }
    return (
        <div className="PostList">
            <div className='CompoWrap_flex'>
                {data.map( data =>{
                    // console.log(data.id);
                    return (
                            // <Card key={data.id} data={data} component={Link} to={'/post/:id'}/>
                            <div onClick={() => {link(data.id)}}>
                                <Card key={data.id} data={data} />
                            </div>
                        )
                    })}
                {/* <게시글작성버튼> */}
            </div>
        </div>
    )
}

export default PostList;
