<template>
  <div class="wrapper">
    




    <div class="section page-header header-filter" :style="headerStyle">




      <div class="container">


        <div class="md-layout">
          
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">


           <form @submit.prevent="acceso">
                        <login-card header-color="green">
                          <h4 slot="title" class="card-title">Inicio Sesion</h4>
                          <md-button
                            slot="buttons"
                            href="javascript:void(0)"
                            class="md-just-icon md-simple md-white"
                          >
                            <i class="fab fa-facebook-square"></i>
                          </md-button>
                          <md-button
                            slot="buttons"
                            href="javascript:void(0)"
                            class="md-just-icon md-simple md-white"
                          >
                            <i class="fab fa-twitter"></i>
                          </md-button>
                          <md-button
                            slot="buttons"
                            href="javascript:void(0)"
                            class="md-just-icon md-simple md-white"
                          >
                            <i class="fab fa-google-plus-g"></i>
                          </md-button>

                          
                        
                                    <p slot="description" class="description">Digita tus datos para acceder a la sitio.</p>
                                    
                                    <md-field class="md-form-group" slot="inputs">
                                      <md-icon>perm_identity</md-icon>
                                      <label>Número de identificación...</label>
                                      <md-input v-model="username" type="email" name="username" @change="verificarid" @input="verificarid"></md-input>
                                    </md-field>
                                    <md-field class="md-form-group" slot="inputs">
                                      <md-icon>lock_outline</md-icon>
                                      <label>Password...</label>
                                      <md-input v-model="password" name="password" type="password"></md-input>
                                    </md-field>
                                    <md-button slot="footer" @click="acceso" class="md-simple md-success md-lg">
                                      Acceder
                                    </md-button>
                                    <md-button slot="footer" class="md-simple md-success md-lg" href="#/Registro">
                                      Registrarse
                                    </md-button>
                        
                        </login-card>
           </form>
          </div>

        </div>
        <p>
          {{error.statusText}}
          <small>{{error.status}}</small>
        </p>
      </div>
    </div>


  </div>
</template>

<script>
import { LoginCard } from "@/components";
import api from '@/api'
 import toastr from 'toastr';

 toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  name : 'login',
  data() {
    return {
      username: '',
      password:'',
      error:{}
    }
  },
  methods:{
      acceso(){
        
        api.authenticate(this.username, this.password)
        .then(res =>{
          window.localStorage.token = res.accessToken
          window.localStorage.user = res.username
          window.localStorage.role = res.authorities[0].authority
          
          console.log("-----"+res.username);
          console.log("-----"+res.accessToken);
          console.log(res.authorities[0].authority);
          //console.log("-----"+window.atob(res.accessToken.split('.'[1])));
          if(res.authorities[0].authority === 'ROLE_ADMIN'){
                console.log("Redirigiendo a profile");
                this.$router.push('/admin')
                
          }

          if(res.authorities[0].authority === 'ROLE_PROFESOR'){
                console.log("Redirigiendo a profile");
                this.$router.push('/profesor')
                
          }

          if(res.authorities[0].authority === 'ROLE_ESTUDIANTE'){
                console.log("Redirigiendo a profile");
                this.$router.push('/estudiante')
                
          }

          if(res.authorities[0].authority === 'ROLE_USER'){
                console.log("Redirigiendo a profile");
                this.$router.push('/')
                
          }

        })
        .catch(err => (
          toastr.error('Datos Incorrectos')))

        
        console.log("---"+this.error.error);
        console.log("---"+this.error.message);
        console.log("Enttra acceso" +this.username +"---"+this.password);
        console.log("Un cambio para que se actualize en github");
      },
    removeNotify(e, notifyClass) {
     
      return this.notificacion = false;
    
  },
    verificarid(){
      api.verificarid(this.username)
      .then(res =>{

        if(res){
          toastr.success('Esta identificación es correcta')
        }else{
         // toastr.success('Este usuario esta disponible',{progressBar:true})
         console.log("Este usuario esta disponible");
        }
        
        
        })
      .catch(err => {console.log("Esto no salio nada bien...")})
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
