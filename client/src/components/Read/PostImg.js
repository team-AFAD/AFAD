import './postImg.scss';


function PostImg( props ){
    console.log ("사진이름이야?"+props.photo);
    let src = "/images/" + decodeURI(props.photo)
    console.log( "src : ", src );
    return(
        <div className="PostImg">
            <div className='postImgWrap'>
                {(props.photo == "defaultImage.jpg") ? <img src={'/images/defaultImage.jpg'}/> : <img src={src}/>}
                
            </div>
        </div>
    )
}

export default PostImg;