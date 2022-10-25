import './postImg.scss';


function PostImg( props ){
    console.log (props.photo);
    return(
        <div className="PostImg">
            <div className='postImgWrap'>
                <img src={props.photo}/>
            </div>
        </div>
    )
}

export default PostImg;