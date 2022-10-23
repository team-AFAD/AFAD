import "./chatOnline.scss"

export default function ChatOnline() {
    return(
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src="" alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">우리팀</span>
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src="" alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">우리팀</span>
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src="" alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">우리팀</span>
            </div>
            
        </div>
    )
}