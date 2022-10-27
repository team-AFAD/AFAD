import './card.scss';
import PostImg from './PostImg';
import LikeBtn from "./_propeties/LikeBtn";
import Title from "./_propeties/Title";
import RecruitingBtn from './_propeties/RecruitingBtn';
import place from './_propeties/Place';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import Date from './_propeties/Date';


function Card (props) {
    console.log(props.data.createdAt);
    return(
        <div className="Card">

            
            <PostImg photo={props.data.photo}/>
            <LikeBtn />
            

            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn />
                <place place={props.data.place}/>
            </div>

            <Title title={props.data.title}/>

            <div className='CompoWrap_flex'>
                <NumPeople num_people={props.data.num_people}/>
                <PerPayment perPayment={props.data.perPayment}/>
            </div>

            <Date createdAt={props.data.createdAt}/>
        </div>
        
    )
}

export default Card;