import './mainInfo.scss';
import Title from "./Title";
import RecruitingBtn from './RecruitingBtn';
import Amount from './Amount';
import NumPeople from './NumPeople';
import PerPayment from './PerPayment';
import AreaDate from './AreaDate';

function MainInfo () {
    return (
        <div className="MainInfo">
            <Title /> <br />
            <div className='CompoWrap_flex'>
                <RecruitingBtn />
                <Amount />
            </div>
            <div className='CompoWrap_flex'>
                <NumPeople />
                <PerPayment />
            </div>
            <AreaDate />
        </div>
    )
}

export default MainInfo;