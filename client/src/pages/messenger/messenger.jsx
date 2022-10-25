import "./messenger.scss";
import Conversation from "../../components/Conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {io} from "socket.io-client"; 

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [socket, setSocket] = useState(null);
    const {user} = useContext(AuthContext);
    console.log(user);
    
    useEffect(()=> {
        setSocket(io("ws://loacalhost:8080"))
    },[]);

    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get("/conversations/" + "63550840e2e33531df22fc98");
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, ["63550840e2e33531df22fc98"]);

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map((c) => (

                <Conversation conversation={c} currentUser={user} />

            ))}
                    
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="메시지를 쳐주세요..."></textarea>
                        <button className="chatSubmitButton">SEND</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">online
                <ChatOnline />
                </div>
            </div>
        </div>
    )
}