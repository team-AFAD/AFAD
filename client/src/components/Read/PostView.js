import PostImg from './PostImg';
import MainInfo from './MainInfo';
import Description from './Description';
import Comment from './Comment';
import './postView.scss';

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
