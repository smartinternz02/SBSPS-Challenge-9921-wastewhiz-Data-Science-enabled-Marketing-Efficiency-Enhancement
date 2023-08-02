import '../pages/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const HomeButton = (props) => {
    return (
        <div className="home-button">
            {props.type === "analytics" ?
                <FontAwesomeIcon className='home-btn-img' icon={faChartLine} beatFade size="2xl" style={{color: "#49f033",}} />:
                <FontAwesomeIcon className='home-btn-img' icon={faPeopleGroup} beatFade size="xl" style={{color: "#77e94e",}} />
            }
            <h2 className="home-btn-text">{props.text}</h2>
        </div>
    );
}

export default HomeButton;
