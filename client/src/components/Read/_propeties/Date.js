const Date = ({title, createdAt}) => {
    const start_date = createdAt.slice(0, 10)
    // console.log(createdAt.slice(0, 10));
    return (
        <div className='Date'>
            <p>{title} {start_date} ~마감일  {}</p>
        </div>
    );
}

export default Date;
