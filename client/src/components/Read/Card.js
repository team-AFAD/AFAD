import './card.scss';
import PostImg from './PostImg';
import LikeBtn from "./_propeties/LikeBtn";
import Title from "./_propeties/Title";
import RecruitingBtn from './_propeties/RecruitingBtn';
import Area from './_propeties/Area';
import NumPeople from './_propeties/NumPeople';
import PerPayment from './_propeties/PerPayment';
import Date from './_propeties/Date';


function Card () {
    return(
        <div className="Card">

            <div>
            <PostImg />
            <LikeBtn />
            </div>

            <div className='CompoWrap_flex topInfo'>
                <RecruitingBtn />
                <Area />
            </div>

            <Title />

            <div className='CompoWrap_flex'>
                <NumPeople />
                <PerPayment />
            </div>

            <Date />
        </div>
        
    )
}

export default Card;