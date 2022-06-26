import SocialUserCard from "./SocialUserCard";
import { socialData } from "../assets/data";

import "../styles/SocialUserCards.css";

const SocialUserCards = () => {

    return (
        <section className="social-user-cards">
            {
                socialData.map((user, key) => {
                    return (
                        <SocialUserCard 
                            key={key}
                            name={user.name}
                            image={user.image}
                            message={user.message}
                        />
                    )
                })
            }
        </section>
    );
}

export default SocialUserCards;