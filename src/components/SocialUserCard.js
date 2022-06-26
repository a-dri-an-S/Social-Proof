import "../styles/SocialUserCards.css";

const SocialUserCard = ({ name, image, message }) => {
    return (
        <div className="social-user-card">
            <div className="social-user-info">
                <img className="social-user-img" src={image} alt={name}/>
                <div className="social-user-info-block">
                    <h3 className="social-user-name">
                        {name}
                    </h3>
                    <h4 className="social-user-buyer">
                        Verified Buyer
                    </h4>
                </div>
            </div>
            <p className="social-user-message">
                " {message} "
            </p>
        </div>
    );
}

export default SocialUserCard;