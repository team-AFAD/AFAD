import './comment.scss';
import CommentTable from './_propeties/CommentTable';

function Comment(){
    return(
        <div className='Comment'>
            
            <div className='commentWrap'>
                <CommentTable />
            </div>
            <div className='commnetFormWrap'>
                <form>
                    <textarea name="comment" placeholder='댓글쓰기'></textarea>
                    <br/>
                    <button className='commentBtn' type='button'>댓글등록</button>
                </form>
            </div>

        </div>

    )
}

export default Comment;