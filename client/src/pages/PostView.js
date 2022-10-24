import PostImg from '../components/Read/PostImg';
import MainInfo from '../components/Read/MainInfo';
import Description from '../components/Read/Description';
import Comment from '../components/Read/Comment';
import '../components/Read/postView.scss'
// import '../postView.scss';

function PostView (){
    return(
        <div className='PostView'>
            <div className='CompoWrap_flex'>
                <PostImg />
                <MainInfo />
            </div>
            
            <div className='postViewWrap'>
                <Description />
                <Comment />
            </div>
        </div>
    )
}

export default PostView;
