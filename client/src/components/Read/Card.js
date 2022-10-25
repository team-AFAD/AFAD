import './card.scss';
import PostImg from './PostImg';
import LikeBtn from "./_propeties/LikeBtn";
import Title from "./_propeties/Title";
import RecruitingBtn from './_propeties/RecruitingBtn';
import Area from './_propeties/Area';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import Date from './_propeties/Date';
// import Dummy from '../../../data/post.json';


function Card (props) {
    // console.log(props);
    // console.log(props.test);
    // console.log(props.test.title);
    return(
        <div className="Card">

            <div>
            <PostImg photo={props.test.photo}/>
            <LikeBtn />
            </div>

            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn />
                <Area area={props.test.area}/>
            </div>

            <Title title={props.test.title}/>

            <div className='CompoWrap_flex'>
                <NumPeople num_people={props.test.num_people}/>
                <PerPayment perPayment={props.test.perPayment}/>
            </div>

            <Date />
        </div>
        
    )
}

export default Card;