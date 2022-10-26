import PostImg from '../components/Read/PostImg';
import MainInfo from '../components/Read/MainInfo';
import Description from '../components/Read/Description';
import Comment from '../components/Read/Comment';
import '../components/Read/postView.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import '../postView.scss';

function PostView ( ){
    const [data, setData] = useState(null);
    const { id } = useParams();

    const getData = async () => {
        const response = await axios.get(`http://localhost:8080/api/posts/${id}`);
        console.log( response.data );
        setData(response.data);
    }
    useEffect(() => {
        getData();
    }, []);

    // const checkCookie = () => {

    // }
    
    return(
        <div>
            { data != null ? (
                <div className='PostView'>
                    <div className='CompoWrap_flex'>
                        <PostImg />
                        <MainInfo data={data}/>
                    </div>
                    
                    <div className='postViewWrap'>
                        <Description description={data.desc}/>
                        <Comment />
                    </div>
                </div>
            ) : (
                "잘못되었다."
            ) }
            </div>
            
    )
}

export default PostView;
