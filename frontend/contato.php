<!doctype html>
<html lang="pt">
<head>
  <!-- Required meta tags -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" crossorigin="anonymous">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Chume Company</title>
  
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" type="text/javascript"> </script>      
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  
  <!-- <link rel="stylesheet" type="text/css" href="css/bootstrap-4.3.1-dist/css/bootstrap.css"/> -->
</head>



<body id="contato">
  <div id="loader" class="loader"></div>
  <div style="display: none;" class="wrapper">


    <div class="meu_nav">
     <nav class="navbar navbar-expand-lg navbar-light cor_navbar fixed-top">

      <a class="navbar-brand cor_link" href="index.php">
        <img src="img/logos/CCLogo2.png" width="30" height="30" class="d-inline-block align-top" alt="">
      </a>

      <a class="navbar-brand cor_link" href="../index.php" >Chume Company</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">


        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link cor_link" href="../index.php">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link cor_link" href="contato.php" tabindex="-1" >Contato</a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" checked>
            <label class="custom-control-label cor_link" for="customSwitch1">Light</label>
          </div>
        </form>

      </div>
    </nav>
  </div>

  <div class="minha_img_contato img-fluid">

    <div class="conteudo-img">
      <div class="txt1">
        <img class="img-fluid" src="img/logos/CCLogo.png">
        <h1 style="font-size:45pt;">Chume Company</h1>
      </div>
    </div>

  </div>

  <div class="container-md meu_container_contato cor_container anime">
    <div class="conteudo">
      <h3 class="txt3 cor_primaryText">Contate nossa empresa</h3>
      <div class="meu_form">

      <label for="exampleFormControlInput1" class="cor_secundaryText">Seu email*</label>
      <input type="email" class="txtEmail" id="txtEmail" name="txtEmail" placeholder="nome@exemplo.com">

      <label for="exampleFormControlInput2" class="cor_secundaryText">Seu nome completo*</label>
      <input type="text" class="txtNome" id="txtNome" name="txtNome" placeholder="Nome Exemplo">

      <label for="exampleFormControlTextarea1" class="cor_secundaryText">Sua mensagem</label>
      <textarea class="txtMsg" name="txtMsg" id="txtMsg" rows="6"></textarea>

      <button type="submit" class="btnEnviar" id="btnEnviar" onClick="sendEmail()" style="padding:1% 2% ;"><h3>Enviar</h3></button>

        <!-- <form>

          <div class="form-group">
            <label for="exampleFormControlInput1" class="cor_secundaryText">Seu email*</label>
            <input type="email"  class="form-control" id="exampleFormControlInput1" name="txtEmail" placeholder="nome@exemplo.com">
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput2" class="cor_secundaryText">Assunto*</label>
            <input type="text" class="form-control" name="txtNome" id="exampleFormControlInput2" placeholder="Assunto">
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="cor_secundaryText">Sua mensagem</label>
            <textarea class="form-control" name="txtMsg" id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>


          <div class="form-group" style="text-align: center; padding-top: 5%;">
            <a href="index.php"><button type="submit" class="btn btn-primary" id="btnEnviar" onClick="sendEmail()" style="padding:1% 2% ;"><h3>Enviar</h3></button></a>
          </div>
        </form> -->
      </div>          
    </div>
  </div>



  <footer class="page-footer font-small unique-color-dark cor_container">

    <div class="cor_navbar">
      <div class="container">

        <!-- Grid row-->
        <div class="row py-4 d-flex align-items-center">

          <!-- Grid column -->
          <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0 cor_primaryText">Siga-nos nas redes sociais!</h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-6 col-lg-7 text-center text-md-right">

            <!-- Facebook -->
            <a class="fb-ic" href="https://www.facebook.com/ChumeCompany/" target="_blanck">
              <i class="fab fa-facebook-f white-text mr-4"> </i>
            </a>

            <a class="ins-ic" href="https://www.instagram.com/chume_co/" target="_blanck">
              <i class="fab fa-instagram white-text"> </i>
            </a>

          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row-->

      </div>
    </div>

    <!-- Footer Links -->
    <div class="container text-center text-md-left mt-5">

      <!-- Grid row -->
      <div class="row mt-3">

        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <!-- Content -->
          <h6 class=" font-weight-bold cor_primaryText">Chume Company</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p class="cor_secundaryText"><i>"O cansaço físico, mesmo que suportado forçosamente, não prejudica o corpo, enquanto o conhecimento imposto à força não pode permanecer na alma por muito tempo."<br> Platão</i></p>

        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <!-- Links -->
          <h6 style="color:black;" class="text-uppercase font-weight-bold cor_primaryText">Produtos</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p>
            <a href="../index.php#meu_container_app">Quem Vai?</a>
          </p>
          <p>
            <a href="#!"></a>
          </p>
          <p>
            <a href="#!"></a>
          </p>
          <p>
            <a href="#!"></a>
          </p>

        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <!-- Links -->
          <h6 style="color:black;" class="text-uppercase font-weight-bold cor_primaryText">Links Úteis</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">

          <p>
            <a href="contato.php">Contato</a>
          </p>

        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <!-- Links -->
          <h6 style="color:black;" class="text-uppercase font-weight-bold cor_primaryText">Contato</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p class="cor_secundaryText">
            <i class="fas fa-home mr-3"></i>São Paulo, SP, Brasil</p>
            <p class="cor_secundaryText">
              <i class="fas fa-envelope mr-3"></i> companychume@gmail</p>
              <p class="cor_secundaryText">
                <i class="fas fa-phone mr-3"></i> +55 (11)94566-1905</p>
                <p class="cor_secundaryText">
                  <i class="fas fa-print mr-3"></i> +55 (11)94870-4288</p>

                </div>

              </div>
            </div>


          </footer>


        </div><!-- wrapper -->




        <!-- Optional JavaScript -->
        <script src="./js/email.js" ></script>
        <script type="text/javascript" src="js/main.js"></script>
      </body>
      </html>