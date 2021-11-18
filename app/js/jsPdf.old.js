/*
ESTE ESCRIP YA NO ESTA EN SU .... CAMBIAR LSO DATOS aqui no causara problema alguno.
   
____________________________________
/ Si necesitas ayuda, contáctame en \
\ https://parzibyte.me               /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
Creado por Parzibyte (https://parzibyte.me). Este encabezado debe mantenerse intacto,
excepto si este es un proyecto de un estudiante.
*/
/*document.addEventListener("DOMContentLoaded", () => {
    console.log("Dom rendered")
    // Escuchamos el click del botón
    const $boton = document.querySelector("#btnCrearPdf");
    var element = document.getElementById("element");
    console.log(element);
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            
            .set({
                margin: [0.05,0.05],
                //Margen de PDF (en unidades jsPDF). Puede ser un solo número [vMargin, hMargin], o [top, left, bottom, right].
                filename: 'CotizacionTestWidget.pdf',
                image: { type: 'jpeg', quality: 0.99 },
                html2canvas: { scale: 144, // A mayor escala, mejores gráficos, pero más peso
                    //onrendered: myRenderFunction
                    letterRendering: true, dpi: 192
                },
                jsPDF: {
                    unit: "in",
                    format: "a4",
                    orientation: 'portrait' // landscape o portrait || horizontal o vertical
                },
                //pagebreak: { before: '.beforeClass', after: ['#dato1', '#after2'], avoid: 'img' }
                //pagebreak: { before: '.beforeClass', after: ['#dato1']}
                //{aqui es els salto de linea}
                //{son 3 hojas de pdf}
            })
            .from(element)
            .save()
            //window.open(boton.output("bloburl"))
           
           
    });
    
});*/