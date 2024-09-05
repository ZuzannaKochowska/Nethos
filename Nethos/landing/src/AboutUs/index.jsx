import './styles.css'
import marcinkalkus from '../Images/marcinkalkus.jpg';
import piotrkocinski from '../Images/piotrkocinski.jpg';
import bartosz from '../Images/bartosz.jpg';
import obrazek from '../Images/obrazek.jpg';

export function About() {
    return(
        <div>
            <div className="aboutus">
            <img src={obrazek} className="obrazek" alt="obrazek"></img>
            <div className="onas">
            <div className="naglowek">Nasza misja:</div>
            <div className="podnaglowek">Naszą misją jest dostarczanie klientom niezawodnych i innowacyjnych rozwiązań IT, które wspierają ich rozwój oraz umożliwiają skuteczne wdrażanie nowoczesnych technologii. Dążymy do tego, aby poprzez konsulting i doradztwo IT pomagać firmom w optymalizacji procesów biznesowych oraz osiąganiu celów strategicznych.</div>
            <div className="naglowek">Nasza wizja:</div>
            <div className="podnaglowek">
            Nasza wizja to bycie wiodącym partnerem technologicznym dla przedsiębiorstw, które chcą transformować swoje operacje dzięki cyfrowym innowacjom. Chcemy być firmą, która nie tylko rozumie potrzeby klientów, ale też kreuje przyszłość branży IT, oferując kompleksowe wsparcie w zakresie strategii, implementacji i utrzymania systemów IT.
            </div>
            <div className="naglowek">Nasza historia:</div>
            <div className="podnaglowek">Firma została założona w 2007 roku przez grupę doświadczonych specjalistów IT z pasją do technologii. Początkowo skupialiśmy się na lokalnych klientach, pomagając im w optymalizacji infrastruktury IT. Z biegiem lat, dzięki zaangażowaniu i konsekwentnemu rozwojowi, firma zaczęła obsługiwać klientów na rynkach międzynarodowych. Wprowadziliśmy nowoczesne usługi, takie jak cloud computing, big data, oraz cyberbezpieczeństwo, co pozwoliło nam zyskać zaufanie wielu wiodących marek. Dziś jesteśmy cenionym partnerem konsultingowym w zakresie innowacyjnych rozwiązań IT na skalę globalną.</div></div></div>
            
            <div className='why'>Zespół:</div>
            <div className="pracownicy">
                <div className='pracownik'><img src={marcinkalkus} alt='Marcin K.'/>
                <p className='name'>Marcin Kałkus <br/>
                CEO/Architekt Systemów</p>
                </div>

                <div className='pracownik'><img src={piotrkocinski} alt='Piotr K.'/>
                <p className='name'>Piotr Kociński <br/>
                    COO/Architekt Systemów</p></div>
                <div className='pracownik'><img src={bartosz} alt='Bartosz.'/>
                <p className='name'>Bartosz Drzazgowski<br/>
                    CTO/Architekt Systemów</p></div>
                
            </div>

        </div>
    )
}