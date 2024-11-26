import React from 'react';

const HeroSection = () => {
    return (
        <section style={{ textAlign: 'center', padding: '50px 20px', background: '#f5f5f5', height:'500px', marginTop:'30px'}}>
            <h1>Bienvenido a WikiVal</h1>
            <p>Tu Wiki de Valorant + Minijuegos en una app Para el celular</p>
            <button className="bg-red-500 px-4 py-2 rounded" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop:'50px', color:'white' }}>
                Descargar App
            </button>
        </section>
    );
};

export default HeroSection;

