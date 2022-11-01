import PostImg from '../components/Read/PostImg';
import MainInfo from '../components/Read/MainInfo';
import Description from '../components/Read/Description';
import Comment from '../components/Read/Comment';
import Writer from '../components/Read/_propeties/Writer';
import '../components/Read/postView.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import '../postView.scss';

const BACK_SERVER = "http://localhost:8080/api";

function PostView ( ){
    const [data, setData] = useState(null);
    const { id } = useParams();
    // const navigate = useNavigate();

    const getData = async () => {
        const response = await axios.get(`${BACK_SERVER}/posts/${id}`);
        console.log("data", response.data);
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
                        <PostImg photo={data.photo}/>
                        <MainInfo data={data}/>
                    </div>
                    
                    <div className='postViewWrap'>
                        <Writer writer={data.nickname} />
                        <Description description={data.desc} />
                        <Comment postIdNum={data._id}/>
                        
                    </div>
                </div>
            ) : (
                "유효하지 않거나 삭제된 게시글 입니다."
            ) }
            </div>
            
    )
}

export default PostView;
