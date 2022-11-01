import { useState, useEffect} from 'react';
import {getNoToken, deleteData} from '../../../utils/Axios';
import axios from 'axios';


const BACK_SERVER = "http://localhost:8080/api";

function CommentTable (props){
    console.log( "props : ", props );
    const [datas, setData] = useState(null);

    const getData = async () => {
        const response = await getNoToken (`/comments/${props.postId}`);
        // console.log("여기에 댓글 관련 data",response.data);
        setData(response.data);
    }
    console.log("확인할거",datas);
    // 댓글 삭제
    const deleteData1 = async(id) => {
        console.log(id);
        console.log( "댓글 삭제버튼 눌렸다");
        const result = await deleteData(`/comments/${id}`);
        // console.log(props.data);
        setData(result.data);
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