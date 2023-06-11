const Card = ({ title, id, desc }) => {
    return (
        <div className="card">
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default Card;
