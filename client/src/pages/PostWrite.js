import PostForm from "../components/Post/PostForm";
import '../components/Post/postWrite.scss';

function PostWrite () {
    return (
        <div className="PostWrite">
            <div className="postFormWrap">
                <h1>공동구매 모집하기</h1>
                <PostForm />
            </div>
        </div>
    )
}

export default PostWrite;