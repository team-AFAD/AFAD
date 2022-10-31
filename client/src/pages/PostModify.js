import ModifyForm from '../components/Post/ModifyForm';
import '../components/Post/postWrite.scss';

function PostModify () {
    return (
        <div className="PostWrite">
            <div className="postFormWrap">
                <h1>공동구매 모집 수정</h1>
                <ModifyForm />
            </div>
        </div>
    )
}

export default PostModify;