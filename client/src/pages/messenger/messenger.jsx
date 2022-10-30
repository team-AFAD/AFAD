import "./messenger.scss";
import Conversation from "../../components/Conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
// import {io} from "socket.io-client"; 
import io from 'socket.io-client';

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const {user} = useContext(AuthContext);
    const scrollRef = useRef();
    const box = useRef();
    // console.log(user);
    
    // let socket = io("http://localhost:8000", {transports: ["websocket"]});
    let socket = io("http://localhost:8000");

    useEffect(()=> {
        // socket.connect();
    },[]);

    useEffect(() => {
        const getConversations = async () => {
            // console.log("id : ",user._id);
            console.log("현재 로그인 id : " ,user._id);
            try {
                const res = await axios.get("http://localhost:8080/api/conversations/" + user._id, {   
                    headers: {
                    'Authorization': localStorage.getItem('access_token'),
                }
            });
                setConversations(res.data)
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);


    // console.log("채팅확인currentChat : ", currentChat);
    useEffect(() => {
        const getMessages = async () => {
            try {
              const res = await axios.get("http://localhost:8080/api/messages/" + currentChat?._id , {   
                headers: {
                'Authorization': localStorage.getItem('access_token'),
            }
        });
              setMessages(res.data);
            } catch (err) {
              console.log(err);
            }
          };
          getMessages();
        }, [currentChat]);

        // console.log("내 메시지 목록 : ", messages);

        //보낸메시지 db저장
        const handleSubmit = async (e) => {
            e.preventDefault();
            const message = {
                sender: user._id,
                text: newMessage,
                conversationId : currentChat._id
            };
            try{
                const res = await axios.post("http://localhost:8080/api/messages", message);
                setMessages([...messages, res.data])
                setNewMessage("");
            }catch(err){
                console.log(err)
            }
        };

        //스크롤다운useEffect
        useEffect(()=>{
            scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }, [messages])
       

    // console.log(socket);
    socket.on("notice", (data) => {
        // console.log("work");
        // console.log("id", data);
        socket.emit("msg", data);
    })

    socket.on("print", (id) => {
        // console.log(box.current);
        // let p = document.createElement("p");
        // p.innerText = id + "님 환영합니다.";
        // box.append(p);
    })

    // console.log("채팅확인currentChat : " , currentChat);
 

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation key={c} conversation={c} currentUser={user} />
                        </div>
            ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ? (
                    <>  
                        <div className="chatBoxTop" ref={box}>
                            {messages.map(m=>(
                                <div ref={scrollRef}>
                                    <Message message={m} own={m.sender === user._id} />
                                </div>
                            ))}
                            
                        </div>
                        <div className="chatBoxBottom">
                            <textarea 
                            className="chatMessageInput" 
                            placeholder="메시지를 쳐주세요..." 
                            onChange={(e)=>setNewMessage(e.target.value)}
                            value={newMessage}
                            ></textarea>
                            <button className="chatSubmitButton" onClick={handleSubmit}>SEND</button>
                        </div>
                    </>
                    ) : (
                    <span className="noConversationText"> Open a conversation to start a chat.텅...</span>
                )} 
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