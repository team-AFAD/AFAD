const Date = ({title, createdAt, end_date}) => {
    const start_date = createdAt.slice(0, 10)
    
    return (
        <div className='Date'>
            <p>{title} {start_date} ~ {end_date}</p>
        </div>
    );
}

export default Date;
