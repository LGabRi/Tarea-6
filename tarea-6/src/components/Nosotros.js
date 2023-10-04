import React from 'react';

function Nosotros(){
    return(
        
        <div className="cards">
            <section className="card" style={{ width: '18rem' }}>
                <img src="./images/gabriel.jpg" className="card-img-top" alt="gabriel"/>
                <div className="card-body">
                <h5 className="card-title">Sobre Gabriel</h5>
                <p className="card-text">Conoce un poco mas sobre Gabriel, uno de los integrantes del Dream Team</p>
                <a href="#pasatiempos" className="btn btn-primary">Conócelo!</a>
                </div>
            </section>
            
            <section className="card" style={{ width: '18rem' }}>
                <img src="./images/nosotros2.jpg" className="card-img-top" alt="nosotros"/>
                <div className="card-body">
                <h5 className="card-title">Sobre Nosotros</h5>
                <p className="card-text">Somos 2 estudiantes de Ingeniería Civil Informática, jugadores profesionales de League of Legends y accionistas del equipo profesional de balompié CSD Ruta 5</p>
                </div>
            </section>

            <section className="card" style={{ width: '18rem' }}>
                <img src="./images/benjaja.jpg" className="card-img-top" alt="benjaja"/>
                <div className="card-body">
                <h5 className="card-title">Sobre Benjamín</h5>
                <p className="card-text">Conoce un poco mas sobre Benjamín, uno de los integrantes del Dream Team</p>
                <a href="#contacto" className="btn btn-primary">Conócelo!</a>
                </div>
            </section>
        </div>
    );
}

export default Nosotros;