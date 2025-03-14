import SectionTitle from './SectionTitle.jsx'
import Button from './utils/Button.jsx'
import heartIcon from '../assets/icons/pulseHeart.svg';
import '../css/Hero.css'
function Hero() {
    return(
        <div className="hero">
            <div className="left">
                <h3>AI-Powered Health Monitoring</h3>
                <SectionTitle header="AI Powered Cardiac Monitoring & Alert System" isBig={true} description="Continously Moinitor your heart health, predict risks, and get real-time emergency alerts with oour cutting-edge AI technology."/>
                <div className="buttons">
                    <Button label="Get Started"></Button>
                    <Button label="Learn more"></Button>
                </div>
                <div className="wrapper">
                    <div className="box">
                        <SectionTitle header="96%" description="Accuracy Rate"></SectionTitle>
                    </div>
                    <div className="box">
                        <SectionTitle header="24/7" description="Monitoring"></SectionTitle>
                    </div>
                    <div className="box">
                        <SectionTitle header="200ms" description="Anomaly detection"></SectionTitle>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="img">
                    <img src={heartIcon} alt="pulsing animation" />
                </div>
            </div>
        </div>
    );
}

export default Hero;