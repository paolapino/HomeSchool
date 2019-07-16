<template>
    <div class="row">
        <h1 class="title">
           ¿Como Funciona HomeSchool?
            <br>
            <small>Aprendiendo de verdad.....</small>
        </h1>
        <div class="col-sm-10 col-sm-offset-1">
         <div class="col-md-4 col-sm-6">
             <div class="card-container">
                <div class="card">
                 <!-- Primera cara-->
                    <div class="front">
                        <!--Fondo-->
                        <div class="cover">
                            <img src="@/assets/img/informacion/caballo_fondo.jpg"/>
                        </div>
                        <div class="user">
                            <img class="img-circle" src="@/assets/img/informacion/caballo.jpg"/>
                        </div>

                        
                        <div class="content">
                            <div class="main">
                                <h3 class="name">Motivación</h3>
                                <p class="profession">:)</p>
                                <p class="text-center">"Aumenta la motivación de tu hijo con nuestra plataforma te garantizamos que seras un padre muy feliz"</p>
                            </div>
                            <div class="footer">
                                <i class="fa fa-mail-forward"></i> Dame la vuelta.....
                            </div>
                        </div>
                 
                    </div> <!-- end front panel --><!-- Fin primera cara-->
                    <!--segunda cara-->
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">"Muchos niños ya estan utilizando esta novedosa plataforma  no te quedes atras!"</h5>
                        </div>
                        <div class="content">
                            <div class="main" >
                                <h4 class="text-center">Tareas que veremos</h4>
                                <p class="text-center">Tendremos ejercicios de matematicas que con juegos aprendrmeos mucho más</p>

                                <div class="stats-container">
                                    
                                </div>

                            </div>
                        </div>
                        <div class="footer">
                            <div class="social-links text-center">
                            </div>
                        </div>
                    </div>
                    <!--End segunda cara-->
                     <!-- end back panel -->
                </div> <!-- end card -->
            </div> <!-- end card-container -->
        </div> <!-- end col sm 3 -->
<!--         <div class="col-sm-1"></div> -->

        <div class="col-md-4 col-sm-6">
             <div class="card-container">
                <div class="card">
                    <div class="front">
                        <div class="cover">
                            <img src="@/assets/img/informacion/rotating_card_thumb.png"/>
                        </div>
                        <div class="user">
                            <img class="img-circle" src="@/assets/img/informacion/rotating_card_profile2.png"/>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h3 class="name">Andrew Mike</h3>
                                <p class="profession">Web Developer</p>
                                <p class="text-center">"Lamborghini Mercy <br>Your chick she so thirsty <br>I'm in that two seat Lambo"</p>
                            </div>
                            <div class="footer">
                                <button class="btn btn-simple" onclick="rotateCard(this)">
                                    <i class="fa fa-mail-forward"></i> Manual Rotation
                                </button>
                            </div>
                        </div>
                    </div> <!-- end front panel -->
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h4 class="text-center">Job Description</h4>
                                <p class="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                                <div class="stats-container">
                               
                                </div>

                            </div>
                        </div>
                        <div class="footer">
                            <button class="btn btn-simple" rel="tooltip" title="Flip Card" onclick="rotateCard(this)">
                                <i class="fa fa-reply"></i> Back
                            </button>
                            <div class="social-links text-center">
                                
                            </div>
                        </div>
                    </div> <!-- end back panel -->
                </div> <!-- end card -->
            </div> <!-- end card-container -->
        </div> <!-- end col sm 3 -->
<!--         <div class="col-sm-1"></div> -->
        <div class="col-md-4 col-sm-6">
            <div class="card-container">
                <div class="card">
                    <div class="front">
                        <div class="cover">
                            <img src="@/assets/img/informacion/rotating_card_thumb3.png"/>
                        </div>
                        <div class="user">
                            <img class="img-circle" src="@/assets/img/informacion/rotating_card_profile.png"/>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h3 class="name">Inna Corman</h3>
                                <p class="profession">Product Manager</p>

                                <p class="text-center">"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p>
                            </div>
                            <div class="footer">
                                <div class="rating">
                                    <i class="fa fa-mail-forward"></i> Auto Rotation
                                </div>
                            </div>
                        </div>
                    </div> <!-- end front panel -->
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h4 class="text-center">Job Description</h4>
                                <p class="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                                <div class="stats-container">
                                    
                                </div>

                            </div>
                        </div>
                        <div class="footer">
                            <div class="social-links text-center">
                                
                            </div>
                        </div>
                    </div> <!-- end back panel -->
                </div> <!-- end card -->
            </div> <!-- end card-container -->
        </div> <!-- end col-sm-3 -->
        </div> <!-- end col-sm-10 -->
    </div> <!-- end row -->
    <!--Termino Tarjetas-->



</template>
