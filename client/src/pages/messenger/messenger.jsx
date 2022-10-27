import "./messenger.scss";
import Conversation from "../../components/Conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
// import {io} from "socket.io-client"; 
import io from 'socket.io-client';

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setcurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const {user} = useContext(AuthContext);
    console.log(user);
    
    // let socket = io("http://localhost:8000", {transports: ["websocket"]});
    let socket = io("http://localhost:8000");

    useEffect(()=> {
        // socket.connect();
    },[]);

    // useEffect(() => {
    //     const getConversations = async () => {
    //         try {
    //             const res = await axios.get("/conversations/" + user._id);
    //             setConversations(res.data)
    //             console.log(res);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     getConversations();
    // }, [user._id]);
    console.log(socket);
    socket.on("notice", (data) => {
        console.log("work");
        console.log("id", data);
        socket.emit("msg", data);
    })

    socket.on("print", (id) => {
        let box = document.querySelector(".chatBoxTop");
        box.append(id + "님 환영합니다.");
    })

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {/* {conversations.map((c) => (

                <Conversation conversation={c} currentUser={user} />

            ))} */}
                    
                    {/* <Conversation /> */}
                    {/* <Conversation /> */}
                    {/* <Conversation /> */}
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