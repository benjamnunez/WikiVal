import React from 'react';
import Header from '../components/Header';

const ContactPage = () => {
    return (
        <>
            <Header/>
        
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                padding: '20px',
            }}>
                <h1>Contacto</h1>
                <img 
                    style={{ 
                        width: '200px', 
                        height: '200px' 
                    }} 
                    className="avatar" 
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                    alt="Avatar"
                />
            </div>
        </>
    );
};
export default ContactPage