import './writer.scss';

function Writer( props ){
    return(
        <div className='Writer'>
            공동구매 주최자 : {props.writer}
        </div>
    )
}

export default Writer;