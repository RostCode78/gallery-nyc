const id = document.getElementById.bind(document);
const query = document.querySelector.bind(document);
const allQuery = document.querySelectorAll.bind(document);
const print = console.log;

let p = {
   fotos: allQuery('.container-gallery>div'),
   modalGallery: query('#modal-gallery'),
   modal: query('.img-modal'),
   rutaImg: null
};

let m = {
   tomarFoto: () => {

      p.fotos.forEach(producto => {

         producto.addEventListener(
            'click', 
            m.mostrarFoto
         );

      });

   },

   mostrarFoto: (producto) => {
      p.rutaImg = producto.target;
      m.modalGallery(p.rutaImg);
   },

   modalGallery: (producto) => {
      p.modalGallery.style.display = "flex";
      p.modal.innerHTML = producto.outerHTML;

      p.modal.childNodes[0].style.width = "100%";
      p.modal.childNodes[0].style.height = "100%";
      p.modal.childNodes[0].style.backgroundSize = "auto";
   },

   quitarFoto: () => {
      p.modalGallery.addEventListener(
         'click',
         m.borrar
      )
   },

   borrar: () => {
      p.modalGallery.style.display = "none";
   }
};

m.tomarFoto();
m.quitarFoto();