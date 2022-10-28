import './card.scss';
import PostImg from './PostImg';
import Title from "./_propeties/Title";
import RecruitingBtn from './_propeties/RecruitingBtn';
import Place from './_propeties/Place';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import Date from './_propeties/Date';


function Card (props) {
    console.log(props.data.createdAt);
    console.log(props.data.photo);
    return(
        <div className="Card">
            
            <PostImg photo={props.data.photo}/>
            
            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn />
                <Place place={props.data.place}/>
            </div>

            <Title title={props.data.title}/>

            <div className='CompoWrap_flex bottomInfo'>
                <NumPeople num_people={props.data.num_people}/>
                <PerPayment perPayment={props.data.perPayment}/>
            </div>

            <Date createdAt={props.data.createdAt} end_date={props.data.end_date}/>
        </div>
        
    )
}

export default Card;