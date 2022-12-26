import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import '../components/Read/postList.scss';
import Card from '../components/Read/Card';
import JoinBtn from '../components/Read/_propeties/JoinBtn';
// import LikeBtn from '../components/Read/_propeties/LikeBtn';
import { getNoToken, deleteData, post } from "../utils/Axios";
import { AuthContext } from '../context/AuthContext';

const PostList = ()=> {
    const {user} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [likeStatus, setLikeStatus] = useState(false);

    const getData = async () => {
        const response = await getNoToken(`/posts`);
        console.log( response );
        setData(response.data);
    }
        const [numPeople, setNumPeople] = useState(1);
      // 현제 참여 인원 가져오기
    const getNumPeople = async () => {
        // console.log("getNumber");
        console.log(data._id);
        const result = await getNoToken(`/joins/groupPeople`, {params : {postId : data._id}});
        console.log("이거 확인하기",result.data);
        setNumPeople(result.data);
    }
    console.log("------",data);

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
        getNumPeople();
        // getLikeStatus();
    }, []);

    const navigate = useNavigate();
    const link = (url) => {
        console.log("work");
        navigate("/post/" + url);
    }
    return (
        <>
            <div className='postListBtnWrap' onClick={() => {link('write')}}>
                <JoinBtn title="게시글 작성"/>
            </div>
        <div className="PostList">
            <div className='CompoWrap_flex'>
                {data.map( data =>{
                    console.log(data.id);
                    return (
                        <div className='cardWrap'  key={data._id} onClick={() => {
                            user ? 
                            link(data._id) : 
                            (
                                (window.confirm('로그인 후 이용 가능합니다.'))
                                ?
                                    navigate("/login")
                                :
                                    navigate("/post")
                            )
                            }}>
                            {/* <div>  */}
                                <Card data={data} />
                            {/* </div> */}
                        </div>
                    );
                })}
                
            </div>
            
        </div>
        </>
    )
}

export default PostList;
