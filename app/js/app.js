
      
var app = new Vue ({
    el: '#app',
    data: {
      message: 'Hello!',
      entity : {
        id : null,
        module: null,
      },
      seccion_Motocicleta : {
          nombre: null,
          precio_Lista:null,
          cantidad:null,
          MotorTipo:null,
          motorcilindrada:null,
          hp_max:null,
          tp_alimenta:null,
          transmision:null,
          montoUSD:null,
          frenosMoto:null,
          ruedDelant:null,
          ruedapost:null,
          suspension_Delant:null,
          suspension_Post:null,
          Dimensiones:null,
          Peso:null,
          cap_deTank:null
      },
      seccion_Html:{
          fecha:null,
          NombredePDF:null,
          NameProduct:null,
          nam1:null,
          codec1:null,
          format:null,
          nam2:null,
          codec2:null,
          format2:null
      },
      Seccion_cliente:{
          Nombre_Cliente:null,
          Cargocliente:null
      },
      Seccion_cotizacion:{
        Subcategoria:null,
        Marca:null,
        Modelo:null,
        Grantota_l:null
    },
      Seccion_Asesor:{
          Nombre:null,
          Apellido:null,
          Correo:null,
          Correo2:null,
          Celular:null,
          Cargo:null,
          NumeroDeDocumento:null,
          TipoDeDocumento:null,
          sede:null
      },
      Array_Data: [],
      cargado:false,
      Imagenes:[]
    },
    methods:{
        onLoad: function() {
            const self = this;
            ZOHO.embeddedApp.on("PageLoad", async function(data) {
                console.log(data);
                self.entity.id = data.EntityId[0];
                self.entity.module = data.Entity;

                await self.getDataFromZoho(self.entity.id);
                
            });
        },
        initZSDK: function() {
            const self = this;
            ZOHO.embeddedApp.init()
                .then(function () {
                    ZOHO.CRM.UI.Resize({
                        height: "750",
                        width: "850"
                    })
                }); 
        },
        getDataFromZoho: async function(id) {
            // https://www.zohoapis.com/crm/v2/functions/sa_get_all_data/actions/execute?auth_type=oauth
            //OBTENEMOS LA DATA
            var func_name = "getdatacotizacionall";
            var req_data ={
                "arguments": JSON.stringify({
                    "id" : id,
                })
            };
            
            // .getElementsByClassName("ModelodeMotoSeleccionada"));



            let datosFromZoho = await ZOHO.CRM.FUNCTIONS.execute(func_name, req_data)
            let datos = datosFromZoho.details.output;
            let datos_object =  JSON.parse(datos);
            console.log(datos_object, "datos_object");
            
            this.Array_Data = datos_object.SeccionCotizacion.ListaItemsCotizacion;
            console.log(this.Array_Data, "Array_Data");
            //
            this.seccion_Html.NombredePDF= datos_object.SeccionCotizacion.Subject+"";
            this.Seccion_cliente.Nombre_Cliente = datos_object.SeccionCliente.nameCliente;
            this.Seccion_cliente.Cargocliente = datos_object.SeccionCliente.cargoCliente;
            this.Seccion_cotizacion.Marca = datos_object.SeccionCotizacion.ListaItemsCotizacion[0].MARCA;
            this.Seccion_cotizacion.Grantota_l = datos_object.SeccionCotizacion.GranTotal+"";
            if (Seccion_cotizacion.Grantota_lstr.includes(".") === false  ) {
                this.Seccion_cotizacion.Grantota_l = datos_object.SeccionCotizacion.GranTotal+".00";
            }
            //this.Seccion_cotizacion.Marca = datos_object.SeccionCotizacion.ListaItemsCotizacion[0].MARCA;
            /*this.Seccion_cotizacion.ListaCotizacion = datos_object.SeccionCotizacion.ListaItemsCotizacion[0].MARCA;*/
           /* this.seccion_Motocicleta.nombre  = datos_object.seccion_motocicleta.nombre; //reeelplazar por descripcion de la moto
            ////
            this.seccion_Motocicleta.precio_Lista = datos_object.seccion_motocicleta.precio_Lista;
            this.seccion_Motocicleta.cantidad =  datos_object.seccion_motocicleta.cantidad;
            this.seccion_Motocicleta.MotorTipo = datos_object.seccion_motocicleta.MotorType;
            this.seccion_Motocicleta.motorcilindrada = datos_object.seccion_motocicleta.motorcilindrada;
            this.seccion_Motocicleta.hp_max= datos_object.seccion_motocicleta.HpMax;
            this.seccion_Motocicleta.tp_alimenta= datos_object.seccion_motocicleta.tp_aliment;
            this.seccion_Motocicleta.transmision=datos_object.seccion_motocicleta.transmi;
            this.seccion_Motocicleta.montoUSD = datos_object.seccion_motocicleta.montoUsd;
            this.seccion_Motocicleta.frenosMoto= datos_object.seccion_motocicleta.frenos;
            this.seccion_Motocicleta.ruedDelant = datos_object.seccion_motocicleta.llantadelant;
            this.seccion_Motocicleta.ruedapost = datos_object.seccion_motocicleta.llantapost;
            this.seccion_Motocicleta.suspension_Delant = datos_object.seccion_motocicleta.suspensionDelant;
            this.seccion_Motocicleta.suspension_Post = datos_object.seccion_motocicleta.suspensionPost;
            this.seccion_Motocicleta.Dimensiones = datos_object.seccion_motocicleta.Dimensione_s;
            this.seccion_Motocicleta.Peso = datos_object.seccion_motocicleta.peso;
            this.seccion_Motocicleta.cap_deTank = datos_object.seccion_motocicleta.captanke;
            //
            this.seccion_Html.fecha=datos_object.seccion_Html.FechaPrincipalHoja;
            this.seccion_Html.NombredePDF=datos_object.seccion_motocicleta.modeloMoto;
            this.seccion_Html.NameProduct=datos_object.seccion_motocicleta.modeloMoto;
            //aqui para img de base 64:
            this.seccion_Html.nam1 ="";
            this.seccion_Html.codec1 = stringscodec1;
            this.seccion_Html.format = "";

            this.seccion_Html.nam2 = "";
            this.seccion_Html.codec2 = stringscodec2;
            this.seccion_Html.format2 = "";
            
            //seccion para datos del asesor comercial:
            this.Seccion_Asesor.Nombre = datos_object.seccionAsesorC.Nombre_Asesor;
            this.Seccion_Asesor.Apellido = datos_object.seccionAsesorC.Apellido_Asesor;
            this.Seccion_Asesor.Correo = datos_object.seccionAsesorC.Correo1Asesor;
            this.Seccion_Asesor.Correo2 = datos_object.seccionAsesorC.Correo2Asesor;
            this.Seccion_Asesor.Celular = datos_object.seccionAsesorC.celuarAsesor;
            this.Seccion_Asesor.Cargo = datos_object.seccionAsesorC.CargoAsesor;
            this.Seccion_Asesor.NumeroDeDocumento = datos_object.seccionAsesorC.NumdocAsesor;
            this.Seccion_Asesor.TipoDeDocumento = datos_object.seccionAsesorC.tipoDocAsesor;
            this.Seccion_Asesor.sede = datos_object.seccionAsesorC.sedeAsesor;


            //
            this.Seccion_cliente.Nombre_Cliente="Estimado(a) "+datos_object.seccion_Cliente.ClienteDecotizacion;
            //
            this.Imagenes=datos_object.seccion_motocicleta.Imgenes;
            this.cargado= true;*/
            return datosFromZoho;

        },
        GenerarPDf: function(){
            //const $boton = document.querySelector("#btnCrearPdf");  this.seccion_Html.NombredePDF
            const $element = document.getElementById("element");
            console.log("Nombre de PDF: "+ this.seccion_Html.NombredePDF);
           // $boton.addEventListener("click", () => {
                // const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
                html2pdf()
                    .set({
                        margin: [0.18,0.18],
                        filename: this.seccion_Html.NombredePDF+".pdf",
                        image: {
                            type: 'jpeg',
                            quality: 0.98
                        },
                        html2canvas: {
                            scale: 4, // A mayor escala, mejores gráficos, pero más peso
                            letterRendering: true,
                        },
                        jsPDF: {
                            unit: "in",
                            format: "a4",
                            orientation: 'portrait' // landscape o portrait
                        }
                    })
                    .from($element)
                    .save()
                    .catch(err => console.log(err));
            //});
        }
    },
    created: function(){
        this.onLoad();
        this.initZSDK();
        // this.getDataFromZoho();
        ZOHO.embeddedApp.init();

    },
  })
