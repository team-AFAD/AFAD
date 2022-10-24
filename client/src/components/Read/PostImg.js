import './postImg.scss';


function PostImg( props ){
    // console.log (props.userfile);
    return(
        <div className="PostImg">
            <div className='postImgWrap'>
                <img src={props.userfile}/>
            </div>
        </div>
    )
}

export default PostImg;