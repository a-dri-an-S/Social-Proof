import "../styles/SocialRatings.css";
import SocialRating from "./SocialRating";
import { socialReviews } from "../assets/data.js";

import "../styles/SocialRatings.css"

const SocialRatings = () => {

    
    return (
        <section className="social-ratings">
            {
                socialReviews.map((rating, id) => {
                    return (
                        <div className={`segment-${id}`}>
                            <SocialRating social={rating} key={id} />
                        </div>
                    )
                })
            }
            
        </section>
    );
}

export default SocialRatings;