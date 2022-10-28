import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.scss"

export default function Conversation({conversation, currentUser}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async() => {
            try{
                const res = await axios("http://localhost:8080/api/users?userId=" + friendId, {
                    
            headers: {
                'Authorization': localStorage.getItem('access_token'),
            }
                });
                
                console.log(res);
            }catch(err){
                console.log(err);
            }            
        };
        getUser()
    }, [currentUser, conversation]);

    return (
        <div className="conversation">
            <img className="conversationImg" src="" alt="" />
            <p className="conversationName">나라고오오옹</p>
        </div>
    )
}