import React from 'react';

function Gabriel(){
    return(
        <section>
            <h2 id="gabriel" class="title">Sobre Gabriel</h2>
            <div class="pasatiempos">
                <section class="pasatiempo">
                    <h3>¿Quién soy?</h3>
                    <h4>Me llamo Gabriel Caviedes, tengo 20 años y estoy estudiando Ingeniería Civil Informatica en la Universidad Adolfo Ibañez</h4>
                    <img src="./images/gabriel.jpg" height="200"/>
                </section>
                <section class="pasatiempo">
                    <h3>Leer, ya sean libros o mangas.</h3>
                    <h4>Leo de manera seguida, es mi forma de distraerme de la rutina. Mi manga favorito es One Piece. </h4>
                    <img class="lectura" src="./images/lectura.jpg" height="190"/>
                </section>
            
                <section class="pasatiempo">
                    <h3>Tocar batería.</h3>
                    <h4>Toco la batería desde los 6 años y me encanta hacerlo. Me gusta tocar Jazz, Rock Alternativo y Metal Alternativo.</h4>
                    <img src="./images/bateria.jpeg" height="250"/>
                </section>
    
                <section class="pasatiempo">
                    <h3>Salir a caminar por el parque.</h3>
                    <h4>Para despejar la mente o canalizar mis ideas, me encanta entrar en contacto con la naturaleza.</h4>
                    <img class="parque" src="./images/parque.avif" height="200"/>
                </section>
    
                <section class="pasatiempo">
                    <h3>Ir a entrenar al gimnasio.</h3>
                    <h4>Me hace feliz entrenar mi cuerpo, aparte de los beneficios fisicos que me trae, me da mucha fellicidad hacerlo.</h4>
                    <img class="gym" src="./images/gym.jpg" height="200"/>
                </section>
    
                <section class="pasatiempo">
                    <h3>Reunirme con mi novia.</h3>
                    <h4>Estoy en una relación de 5 años y me encanta pasar tiempo con ella, me olvidó de mi alrededor y me siento en plenitud.</h4>
                    <img src="./images/pareja.jpg" height="200"/>
                </section>
            </div>
        </section>
    );
}

export default Gabriel;
