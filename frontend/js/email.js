async function sendEmail() {
  var sub = document.querySelector("input[name=txtNome]");
  var msg = document.querySelector("textarea[name=txtMsg]");
  var rcvr = document.querySelector("input[name=txtEmail]");

  var message, subject, receiver;
  subject = sub.value;
  message = msg.value;
  receiver = rcvr.value;

  if (subject == "" || message == "" || receiver == "") {
    alert("Verifique se todos os campos estão preenchidos corretamente");
  } else {
    try {
      var result = await axios.post("http://15.228.10.74:6868/api/send/email", {
        destinatario: receiver,
        assunto: subject,
        msg: message,
      });

      if (result.status == 400) {
        alert("O email que você digitou não existe");
      } else if (result.status == 204) {
        alert("Verifique se você digitou o seu email");
      } else {
        alert("Seu email foi enviado com sucesso");
      }
    } catch (err) {
      alert("Não foi possível enviar o seu email");
      console.warn(err);
    }
  }
}
