import '../components/Read/postList.scss';
import Card from '../components/Read/Card';
import Dummy from '../data/post.json';

const PostList = ({})=> {
    return (
        <div className="PostList">
            <div className='CompoWrap_flex'>
                {Dummy.Post.map( post =>{
                    // console.log(post.id);
                    return (
                    <Card key={post.id} test={post}/>)
                    })}
                {/* <게시글작성버튼> */}
            </div>
        </div>
    )
}

export default PostList;
