import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/Read/postList.scss';
import Card from '../components/Read/Card';
import JoinBtn from '../components/Read/_propeties/JoinBtn';
import LikeBtn from '../components/Read/_propeties/LikeBtn';
import { getNoToken, deleteData, post } from "../utils/Axios";

const PostList = ()=> {

    const [data, setData] = useState([]);
    const [likeStatus, setLikeStatus] = useState(false);

    const getData = async () => {
        const response = await getNoToken(`/posts`);
        console.log( response );
        setData(response.data);
    }

    // 좋아요 버튼
    // const likePost = async () => {
    //     if (likeStatus) {
    //         // 좋아요 취소
    //         console.log("dislike");
    //         const result = await deleteData("/likes/delete", {data:{ postId : props.data._id, userId : user._id}});
    //         setLikeStatus(false);
    //     } else {
    //         // 좋아요
    //         console.log("like");
    //         const result = await post("/likes", {postId : props.data._id, userId: user._id});
    //         setLikeStatus(true);
    //     }
    // }

    // 현재 좋아요 상태 가져오기
    // const getLikeStatus = async () => {
    //     console.log("likeStatus");
    //     const result = await getNoToken("/likes/islike", {postId : props.data._id, userId: user._id});
    //     console.log("LIKE", result.data);
    //     if (result.data == null) {
    //         setLikeStatus(false);
    //     } else {
    //         setLikeStatus(true);
    //     }
    // }

    useEffect(() => {
        getData();
        // getLikeStatus();
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
                        </div>
                    );
                })}
                
            </div>
            
        </div>
    )
}

export default PostList;
