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
    const [data, setData] = useState([]);
    const {id} = useParams();

    const getData = async () => {
        const response = await axios.get(`http://localhost:8080/post:${id}`, {
            params: { 
                post : data.id ,
            }
        });
        setData(response.data);
    }
    useEffect(() => {
        getData();
    }, [])

    // const checkCookie = () => {

    // }
    
    return(
        <div className='PostView'>
            <div className='CompoWrap_flex'>
                <PostImg data={data.poto}/>
                <MainInfo data={data.title}/>
            </div>
            
            <div className='postViewWrap'>
                <Description />
                <Comment />
            </div>
        </div>
    )
}

export default PostView;
