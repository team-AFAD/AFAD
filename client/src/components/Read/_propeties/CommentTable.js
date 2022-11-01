import { useState, useEffect} from 'react';
import axios from 'axios';
import {getNoToken, } from '../../../utils/Axios';


const BACK_SERVER = "http://localhost:8080/api";

function CommentTable (props){
    console.log( "props : ", props );
    const [datas, setData] = useState(null);

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
                    <td>{data.createdAt.slice(0, 10)}</td>
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