import Star from '../assets/images/star.svg'
import "../styles/SocialRatings.css";

const SocialRating = ({ social }) => {
    
    const fiveStar = new Array(5).fill(Star);

    return (
        <div className="social-rating">
            <div className="star-rating">
                {
                    fiveStar.map((img, id) => {
                        return (
                            <img key={id} className="star-rating-img" src={img} alt="star"/>
                        )
                    })
                }
            </div>
            <h2 className="star-rating-social">
                {social}
            </h2>
        </div>
    );
}

export default SocialRating;