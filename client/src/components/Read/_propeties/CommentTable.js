import dummy from '../../../data/data.json';

function CommentTable (){
    //postId가 1인 댓글만 보여지게
    const postId = 1;
    const commentList = dummy.comments.filter(comment =>(
        comment.postId === postId
    ))
    console.log(commentList);
    return(
        <>
        <table>
            <tbody>
            {commentList.map( comment => (
                <tr key={comment.id}>
                    
                    <td>{comment.frofile}</td>
                    <td>{comment.userId}</td>
                    <td>{comment.comment}</td>
                    <td>{comment.date}</td>
                    <td>
                        <button type='button'>삭제</button>
                    </td>
                    </tr>
            ))}
            </tbody>       
        </table>
        </>
    );
}

export default CommentTable;