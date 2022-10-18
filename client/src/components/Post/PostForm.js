import './postForm.scss';
import InputTitle from '../Input/InputTitle';

function PostForm () {
    return (
        <div className="PostForm">
            <form>
                <p>제목</p> <InputTitle/>
            </form>
        </div>
    )
}

export default PostForm;