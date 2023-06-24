import React, { useState } from 'react';
import './SubscriptionForm.css';
import { MdMailOutline } from 'react-icons/md';

function SubscriptionForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí se enviaría el correo electrónico al servidor para su procesamiento
        console.log(`Email enviado: ${email}`);
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="h1">¡Subscríbete para recibir nuestras noticias, novedades y acceder a nuestros beneficios!</h1>
            <label className="input-container">
                <MdMailOutline className="input-icon" />
                <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Ingresa tu correo electrónico"
                />
            </label>
            <button className="button" type="submit">Suscribirse</button>
        </form>
    );
}

export default SubscriptionForm;