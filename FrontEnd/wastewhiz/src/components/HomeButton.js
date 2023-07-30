import '../pages/Home.css'
const HomeButton = (props) => {
    return (
        <div className="home-button">
                <img className="home-btn-img" src={props.url} />
                <h2 className="home-btn-text">{props.text}</h2>
        </div>
    );
}

export default HomeButton;
