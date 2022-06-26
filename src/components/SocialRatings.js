import "../styles/SocialRatings.css";
import SocialRating from "./SocialRating";

import { socialReviews } from "../assets/data.js";

const SocialRatings = () => {

    
    return (
        <section className="social-ratings">
            {
                socialReviews.map((rating, id) => {
                    return (
                        <SocialRating social={rating} key={id}/>
                    )
                })
            }
            
        </section>
    );
}

export default SocialRatings;