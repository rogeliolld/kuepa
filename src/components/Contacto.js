import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import ContactoInfo from './ContactoInfo';

const Contacto = ({ account_id, name }) => {    

    const [showContact, setShowContact] = useState(false);

    const handleContacClick = () => {
        console.log("click a " + account_id, name);
        setShowContact(true);                       
    }

    return (
        <>
            {/* <span>Contacto : { name }</span>
            {
                showContact &&
                <ContactoInfo 
                    account_id={ account_id }
                />
            } */}
            <tr onClick={ handleContacClick }>
                <td>{ name }</td>
                <td>
                    Llamar <br />
                    Descuento temporada
                </td>
                <td>
                    <a className="opciones-agenda-table primary-color" href="/#"><i
                            className="fas fa-circle"></i></a>
                    <a className="opciones-agenda-table" href="/#"><i className="fas fa-phone-alt"></i></a>
                    <a className="opciones-agenda-table" href="/#"><i
                            className="far fa-comment-alt"></i></a>
                </td>
            </tr>            
        </>
    )
}

export default Contacto;
