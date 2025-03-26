import '../css/Card.css'

const Card = () => {
  return (
    <div className="card-container">
      <div className="content">
       <div className="one">
       <h2>Ready to Take Control?</h2>
        <h1>Start Monitorning your Heart Health Today</h1>
        <p>
          join thousands of users who trust cardioguard for their cardiac health
          monitoring.Sign up now and experience peace of mind in future.
        </p>
       </div>
       <div className="two">
        <button className='btn'>start monitoring now </button>
        <p>no payments required</p>
       </div>
      </div>
    </div>
  );
};

export default Card;
