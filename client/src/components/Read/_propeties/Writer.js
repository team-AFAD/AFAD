import { useEffect, useRef, useContext, useState } from 'react';
// import User from '../../../../../api/models/User';
import './writer.scss';
import { AuthContext } from "../../../context/AuthContext";
import { deleteData, post, get, getNoToken, put } from '../../../utils/Axios';

function Writer( props ){
    const { user } = useContext(AuthContext);

    const div = useRef();
    const [followStatus, setFollowStatus] = useState(false);
    

    // const onClick = () => {
    //     const icon = div.current.querySelector("i");
    //     if (icon.classList.contains("bi-person-plus")) {
    //         icon.classList.remove("bi-person-plus");
    //         icon.classList.add("bi-person-check");
    //     } else {
    //         icon.classList.add("bi-person-plus");
    //         icon.classList.remove("bi-person-check");
    //     }
    // }

    // 현재 팔로우 상태 가져오기
    const getfollowStatus = async () => {
        const icon = div.current.querySelector("i");
        console.log("followStatus");
        const result = await getNoToken("/users/isfollow", {followerId : props.writer, userId : user._id});
        console.log("follow", result.data);
        if (result.data == null) {
            setFollowStatus(false);
        } else {
            setFollowStatus(true);
            icon.classList.remove("bi-person-plus");
            icon.classList.add("bi-person-check");
        }
    }

    //팔로우
    const onClick = async () => {
        const icon = div.current.querySelector("i");
        if (followStatus) {
            // 팔로우 취소
            console.log("팔로우취소");
            console.log(user._id);
            const result = await put("/users/unfollow", { followerId : props.writer, userId : user._id });
            icon.classList.add("bi-person-plus");
            icon.classList.remove("bi-person-check");
            setFollowStatus(false);
        } else {
            // 팔로우
            console.log("팔로우");
            const result = await put("/users/follow", {followerId : props.writer, userId : user._id});
            icon.classList.remove("bi-person-plus");
            icon.classList.add("bi-person-check");
            setFollowStatus(true);
        }
    }

    useEffect(() => {
        getfollowStatus();
    }, [])

    const style={
        cursor: "pointer",
        fontSize: "20px"
    }
    return(
        <>
        <div className='Writer'>
            공동구매 주최자 : {props.writer}
                {user.nickname !== props.writer && ( 
                    <div style={{display : "inline-block"}} onClick={onClick} ref={div}>
                        <i style={style} className="bi bi-person-plus"></i>
                    </div>
                )}
            </div>
        </>
    );
};

export default Writer;