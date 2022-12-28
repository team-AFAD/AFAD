import { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { post}  from '../../utils/Axios';

import './comment.scss';
import CommentTable from './_propeties/CommentTable';


const BACK_SERVER = process.env.REACT_APP_URL + "/api";

function Comment({postIdNum}){

    const {user} = useContext(AuthContext);
    // console.log(user);
    // console.log("userID", user._id);
    // console.log("user닉값", user.nickname);
    // console.log("post", postIdNum);

    const [desc, setDesc] = useState("");

    // 텍스트 가져오기
    const onChange = (e) => {
        // console.log(e.target.value);
        setDesc(e.target.value);
    }

    // 댓글 등록
    const onClick = async () => {
        // console.log("clicked");
        // console.log(desc);
        const result = await post("/comments", {userId : user._id, postId : postIdNum, desc : desc, nickname : user.nickname});
        // console.log( "result : ", result );
        alert("댓글 작성 완료");
        document.querySelector('textarea').value = "";
        // console.log(result);
        window.location.replace(`/post/${postIdNum}`);
    }


    return(
        <div className='Comment'>
            
            <div className='commentWrap'>
                <CommentTable  postId={postIdNum} userId={user._id} nickname={user.nickname} desc={desc}  />
            </div>
            <div className='commnetFormWrap'>
                <form>
                    <textarea onChange={onChange} name="comment" placeholder='댓글쓰기'></textarea>
                    <br/>
                    <button className='commentBtn' type='button' onClick={onClick}>댓글등록</button>
                </form>
            </div>

        </div>

    )
}

export default Comment;