import image from '../assets/images/cooking-book.png';

const CardWithPhoto = ({ id, imageUrl, title, text }) => {
    return (
        <div className="card text-center mb-3" style={{width: "18rem"}}>
            <img src={imageUrl || image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={`/recipe/card/${id}`} className="btn btn-primary">See recipe</a>
            </div>
        </div>
    );
};

export default CardWithPhoto;