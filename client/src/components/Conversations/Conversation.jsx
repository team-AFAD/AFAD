import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.scss"

export default function Conversation({conversation, currentUser}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        //친구정보 가져오기
        const getUser = async() => {
            try{
                const res = await axios(process.env.REACT_APP_URL + "/api/users?userId=" + friendId, {
                   
            headers: {
                'Authorization': localStorage.getItem('access_token'),
            }
                });
                setUser(res.data);
                // console.log(res);
            }catch(err){
                console.log(err);
            }            
        };
        getUser()
    }, [currentUser, conversation]);

    return (
        <div className="conversation">
            {/* <img className="conversationImg" src="" alt="" /> */}
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}