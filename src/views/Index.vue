<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            
            <div class="brand">
              <h1>HomeSchool</h1>
              <h3>Institución eduacativa Campo Alegre</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
    
    <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h1>¿Como Funciona HomeSchool?</h1>
          </div>
        </div>
      </div>

    <div class="section section-basic">
        <div class="container">

            <cartasPaola></cartasPaola>

        </div>
    </div>

    <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h1>...........</h1>
          </div>
        </div>
      </div>

    
    </div> <!--Div del cuerpo-->
  </div>
</template>




    <style>
    .centrar{
  
      display:flex;
      align-items:center;
      margin: 0 auto;
      }
        body{
            margin-top: 100px;
        }
       
        .btn-info,
        .btn-info:hover,
        .btn-info:focus{
            color: #FFF !important;
            background-color: #00bbff !important;
            border-color: #00bbff !important;
        }

        .btn-info{
            opacity: .8;
            transition: all 0.1s;
            -webkit-transition: all 0.1s;
        }
        .btn-info:hover,
        .btn-info:focus{
            opacity: 1;
        }
    </style>

<script>
import BasicElements from "./components/BasicElementsSection";
import cartasPaola from "./components/cartasPaola";
import Navigation from "./components/NavigationSection";
import SmallNavigation from "./components/SmallNavigationSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import Notifications from "./components/NotificationsSection";
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";
import { LoginCard } from "@/components";
import api from '@/api'

export default {
  name:'home',

  components: {
    BasicElements,
    Navigation,
    SmallNavigation,
    Tabs,
    NavPills,
    Notifications,
    TypographyImages,
    JavascriptComponents,
    LoginCard,
    cartasPaola
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/banner.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ],
      leafShow: false,
      user:JSON.parse(window.localStorage.user),
      apiStatus:{},
      tokenStatus:''
    };
  },
  created(){
    this.getStatus()
    this.checkToken()
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
    getStatus(){
      api.getStatus()
      .then(apiStatus => (this.apiStatus = apiStatus))
    },

    checkToken(){
      api.checkToken()
      .then(tokenStatus =>(this.tokenStatus = tokenStatus))
      .catch(err =>(
        this.tokenStatus = {
          status: err.status,
          statusText:err.statusText
        }
      ))
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">



.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>




