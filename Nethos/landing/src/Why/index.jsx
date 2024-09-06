import '../Why/styles.css'
import { useState } from 'react';


export function Why() {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(!isFormVisible); // Zmienia widoczność formularza
    };

    return(
        
        <div>
        <div className="why">
            Dlaczego wybrać Nethos?
        </div>
        <div className="lista-container">
            <ul className='lista'>

        <li>Doświadczony zespół specjalistów </li>
        <li>Indywidualne podejście</li>    
        <li>Nowoczesne technologie</li>
        <li>Bezpieczeństwo danych</li> </ul>
        
        </div>

       <div className='button-container'> 
        <button className="button" onClick={handleButtonClick}>NAPISZ DO NAS!</button>
       </div>
       <div>
       {isFormVisible && (
                <form className="contact-form">
                    <div>
                        <label htmlFor="name">Imię:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Wiadomość:</label>
                        <textarea id="message" name="message" />
                    </div>
                    <button type="submit">Wyślij</button>
                </form>
            )}
        </div>
       </div>
    )
}