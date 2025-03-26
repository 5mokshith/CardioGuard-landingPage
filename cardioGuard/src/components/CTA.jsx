import heartIcon from './../assets/icons/heartIcon.svg'
import brainIcon from './../assets/icons/brainIcon.svg'
import dangerIcon from './../assets/icons/dangerIcon.svg'
import doctorIcon from './../assets/icons/doctorIcon.svg'
import databaseIcon1 from './../assets/icons/databaseIcon.svg'
import userIcon from './../assets/icons/userIcon.svg'

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
    {icon: databaseIcon1, title: "Secure User Data Storage", description: "Uses Supabase for secure medical data management with end-to-end encryption."},
    {icon: userIcon, title: "Seamless Onboarding", description: "Smooth transitions during sign-up for collecting personal and emergency info."},
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
        
        </div>
    );
}
export default CTA;