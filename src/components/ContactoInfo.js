import React from 'react';
import { useFetch } from '../hooks/useFetch';

const ContactoInfo = ({account_id}) => {

    const { loading, data } = useFetch( `https://api.opendota.com/api/players/${ account_id }` );    

    return (
        <>
            <h1>Contacto Info</h1>
            {
                !loading &&
                <pre>
                    {
                        JSON.stringify( data )
                    }
                </pre>
            }
        </>
    )
}

export default ContactoInfo;
