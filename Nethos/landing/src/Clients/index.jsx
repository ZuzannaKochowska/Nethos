import './styles.css'
import Asper from '../Images/Asper.jpg';
import Workitout from '../Images/Workitout.jpg';
import techno from '../Images/techno.jpg';

export function Clients() {
    return(
        <div>
            <div className='why'>Poznaj naszych zadowolonych klientów! </div>
            <p className='klienci'>Na przestrzeni 9 lat pracy firma zrealizowała ponad 50 projektów! Posiadamy 100% zadowolonych klientów. Oto kilku z nich:</p>
        <div className='clients'>
            <div className='client'>
                "Wdrożenie każdego systemu ma automatyzować i przyspieszać realizację danego procesu. Zawsze zaczynam poszukiwania współpracy od znanych i "najbliższych" firm ze swojego otoczenia. Za Nethos, poza poleceniem, przemawia duże doświadczenie i rozumienie wielu procesów biznesowych, brak automatyzmu oraz nakierowanie na potrzeby klienta." 
                <img src={techno} className="polecenie" alt='techno service'/>
            </div>
            <div className='client'>
                "Brak dalszego wsparcia technicznego poprzedniego oprogramowania zmusił nas do szukania następcy. Firma Nethos trafiła do nas z polecenia. Współpracę cechuje wygodny system zgłoszeń, szybka reakcja na problemy oraz "szerokie" spojrzenie na zgłaszane problemy. 
                <img src={Asper} className="polecenie" alt="asper"/>
            </div>
        
            <div className='client'>
                "Efektywność procesów, pro aktywna postawa w trakcie rozmów oraz brak lęku przed stosowaniem nieszablonowych rozwiązań, Olbrzymie zaangażowanie, dbałość o szczegóły, biegłość w praktycznej implementacji podejścia procesowego oraz szybkośc i kreatywnosć - to wszystko cechy Nethos."" 
                <img src={Workitout} className="polecenie" alt='WorkItOut'/>
            </div>
        </div>
        <div className='button-container'>
        <button className="button">DOŁĄCZ DO NICH!</button>
        </div>
        </div>
    )
}