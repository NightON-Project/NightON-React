import React, { useState } from 'react';

const EmailForm = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to, subject, text }),
            });

            if (response.ok) {
                setMessage('E-mail envoyé avec succès');
            } else {
                setMessage('Erreur lors de l\'envoi de l\'e-mail'+await response.json());
            }
        } catch (error) {
            console.error('Erreur réseau', error);
            setMessage('Erreur réseau lors de l\'envoi de l\'e-mail');
        }
    };

    return (
        <div>
            <h2>Formulaire d'envoi d'e-mail</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Destinataire:
                    <input
                        type="email"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Sujet:
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Texte:
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Envoyer</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default EmailForm;
