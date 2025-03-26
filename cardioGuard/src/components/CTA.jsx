import PropTypes, { element } from 'prop-types'
import heartIcon from '../assets/icons/heartIcon.svg'
import brainIcon from '../assets/icons/brainIcon.svg'
import dangerIcon from '../assets/icons/dangerIcon.svg'
import doctorIcon from '../assets/icons/doctorIcon.svg'
import databaseIcon from '../assets/icons/databaseIcon.svg'
import userIcon from '../assets/icons/userIcon.svg'
import shareIcon from "../assets/icons/shareIcon.svg"
import waveIcon from "../assets/icons/waveIcon.svg"
import '../css/CTA.css'
const Card = (props) => {
    return (
        <div className="card">
            <div className="icon">
                {props.icon?<img src={props.icon} alt="icon" />:<div></div>}
                </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

const CTAData = [
    {icon: heartIcon, title: "Real-Time Health Monitoring", description: "Tracks ECG, SpO2, and glucose levels continuously with medical-grade accuracy and minimal latency."},
    {icon: brainIcon, title: "AI-Based Cardiac Arrest Prediction", description: "Machine learning detects risks based on medical data and personal health patterns."},
    {icon: dangerIcon, title: "Emergency Alert System", description: "Instantly notifies doctors and emergency contacts in case of detected emergencies."},
    {icon: doctorIcon, title: "Personalized Medicine Recommendations", description: "AI suggests first-aid medication based on symptoms and medical history."},
    {icon: databaseIcon, title: "Secure User Data Storage", description: "Uses Supabase for secure medical data management with end-to-end encryption."},
    {icon: userIcon, title: "Seamless Onboarding", description: "Smooth transitions during sign-up for collecting personal and emergency info."},
];

const userFlowData = [
    {icon: userIcon, title: "Sign Up", description: "Create your account and enter health details and lifestyle information."},
    {icon: shareIcon, title: "Connect Sensors", description: "Connect your ECG & SpO2 sensors to begin continuous health monitoring."},
    {icon: waveIcon, title: "AI Analysis", description: "Our AI models are trained to determine and identify Cardiac arrest symtoms and cases before occurring."},
    {title: dangerIcon, title: "Emergency Alerts", description: "In case of hight risk, emergency contacts & medical professionals receive instant alerts."}
];

function CTA(props) {
    return (
        <div className="CTA-section">
            <div className="text">
                <h4>{props.upperTagLine}</h4>
                <h1>{props.title}</h1>
                <p>{props.tagline}</p>
            </div>
            <div className="wrapper">
                {CTAData.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
            <div className="wrapper-userFlow">
                {userFlowData.map((data, index) => {
                    return (
                        <div className='card-group' key={index}>
                            <Card {...data} icon = {data.icon || ''}></Card>
                        </div>
                    )
                })}
                <div className="line"></div>
            </div>
        </div>
    );
}
export default CTA;