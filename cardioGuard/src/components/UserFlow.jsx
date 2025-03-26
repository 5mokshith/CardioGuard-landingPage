<<<<<<< HEAD
import "../css/userFlow.css";
import dangerIcon from "../assets/icons/dangerIcon.svg";
import userIcon from "../assets/icons/userIcon.svg";
import shareIcon from "../assets/icons/shareIcon.svg";
import waveIcon from "../assets/icons/waveIcon.svg";

function CardUserFlow(props) {
    return (
        <div className="card-userflow">
            <h2>
                <span>{props.id}</span>
                {props.title}
            </h2>
            <p>{props.description}</p>
        </div>
    );
}

const data = [
    {
        id: "01",
        icon: userIcon,
        title: "Sign Up",
        description: "Create your account and enter health details and lifestyle information.",
    },
    {
        id: "02",
        icon: shareIcon,
        title: "Connect Sensors",
        description: "Connect your ECG & SpO2 sensors to begin continuous health monitoring.",
    },
    {
        id: "03",
        icon: waveIcon,
        title: "AI Analysis",
        description: "Our AI models are trained to determine and identify Cardiac arrest symptoms and cases before occurring.",
    },
    {
        id: "04",
        icon: dangerIcon,
        title: "Emergency Alerts",
        description: "In case of high risk, emergency contacts & medical professionals receive instant alerts.",
    },
];

export default function UserFlow() {
    const props =
        {upperTagLine: "Simple process", title: "How cardioGuard works", tagline: "Our streamlined process ensures you're protected around the clock with minimal setup."};
    return (
        <div className="container">
           <div className="text">
            <h2>{props.upperTagLine}</h2>
            <h1>{props.title}</h1>
            <p>{props.tagline}</p>
           </div>
            {data.map((item, index) => (
                <div
                    className="wrapper"
                    key={index}
                    style={{ marginLeft: index % 2 === 0 ? "48rem" : "10rem " }}
                >
                    <CardUserFlow
                        id={item.id}
                        title={item.title}
                        description={item.description}
                    />
                    <div className="icon">
                        <img src={item.icon} alt={`${item.title} icon`} />
                    </div>
                </div>
            ))}
            <div className="line"></div>
        </div>
    );
}
=======
function UserFlow() {
  return <div className="">hello!</div>;
}
export default UserFlow;
>>>>>>> 7f28c99371749f87634af1c0ada01d47548030c9
