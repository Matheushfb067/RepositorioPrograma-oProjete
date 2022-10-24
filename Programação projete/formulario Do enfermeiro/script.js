function LeFC() {
    const Http = new XMLHttpRequest();
    
    const token = "BBFF-e2NB1h8dOcEao8fnoZiOVOkAVvuS16";    //Token do usuário no Ubidots
    var url = "https://industrial.api.ubidots.com/api/v1.6/devices/sops/freq/lv";
    
    
    var dado = ''; //grupo20 é a variável criada no device do Ubidots
  
      Http.open("GET", url);                             //Para enviar usa-se o POST do HTTP
      Http.setRequestHeader("X-Auth-Token", token);       //Autenticação no cabeçalho (header)
      Http.setRequestHeader("Content-Type", "application/json");  //Tipo de conteúdo enviado é JSON!
      Http.send(dado)                                     //Envia a requisição POST
  
      Http.onreadystatechange = function() {              //Vverifica o status do envio
        if (Http.readyState == XMLHttpRequest.DONE)       //Pronto?
        {
          console.log(Http.responseText);               //Mostra no console a resposta
          var resposta = Http.responseText;
          if (resposta.includes("201"))                  //Resposta tem o texto 201? Sim: Ubidots aceitou dado
          {

            document.getElementById("fc").innerHTML = resposta;
          }
          else {
            document.getElementById("fc").innerHTML = resposta;
          }
        }
      }
    

  }

  function LeSpO2() {
    const Http = new XMLHttpRequest();
    
    const token = "BBFF-e2NB1h8dOcEao8fnoZiOVOkAVvuS16";    //Token do usuário no Ubidots
    var url = "https://industrial.api.ubidots.com/api/v1.6/devices/sops/oxi/lv";
    
    
    var dado = ''; //grupo20 é a variável criada no device do Ubidots
  
      Http.open("GET", url);                             //Para enviar usa-se o POST do HTTP
      Http.setRequestHeader("X-Auth-Token", token);       //Autenticação no cabeçalho (header)
      Http.setRequestHeader("Content-Type", "application/json");  //Tipo de conteúdo enviado é JSON!
      Http.send(dado)                                     //Envia a requisição POST
  
      Http.onreadystatechange = function() {              //Vverifica o status do envio
        if (Http.readyState == XMLHttpRequest.DONE)       //Pronto?
        {
          console.log(Http.responseText);               //Mostra no console a resposta
          var resposta = Http.responseText;
          if (resposta.includes("201"))                  //Resposta tem o texto 201? Sim: Ubidots aceitou dado
          {

            document.getElementById("oxi").innerHTML = resposta;
          }
          else {
            document.getElementById("oxi").innerHTML = resposta;
          }
        }
      }

      function Letemp() {
        const Http = new XMLHttpRequest();
        
        const token = "BBFF-e2NB1h8dOcEao8fnoZiOVOkAVvuS16";    //Token do usuário no Ubidots
        var url = "https://industrial.api.ubidots.com/api/v1.6/devices/sops/temp/lv";
        
        
        var dado = ''; //grupo20 é a variável criada no device do Ubidots
      
          Http.open("GET", url);                             //Para enviar usa-se o POST do HTTP
          Http.setRequestHeader("X-Auth-Token", token);       //Autenticação no cabeçalho (header)
          Http.setRequestHeader("Content-Type", "application/json");  //Tipo de conteúdo enviado é JSON!
          Http.send(dado)                                     //Envia a requisição POST
      
          Http.onreadystatechange = function() {              //Vverifica o status do envio
            if (Http.readyState == XMLHttpRequest.DONE)       //Pronto?
            {
              console.log(Http.responseText);               //Mostra no console a resposta
              var resposta = Http.responseText;
              if (resposta.includes("201"))                  //Resposta tem o texto 201? Sim: Ubidots aceitou dado
              {
    
                document.getElementById("temp").innerHTML = resposta;
              }
              else {
                document.getElementById("temp").innerHTML = resposta;
              }
            }
          }
        
    
      }
    

  }