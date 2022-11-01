import { useState, useEffect} from 'react';
import {getNoToken, deleteData, deleteNoToken } from '../../../utils/Axios';
import axios from 'axios';


const BACK_SERVER = "http://localhost:8080/api";

function CommentTable (props){
    console.log( "props : ", props );
    const [datas, setData] = useState(null);
    const [comments, setComment] = useState(null);

    const getData = async () => {
        const response = await getNoToken (`/comments/${props.postId}`);
        // console.log("여기에 댓글 관련 data",response.data);
        setData(response.data);
    }
    console.log("확인할거",datas);
    // 댓글 삭제
    const deleteData1 = async(id) => {

        console.log("deleteDate1 함수 시작") // 버튼 잘 눌림.
        console.log("댓글 : ",id); // 해당 삭제 버튼에 대한 댓글 _id 잘 들어옴.
        console.log( "댓글 삭제버튼 눌렸다");
        let result = await deleteNoToken(`/comments/${id}`);
        // let result = await deleteNoToken(`/comments/${id}`); 상단 코드에서 getNoToken을 해줘서 deleteNoToken 처리 해줌 / 근데 이 코드 처리가 아예 안됨.
        // 이젠 깃도 안되네 ^^
        
        setComment(result);
        // console.log(props.data);
        console.log(result);
        getData();
        alert("삭제 완료");
    }

    console.log();
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
                    <td>{data.createdAt.slice(0, 10)}</td>
                    <td>
                        { data.userId ==  props.userId ? 
                            <button type='button' onClick={() => {deleteData1(data._id)}}>삭제</button> : ""
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