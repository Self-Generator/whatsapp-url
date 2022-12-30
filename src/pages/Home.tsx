import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    useEffect(() => {
        document.title = "whatsapp-url"
    })

    return (
        <div className="Reader pushDown100 text-center">
            <div className="skew-down">
                <div className="inskew-down ">
                    <h1>Generate <b>whatsapp-url</b> in <em>seconds</em></h1>
                </div>
            </div>
            <Link className="btn-accent skyBackground btnnn" to="/whatsapp-url/Form">Get Started <i className="fa-solid fa-arrow-right-long"></i></Link>
        </div>
    );
}
