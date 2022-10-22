import PostImg from './PostImg';
import MainInfo from './MainInfo';

import './postView.scss';

function PostView (){
    return(
        <div className='PostView'>
            <div className='CompoWrap_flex'>
                <PostImg />
                <MainInfo />
                </div>
        </div>
    )
}

export default PostView;
