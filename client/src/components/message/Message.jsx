import "./message.scss"

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="" alt="" />
                <p className="messageText">메시지입니다. 한번더 길게 쳐보겠습니다. 지금 더 길게길게 쓰는중입니다. 아무것도 안하는데 다 되길 기원중</p>
            </div>
            <div className="messageBottom">1시간 전</div>

        </div>
    )
}
