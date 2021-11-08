// Componene de imágenes
import './css/Imagen.css'

const Imagen = ( { clasesFigure, claseImg, urlImg, alt }) => {
    return (
        <>
            <figure
                className={clasesFigure}
            >
                <img 
                    src={urlImg}
                    alt={alt}
                    className={claseImg}
                    alt={alt}
                />
            </figure>
        </>
    )
}

export default Imagen