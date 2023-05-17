$(document).ready(function(){

    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight");
                } else {
                label.removeClass("highlight");
                }
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight");
            }
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });

});

function toggleConfidentialForm() {
    var checkBox = document.getElementById("terceroCheckbox");
    var confidentialForm = document.getElementById("confidentialForm");

    if (checkBox.checked) {
        confidentialForm.style.display = "block";
    } else {
        confidentialForm.style.display = "none";
        }
    }

function enableSubmitButton() {
    var propietarioCheckbox = document.getElementById("propietarioCheckbox");
    var submitButton = document.getElementById("submitButton");

    if (propietarioCheckbox.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
        }
}
      
var valor, cadena ="", contador=0, estado=true;
const form = document.getElementById("FormContacto");
      
function validar(){
    estado=true;
    const expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    valor = document.getElementById("correo").value;
    if (!expresion.test(valor)){
        estado = false;
        document.getElementById("correo").value="";
        cadena+="Correo ";
    }
        valor = document.getElementById("telefono").value;
    if(!((valor.length == 10) && (!isNaN(valor)))){
        estado = false;
        document.getElementById("telefono").value="";
    if(cadena == ""){
        cadena+="Telefono ";
    }else{
        cadena+="y Telefono ";
        }
    }

    if(!estado){
        alert("Error validación - corrija "+cadena);
        //return false;
    }else{
        estado = true;
        contador++;
        valor= document.getElementById("Enviar");
        valor.type = "button";
        valor.click();
            
    }
}

function delay(n){
          return new Promise(function(resolve){
              setTimeout(resolve,n*1000);
          });
      }
      
async function desactivar() {
  if (estado == true && contador != 0) {
    const valor = document.getElementById("Enviar");
    valor.disabled = true;
    valor.value = "Enviando datos ..........";
    this.form.submit();
    await delay(100000);
  }
}