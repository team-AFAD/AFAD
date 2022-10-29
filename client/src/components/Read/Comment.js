import { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';

import './comment.scss';
import CommentTable from './_propeties/CommentTable';

const BACK_SERVER = "http://localhost:8080/api";

function Comment({postIdNum}){

    const {user} = useContext(AuthContext);
    console.log(user);
    console.log("userID", user._id);
    console.log("user닉값", user.nickname);
    console.log("post", postIdNum);

    const [desc, setDesc] = useState("");

    // 텍스트 가져오기
    const onChange = (e) => {
        console.log(e.target.value);
        setDesc(e.target.value);
    }

    // 댓글 등록
    const onClick = async () => {
        console.log("clicked");
        console.log(desc);
        const result = await axios.post(BACK_SERVER + "/comments", {data:{userId : user._id, postId : postIdNum, desc : desc, nickname : user.nickname}});
        console.log(result);
    }

    return(
        <div className='Comment'>
            
            <div className='commentWrap'>
                {/* <CommentTable postId={postIdNum} userId={user._id} nickname={user.nickname} desc={desc}/> */}
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