import SocialIntro from "./SocialIntro";
import SocialRatings from "./SocialRatings";
import SocialUserCards from "./SocialUserCards";
import "../styles/SocialMain.css";

const SocialMain = () => {
    return (
        <section className="social-main">
            <SocialIntro />
            <SocialRatings />
            <SocialUserCards />
        </section>
    );
}

export default SocialMain;