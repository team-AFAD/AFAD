import './card.scss';
import PostImg from './PostImg';
import LikeBtn from "./_propeties/LikeBtn";
import Title from "./_propeties/Title";
import RecruitingBtn from './_propeties/RecruitingBtn';
import Area from './_propeties/Area';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import Date from './_propeties/Date';


function Card (props) {
    
    return(
        <div className="Card">

            
            <PostImg photo={props.data.photo}/>
            <LikeBtn />
            

            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn />
                <Area area={props.data.area}/>
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