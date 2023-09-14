window.onload = init();
 
function init() {
    // funcion que devuelve n numeros aleatorios sin repetirse
    const random = (n) => {
        let elem=Array.from({length: n}, (v, i) => i);
        return Array.from({length: n}).reduce((acum) => {
            let pos=Math.floor(Math.random()*elem.length);
            acum.push(elem[pos]);
            elem.splice(pos,1);
            return acum;
        }, []);
    };
 
    // ponemos las imagenes aleatoriamente
    random(6).forEach(el => {
        document.getElementById("imagenes").innerHTML+="<img id='i"+el+"' draggable='true' src='assets/img/"+el+".jpg'>";
    });
 
    puzzle();
}
 
function puzzle() {
 
    // cremos los eventos para iniciar a arrastrar las imagenes
    const imgOrigin=document.querySelectorAll("#imagenes img");
    imgOrigin.forEach(el => {
        el.addEventListener("dragstart", dragStart, false);
    });
 
    // creamos los eventos para mover y soltar
    const imgDest=document.querySelectorAll("#contenedor div");
    imgDest.forEach(el => {
        el.addEventListener("dragenter", dragEnter, false);
        el.addEventListener("dragover", dragOver, false);
        el.addEventListener("dragleave", dragLeave, false);
        el.addEventListener("drop", drop, false);
    });
 
    function dragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
 
        // guardamos el id del elemento que estamos moviendo
        e.dataTransfer.setData("text/plain", this.id);
    }
 
    function dragEnter(e) {
        e.dataTransfer.dropEffect = 'move';
        e.preventDefault();
    }
 
    function dragOver(e) {
        e.dataTransfer.dropEffect = 'move';
        this.classList.add("over");
        e.preventDefault();
    }
 
    function dragLeave(e) {
        this.classList.remove("over");
        e.preventDefault();
    }
 
    function drop(e) {
        this.classList.remove("over");
 
        // obtenemos el id de la imagen que estamos moviendo
        const imgID=e.dataTransfer.getData("text/plain");
        const img=document.getElementById(imgID);
 
        if (this.innerHTML) {
            if (img.parentElement.parentElement.id=="contenedor") {
                // movemos una imagen encima de otra imagen dentro del contenedor
 
                // cogemos los valores de la imagen que se encuentra en el destino
                const orig=this.querySelector("img");
                // cogemos el contenedor de la imagen original
                const dest=img.parentElement;
 
                // movemos la imagen que arrastramos
                moverImagen(img, this);
                // movemos la imagen que se encuentra en el contenedor donde
                // hemos arrastrado la imagen
                moverImagen(orig, dest);
            }
        } else {
            // movemos la imagen a un contenedor vacio
            moverImagen(img, this);
        }
        e.preventDefault();
 
        completado();
    }
 
    /**
     * Funcion para mover una imagen.
     *
     * @param {object} origen - imagen a mover
     * @param {object} destino - contenedor donde poner la imagen
     */
    function moverImagen(origen, destino) {
        const fragment = document.createDocumentFragment();
        fragment.appendChild(origen);
        destino.appendChild(fragment);
    }
 
    /**
     * Funcion que verifica si se ha completado
     */
    function completado() {
        console.log("chequeando si se completo");
        const resultado=document.getElementById("resultado");
        resultado.classList.add("hide");
        const overlay=document.getElementById("blur-overlay");
        overlay.classList.add("hide");
 
        const imgs=document.querySelectorAll("#contenedor img");
        if (imgs.length!=6) {
            console.log("entro en primer if");
            return false;
        }
 
        if ([...imgs].every((el, index) => el.id=="i"+index)) {
            console.log("entro en segundo if");
            setTimeout(function() {
                $("#blur-overlay").fadeIn();
                $("#resultado").fadeIn();
            }, 1000);
            
            
            
        }
    }
}