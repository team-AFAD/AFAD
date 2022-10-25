import { Link, useNavigate } from 'react-router-dom';
import '../components/Read/postList.scss';
import Card from '../components/Read/Card';
import Dummy from '../data/post.json';

const PostList = ({})=> {

    const navigate = useNavigate();
    const link = (id) => {
        navigate("/post/" + id);
    }
    return (
        <div className="PostList">
            <div className='CompoWrap_flex'>
                {Dummy.Post.map( post =>{
                    // console.log(post.id);
                    return (
                            // <Card key={post.id} test={post} component={Link} to={'/post/:id'}/>
                            <div onClick={() => {link(post.id)}}>
                                <Card key={post.id} test={post} />
                            </div>
                        )
                    })}
                {/* <게시글작성버튼> */}
            </div>
        </div>
    )
}

export default PostList;
