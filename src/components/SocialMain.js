import SocialIntro from "./SocialIntro";
import SocialRatings from "./SocialRatings";
import SocialUserCards from "./SocialUserCards";
import "../styles/SocialMain.css";

const SocialMain = () => {
    return (
        <section className="social-main">
            <div className="social-main-top">
                <SocialIntro />
                <SocialRatings />
            </div>
            <SocialUserCards />
        </section>
    );
}

export default SocialMain;