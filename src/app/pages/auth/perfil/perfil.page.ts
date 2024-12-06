import { Component, inject, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus} from "@emailjs/browser";
import { UtilsService } from "../../../services/utils.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  consejoForm = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required])
  })

  form = new FormGroup({
    image: new FormControl('',[Validators.required])
  })

  utilsvc = inject(UtilsService);
  firebaseSvc = inject(FirebaseService);

  user = {} as User;

  ngOnInit() {
    this.obtUserName();
    this.user = this.utilsvc.getFromLocalStorage('user');
    this.generarConsejoRandom();
  }
//uso de la camara
  async takeImage(): Promise<void> {
    try {
      const result = await this.utilsvc.takePicture('Foto de Perfil');
      console.log('Resultado de takePicture:', result); // Verifica la estructura del objeto resultante
      const dataUrl = result?.dataUrl;
      if (dataUrl) {
        if (this.form && this.form.controls && this.form.controls.image) {
          this.form.controls.image.setValue(dataUrl);
        } else {
          console.error('El control de imagen no está inicializado o no es accesible.');
        }
      } else {
        console.error('dataUrl no está definido en el resultado.');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  //Cerrar sesión
  signOut() {
    this.firebaseSvc.signOut();
  }

  //Página no encontrada
  notFound(){
    this.utilsvc.routerLink('/**');
  }

  lineUps(){
    this.utilsvc.routerLink('/lineups')
  }

  obtUserName(){
    this.utilsvc.loadingUserName();
    let nombre :string=this.utilsvc.getFromLocalStorage(this.user.name);
    return nombre;
  }

  //--------------------Enviar Correo-----------------------------------------
  consejos:string[]=[
    'Conoce los Agentes: Familiarízate con los agentes y sus habilidades. Aprende qué puede hacer cada uno y cómo puedes contrarrestarlos.',

  'Práctica en el Campo de Tiro: Usa el campo de tiro para mejorar tu puntería, precisión y el control del retroceso de las armas.',

  'Ajusta tu Sensibilidad: Encuentra una configuración de sensibilidad que te permita apuntar con precisión. Muchos jugadores profesionales usan sensibilidades bajas.',

  'Usa el Modo de Práctica: Aprovecha el modo de práctica para experimentar con diferentes armas y mecánicas sin presión.',

  'Aprende a Usar la Cámara: La cámara es fundamental para obtener información. Usa el minimapa y la vista de primera persona para anticipar movimientos enemigos.',

  'Estudia los Mapas: Conoce los mapas a fondo, incluyendo las posiciones de las bombas, puntos estratégicos y rutas de flanqueo.',

  'Comunicación: Utiliza el chat de voz o el chat de texto para comunicarte con tu equipo sobre la posición de los enemigos y tus planes.',

  'Juega en Equipo: Valorant es un juego de equipo. Coordina tus habilidades y movimientos con tus compañeros para maximizar el impacto.',

  'No Corras al Disparar: Siempre que dispares, detente o disminuye la velocidad para mejorar la precisión.',

  'Utiliza la Economía: Aprende a manejar el dinero del juego. Ahorra para rondas importantes y compra en equipo.',

  'Toma Notas sobre tus Partidas: Después de cada partida, reflexiona sobre lo que hiciste bien y lo que podrías mejorar.',

  'Practica el "Crosshair Placement": Mantén tu mira a la altura de la cabeza y en ángulos donde es probable que aparezcan los enemigos.',

  'Ve Repeticiones de Jugadores Profesionales: Observa partidas de jugadores profesionales para aprender estrategias y técnicas.',

  'Desarrolla un Estilo de Juego: Encuentra un rol en el equipo que se adapte a tu estilo, ya sea fragger, support o controller.',

  'Utiliza las Habilidades de Forma Efectiva: Aprende a usar las habilidades de tu agente no solo para atacar, sino también para defender y obtener información.',

  'Mantén la Calma: La gestión del estrés es clave. Mantén la calma en situaciones tensas para tomar decisiones mejores.',

  'Practica el "Pre-Fire": Dispara antes de ver al enemigo en lugares comunes donde es probable que se oculten.',

  'Cambia tu Estrategia: Si algo no está funcionando, no dudes en cambiar tu enfoque o estilo de juego.',

  'Configura tus Teclas: Asegúrate de que tus teclas estén configuradas de forma que puedas acceder rápidamente a las habilidades y armas.',

  'Diviértete: No olvides que el objetivo principal es disfrutar. La diversión te ayudará a mantenerte motivado para mejorar.'
  ];

  consejoAleatorio:string='';

  generarConsejoRandom(){
    const indiceAleatorio = Math.floor(Math.random()* this.consejos.length);
    this.consejoAleatorio=this.consejos[indiceAleatorio];
  }
  
  sendEmail(){
    const templateParams = {
      email: this.consejoForm.get('email')?.value,
      message: this.consejoAleatorio,
      from_name: 'WikiVal'
    };
  
    emailjs.send(
      'service_xc9ggny',
      'template_ne36s6b',
      templateParams,
      'HFb_DsZZGfGWtWr_Q'
    ).then(
      () => {
        console.log('Exito!');
        console.log(this.user.name);
      },
      (error) => {
        console.log('Falló el envío!', (error as EmailJSResponseStatus).text);
      },
    );
  }
  
}  
