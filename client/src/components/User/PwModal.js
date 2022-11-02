import { useRef, useState, useContext } from "react";
import axios from 'axios';

const BACK_SERVER = process.env.REACT_APP_URL + "/api";


const PwModal = (props) => {
    const [resetText, setResetText] = useState();
    const [resetWarning, setResetWarning ] = useState();
    const resetPW = useRef();
    const resetPWCheck = useRef();

    const ResetOnChange = (e) => {
        const button_click = document.querySelector('.reset_btn');
    
        if (resetPW.current.value !== e.target.value ) {
          setResetWarning('reset_warning');
          setResetText('비밀번호가 다릅니다.');
          button_click.disabled = true;
          button_click.style.cursor = 'not-allowed';
        }else {
          setResetWarning('reset_checking');
          setResetText('비밀번호가 같습니다.');
          button_click.disabled = false;
          button_click.style.cursor = 'pointer';
        }
    }

    const changePW = async () => {
        const result = await axios.post(BACK_SERVER + "/users/resetPW", {id: props.id, password: resetPW.current.value});
        console.log(result.data);
        setResetText("비밀번호 변경 완료!");
    }

    return(
       <>
            <form>
                <input type='password' placeholder='비밀번호' name="password" ref={resetPW} required></input><br />
                <input type='password' placeholder='비밀번호 확인' name="password" onChange={ResetOnChange} ref={resetPWCheck} required></input><br />
                <button type='button' className='reset_btn' onClick={changePW}>비밀번호 변경</button>     
                <p className={resetWarning}>{resetText}</p>
            </form>  
       </>

    );
}

export default PwModal;