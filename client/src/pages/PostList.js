import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/Read/postList.scss';
import Card from '../components/Read/Card';
import JoinBtn from '../components/Read/_propeties/JoinBtn';
import LikeBtn from '../components/Read/_propeties/LikeBtn';
import { getNoToken } from "../utils/Axios";

const PostList = ()=> {

    const [data, setData] = useState([]);
    const [likeStatus, setLikeStatus] = useState(false);

    const getData = async () => {
        const response = await getNoToken(`http://localhost:8080/api/posts`);
        console.log( response );
        setData(response);
    }

    // 좋아요 버튼
    const likePost = async () => {
        if (likeStatus) {
            // 좋아요 취소
            console.log("dislike");
            // const result = await axios.delete(BACK_SERVER + "", {postId : props.data._id, userId : user._id});
            setLikeStatus(false);
        } else {
            // 좋아요
            console.log("like");
            // const result = await axios.post(BACK_SERVER + "", {postId : props.data._id, userId : user._id});
            setLikeStatus(true);
        }
    }

    // 현재 좋아요 상태 가져오기
    const getLikeStatus = async () => {
        console.log("likeStatus");
        // const result = await axios.get(BACK_SERVER + "", {postId : props.data._id, userId : user._id});
        // console.log(result);
        // setLikeStatus(result);
    }

    useEffect(() => {
        getData();
        getLikeStatus();
    }, []);

    const navigate = useNavigate();
    const link = (url) => {
        console.log("work");
        navigate("/post/" + url);
    }
    return (
        <div className="PostList">
            <div onClick={() => {link('write')}}>
                <JoinBtn title="게시글 작성"/>
            </div>
            <div className='CompoWrap_flex'>
                {data.map( data =>{
                    console.log(data.id);
                    return (
                        <div className='cardWrap'>
                            <div onClick={() => {link(data._id)}}> 
                                <Card key={data._id} data={data} />
                            </div>
                            <LikeBtn like={likeStatus} onClick={likePost}/>
                        </div>
                    );
                })}
                
            </div>
            
        </div>
    )
}

export default PostList;
