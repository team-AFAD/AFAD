import { useState, useEffect} from 'react';
import axios from 'axios';
import {getNoToken, } from '../../../utils/Axios';


// import dummy from '../../../data/comment.json';
const BACK_SERVER = "http://localhost:8080/api";

function CommentTable (props){
    console.log( "props : ", props );
    const [datas, setData] = useState(null);
    //postId가 1인 댓글만 보여지게
    // const postId = 1;
    // const commentList = dummy.comments.filter(comment =>(
    //     comment.postId === postId
    // ))
    // console.log(props.nickname);
    // console.log("이거 포스트아이디 나와야대",props.postId);
        const getData = async () => {
        const response = await getNoToken (`/comments/${props.postId}`);
        console.log("여기에 댓글 관련 data",response.data);
        setData(response.data);
        
    }
    useEffect(() => {
        getData();
    }, []);
    return(
        <>
        <table>
            <tbody>
            { datas != null && datas.map( data => (

                <tr key={data["_id"]}>
                    
                    <td>{data.nickname}</td>
                    <td style={{"width":"450px"}}>{data.desc}</td>
                    <td>{data.createdAt}</td>
                    <td>
                        { data.userId ==  props.userId ? 
                            <button type='button'>삭제</button> : ""
                        }
                    </td>
                    </tr>
            ))}
            </tbody>
        </table>
        </>
    );
}

export default CommentTable;