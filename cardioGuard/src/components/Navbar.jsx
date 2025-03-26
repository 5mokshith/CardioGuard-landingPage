import heartIcon from '../assets/icons/heartIcon.svg';
import Button from './utils/Button';
function NavBar() {
    return (
        <nav>
            <div className="logo">
                <img src={heartIcon} alt="logo not found" aria-label='CardioGuard logo' />
                <h2>CardioGuard</h2>
            </div>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#FAQ">FAQ</a></li>
                <li><a href="http://localhost:5173/index.html">{<Button label="Get started"></Button>}</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;