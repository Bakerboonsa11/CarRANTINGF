import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faCalendarAlt, faClock,faGear, faChair, faGasPump, faBolt, faCar } from "@fortawesome/free-solid-svg-icons";
import './styles/whyus.css'


const WhyUs=()=>{
    return(
     
        
        <div className="d-flex flex-column mb-3 why-us-container container-fluid" >
            <h6 className="p-2 why-us-head">Unmatched Excellence and customer satisfication</h6>
            <p className="p-2 why-us-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, <br/>
                facere aliquam? Laboriosam dolores perspiciatis nisi harum sed! Nisi,<br/> odio incidunt. Placeat, impedit 
                adipisci veritatis perferendis natus deleniti fugit nostrum eum.</p>

            <img src="/images/beuty.png" alt="" className="why-img" />

            <div className="d-flex flex-row justify-content-around flex-md-nowrap flex-wrap">
            {/* Block 1 */}
            <div className="d-flex flex-column align-items-center mb-3">
                <div className="p-2">
                <div className="why-icon-conti">
                    <FontAwesomeIcon icon={faGear} className="why-icon" />
                </div>
                <h4 className="why-icon-conti-h">Welcome to the dom title</h4>
                <p className="why-icon-conti-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate quae,<br />
                    culpa cumque esse dolores ullam magnam laboriosam.
                </p>
                </div>
            </div>

            {/* Block 2 */}
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="p-2">
                <div className="why-icon-conti">
                    <FontAwesomeIcon icon={faGear} className="why-icon" />
                </div>
                <h4 className="why-icon-conti-h">Welcome to the dom title</h4>
                <p className="why-icon-conti-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate quae,<br />
                    culpa cumque esse dolores ullam magnam laboriosam.
                </p>
                </div>
            </div>

            {/* Block 3 */}
              <div className="d-flex flex-column align-items-center mb-3 each-why-cont">
                <div className="p-2">
                <div className="why-icon-conti">
                    <FontAwesomeIcon icon={faGear} className="why-icon" />
                </div>
                <h4 className="why-icon-conti-h">Welcome to the dom title</h4>
                <p className="why-icon-conti-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate quae,<br />
                    culpa cumque esse dolores ullam magnam laboriosam.
                </p>
                </div>
            </div>
            </div>



          
        </div>



        
      
    )
}

export default WhyUs