import './styles.css'
import  logo  from '../Images/logo.jpg';

export function Headline() {
    return(
        <div>
    
        <img src={logo}  className="logo" alt="logo" ></img>
    <div className="tekst">Masz wiele obaw związanych z nadchodzącym wdrożeniem systemów IT w Twojej firmie?<br/><br/> Z naszym doświadczonym zespołem konsultantów możesz mieć pewność, że Twój projekt będzie realizowany sprawnie i efektywnie!</div>
    </div>)
}