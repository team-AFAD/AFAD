import dummy from '../../../data/data.json';

function CommentTable (){
    console.log(dummy);
    return(
        <>
        <table>
            {dummy.comments.map( comment => (
                <tr key={comment.postId}>
                    
                    <td>{comment.frofile}</td>
                    <td>{comment.userId}</td>
                    <td>{comment.comment}</td>
                    <td>{comment.date}</td>
                    <td>
                        <button type='button'>삭제</button>
                    </td>
                    </tr>
            ))}
                    
        </table>
        </>
    );
}

export default CommentTable;