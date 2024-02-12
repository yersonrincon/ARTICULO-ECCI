import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AnimationOptions } from "ngx-lottie";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajo-ecci';
  texto: string = '';
  texto1: string = '';
  texto2: string = '';
  texto3: string = '';
  titulo: string = '';
  titulo1: string = '';
  titulo2: string = '';
  titulo3: string = '';
  titulo4: string = '';
  titulo11: string = '';
  titulo12: string = '';
  titulo13: string = '';
  textoa: string = '';
  textob: string = '';
  textoc:string ='';


  servicios: AnimationOptions = {
    path: "assets/ideas.json"

  }
  mercado: AnimationOptions = {
    path: "assets/mercado.json"
  }
  marketin: AnimationOptions = {
    path: "assets/marketin.json"
  }
  logo: AnimationOptions = {
    path: "assets/servicios.json"

  }
  trabajo: AnimationOptions = {
    path: "assets/trabajo.json"

  }
  industria: AnimationOptions = {
    path: "assets/industria.json"
  }
  producto: AnimationOptions = {
    path: "assets/producto.json"
  }
  inovacion: AnimationOptions = {
    path: "assets/inovacion.json"
  }
  caracteristicas: AnimationOptions = {
    path: "assets/caracteristicas.json"
  }
  constructor(private modalService: BsModalService) {
  }
  modalRef!: BsModalRef;
  openModal(template: TemplateRef<any>, icono: any) {
    this.texto = '', this.texto1 = '', this.titulo = '', this.titulo1 = '', this.titulo4 = '', this.texto3 = '', this.titulo11 = '', this.titulo12 = '', this.titulo13 = '', this.textoa = '';

    this.tipoTextos(icono);
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog modal-lg' });

  }
  closeVentana(): void {
    this.modalRef.hide();
  }
  tipoTextos(icono: any): any {
    switch (icono) {
      case 1:
        this.texto = "Consiste en un proceso de ideación y puesta en marcha de propuestas para  nuevos productos y/o servicios o nuevas características de los mismos que resuelvan una necesidad concreta de un mercado objetivo.";
        this.titulo = '1. ¿Qué es la innovación?';
        this.titulo1 = "2.	 Innovación de Procesos";
        this.texto1 = `Cuando un producto y/o servicio se encuentra enfocado a la  optimización, reducción de costos, cumplimiento de objetivos, productividad y mejoras del servicio, se está implementando innovación orientado a los procesos  debido a la mejora de los mismos o creación de nuevos que permiten cumplir los objetivos estratégicos  de una compañía.<br> <br>Algunos de los siguientes ejemplos representan la innovación tecnológica aplicada a los procesos: <br><br> ●	 Consultoras de marketing como lo detalla el caso de éxito de la aceleradora Axios con un cliente de esta área donde muestra cómo  la aplicación de RPA en los procesos de negocio relacionados a Outbound Marketing reduce los costos de operación incrementando en un 75 a 80 % el márgen de productividad siendo una solución que vende eficiencia en términos de tiempo y retorno de inversión.<br>
         Softtek S.A lidera gran parte del mercado a nivel internacional ofreciendo servicios de IT AMS (Application Management service) en el cual gestiona todo el servicio de adopción tecnológica en respuesta a las necesidades cambiantes de los clientes. Adicionalmente es pionero en el servicio Nearshore, en el que realiza su operación como outsourcing desde ubicaciones geográficas estratégicas cercanas a la del cliente final.<br>
        
        ● Siemmens si  es otro ejemplo donde esta gran compañía que focaliza sus servicios de tecnologías de la información y transformación digital en diferentes sectores como el sector salud, educación, sector público, privado entre otros aprovecha los beneficios de las tecnologías de la 4 o 5 revolución industrial como lo es el RPA, automatizando procesos en cada área con el fin cumplir puntos como<br>
        ●	El incremento de la productividad de sus clientes realizando tareas manuales y repetitivas basadas en reglas.<br>
        ●	Precisión y consistencia en la información procesada evitando el riesgo humano por agotamiento.<br>
        ●	Salvando costos de soporte, costos relacionados a incumplimientos de Acuerdos de nivel de servicio y costos legales.<br>
        ●	mejorando la satisfacción del cliente facilitando sus procesos al integrar trabajadores digitales dentro de su cultura organizacional.<br>
        
        La importancia que ofrece innovar en cuanto a procesos ya sea mediante un servicio o un producto implica en el beneficio que las compañías pueden obtener al crear o, mejorar o corregir procesos (Optimización) para su correcta automatización.
         `
        break;
      case 2:
        this.titulo = '3.innovación de mercadeo';
        this.texto = `Es la promoción de productos y/o servicios originales y avanzados. Esto se hace, por medio de la investigación
        sobre el comportamiento,las necesidades y las tendencias de los clientes para así ayudarle a desarrollar cambios en el diseño de un producto 
        para que tenga más éxito. <br><br>`;

        this.titulo1 = 'La innovación de mercadeo toma datos como:';
        this.texto1 = `● Novedad: Se refiere a una idea original y única que estimula la creación.<br>
        ●	Ejecución: Esto fomenta el impulso y la implementación de nuevas ideas.<br>
        ●	Resultados: Esto se refiere al aumento del valor comercial a partir de productos o servicios útiles.<br><br>`;

        this.titulo4 = 'ejemplos'
        this.texto3 = `A.	Instagram: Una plataforma para que las marcas muestren sus productos desde diferentes perspectivas como por ejemplo las publicaciones, las historias y anuncios, le permite llamar la atención sobre su empresa y ganar clientes.<br>
        B.	Loréal: Es una tecnología de realidad aumentada que permite a los clientes comprar artículos desde diferentes dispositivos como teléfonos inteligentes y tabletas.<br>
        C.	SmartBuyGlasses: Utiliza la realidad virtual para que los clientes puedan probar sus gafas y tomar la decisión correcta <br>`

        break;
      case 3:
        this.titulo = '4.Industrias Tecnologicas';
        this.texto1 = `<h4>1 Samsung</h4>  A la hora de comprar un teléfono móvil, muchos dudan entre Iphone y Samsung, y es que si Apple está en el número 1, Samsung le sigue muy de cerca en el segundo puesto. Con sede en 
          Corea del Sur, este conglomerado de empresas multinacionales fue fundada en 1969 y tiene ni más ni menos que 93.200 empleados en todo el mundo. Sus negocios abarcan desde la electrónica de consumo, la tecnología hasta finanzas y aseguradoras.
          <br> 
           <h4>2Microsoft</h4> Otra empresa que apenas necesita presentación es Microsoft, una de las compañías tecnológicas multinacionales más famosas a nivel mundial. Fundada en 1975 por Paul Allen y Bill Gates, en la actualidad desarrolla, manufactura, licencia y provee soporte de software para ordenadores, servidores, dispositivos electrónicos y servicios. Además de uno de los
           sistemas operativos más utilizados, también han desarrollado la consola Xbox.<br> 
          <h4>3 Intel Intel</h4>, fundada en 1968 y con sede en Santa Clara, California, es la mayor fabricante de circuitos integrados del mundo. En la mayoría de ordenadores personales podemos encontrar procesadores creados precisamente por esta empresa, creada por Robert Noyce y Gordon Moore. Un hecho curioso es que el nombre Intel estaba registrado
          por una cadena de hoteles, así que para utilizar dicho nombre tuvieron que comprarle los derechos.<br> 
          <h4>4 Facebook</h4> Si para describir a Apple sobraban palabras, lo mismo pasa con Facebook. Aunque sea impresionante, a nadie le sorprende que en tan solo 15 años se haya ganado un hueco entre el top 10 de empresas del sector tecnológico del mundo. A pesar de haber empezado como una red social, a día de hoy sus productos incluyen Facebook, Instagram, Messenger, WhatsApp y Oculus, ¡nada mal teniendo en cuenta que son de las aplicaciones que más utilizamos para comunicarnos en la actualidad!.<br>.
          <h4> 5 Oracle</h4> El décimo puesto de la lista es para Oracle, empresa TIC con sede en Redwood City, California. Fundada en 1977, Oracle ofrece software para empresas y servicios de hardware informático, además de estar especializada en el desarrollo de soluciones de nube y locales. Menos conocida quizás que Apple para el público general, lo cierto es que Oracle se encuentra prácticamente en todas las oficinas de las empresas Fortune 100 y está presente en muchas de las industrias del mundo.`;
        break;
      case 4:
        this.titulo = '5.Caracteristicas de un Producto';
        this.texto = `
            Las características de un producto son las cualidades distintivas y atributos que describen sus aspectos físicos, funcionales o beneficios que ofrece a los consumidores. Estas características son fundamentales para entender y promover un producto.`
            this.titulo1 = `6. Innovación de producto`
        this.texto2 = `La innovación de producto consiste en la creación o  mejora de un producto y/o servicio dentro de un mercado existente o incursionando en uno nuevo. Por lo general consta de 3 etapas<br>`
      
        this.titulo11 = `A.Investigación del mercado:`
        this.textoa = `
            Tienen como objetivo recopilar datos de investigación de mercado primarias o secundarias<br>
            Investigación primaría:<br>
            Tienen varios métodos de muestreo como:<br>
            - Grupos focales.<br>
            - Cuestionarios <br>
            entrevistas.<br>
            Investigación secundaria:<br>
            Es información universalmente accesible procedente de estudios previos. <br>
            `

        this.titulo12 = `B.Desarrollo de productos:`
        this.textob=`En base a los resultados del estudio de mercado, se  construye un MVP (Producto mínimo viable) el cuál es lanzado al mercado para evaluarlo y mejorarlo partiendo del feedback. `
        this.titulo13 = `C.Estudio de viabilidad`
        this.textoc=`Este estudio se fija en las implicaciones legales y financieras de introducir un nuevo producto en el mercado o característica.`
        break;
        
        case 5:
          this.titulo='7.Descripción de Producto de Software'
          this.texto=`Facilidad de Uso: Interfaz intuitiva o cualquier característica que haga que el software sea fácil de usar.
          Rendimiento Optimizado: Resalta el rendimiento rápido y eficiente del software.<br>
          Soporte Técnico: Menciona la disponibilidad de soporte técnico y cómo los usuarios pueden obtener ayuda cuando la necesiten.<br>
          Compatibilidad:sistemas operativos compatibles y puede integrarse fácilmente con  productos o plataformas específicas.<br>
          Seguridad:La seguridad de los datos es una prioridad para nosotros los usuarios para proteger la información confidencial y garantizar la privacidad del usuario.
          
          `
          break;
          case 6:
            this.titulo = '8.Propuesta de valor Idea de proyecto ';
            this.titulo1='Optimización y Automatización de procesos operacionales en la atención al cliente'
            this.texto1=`
            La propuesta de valor está enfocada en ofrecer una mejora en la experiencia al cliente y consiste en un producto de software de automatización y optimización de procesos enfocado en la atención al cliente.<br><br>

 Factor importante para garantizar la fidelidad del cliente así como una buena reputación. Uno de los sectores diversos dentro de la información y las comunicaciones que presenta una tendencia negativa de crecimiento en el valor del producto interno bruto del país muestra una oportunidad de mejora por medio de tecnologías de la información.<br><br>

Si optimizamos los procesos ineficientes y luego los automatizamos garantizamos que la operación al cliente esté enfocada en habilidades humanas y no mecánicas y repetitivas que pueden ser ejecutadas por un trabajador digital.<br><br>

Es entonces una solución de software de automatización el encargado de trabajar procesos eficientes basados en reglas y repetitivos en una gran Solución tecnológica mediante la cual puedo ofrecer experiencia eficiente al cliente y al agente aplicando Inteligencia artificial Como por ejemplo el análisis de datos tendencias de compra y análisis en tiempo real de llamadas mediante la cual dicho sistemas pueden consultar la información correspondiente y ofrecer en el caso de un call center servicios agregados que permitan la fidelización del cliente o en Casos de ecommerce la precisión puntualidad y atención en cuanto a la gestión de entrega de productos en plataformas como Mercado Libre, Amazon etc. 
`
          break;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }
  }
}

