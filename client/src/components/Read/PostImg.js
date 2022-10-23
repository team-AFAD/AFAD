import './postImg.scss';
//연습이미지
import postImg from '../../images/heart_red.png';

function PostImg(){
    return(
        <div className="PostImg">
            <div className='postImgWrap'>
                <img src={postImg}/>
            </div>
        </div>
    )
}

export default PostImg;