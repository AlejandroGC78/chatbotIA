var audio = new Audio('assets/sentmessage.mp3');

var CroquisString = "<img src='images/Croquis_Tecnm.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Croquis Campus I y II.pdf</label></div><a href='assets/Croquis_de_Campus_I_y_II.pdf' download='Croquis_de_Campus_I_y_II.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var DatosString = "<img src='images/reticula.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Reticula Rev2022 Ciencia de Datos.pdf</label></div><a href='assets/Reticula_Rev2022_CienciaDeDatos.pdf' download='Reticula_Rev2022_CienciaDeDatos.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var industria_4_0String = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Reticula Rev2022 Industria 4.0.pdf</label></div><a href='assets/Reticula_Rev2022_Industria40.pdf' download='Reticula_Rev2022_Industria40.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var calendarioString = "<img src='images/calendario.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Calendario Ene Jun 2023.pdf</label></div><a href='assets/Calendario Ene Jun 2023.pdf' download='Calendario Ene Jun 2023.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var adminString = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Reticula de Especialidad Humano.pdf</label></div><a href='assets/Reticula de Especialidad Humano.pdf' download='Reticula de Especialidad Humano.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var alimentosString = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>ALIMENTOS-A-D-2022.pdf</label></div><a href='assets/ALIMENTOS-A-D-2022.pdf' download='ALIMENTOS-A-D-2022.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var biotecnlogiaString = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>BIOTECNOLOGIA-A-D-2022.pdf</label></div><a href='assets/BIOTECNOLOGIA-A-D-2022.pdf' download='BIOTECNOLOGIA-A-D-2022.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var electronicaString = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>RETICULA-IELE-AIN-2021-01.pdf</label></div><a href='assets/RETICULA-IELE-AIN-2021-01.pdf' download='RETICULA-IELE-AIN-2021-01.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var gestionString = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>RETICULA_ESPECIALIDAD-CAPITAL-HUMANO-YGESTION-DIGITAL_IGE.pdf</label></div><a href='assets/RETICULA_ESPECIALIDAD-CAPITAL-HUMANO-Y-GESTION-DIGITAL_IGE.pdf' download='RETICULA_ESPECIALIDAD-CAPITAL-HUMANO-YGESTION-DIGITAL_IGE.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var gestion1String = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>RETICULA_ESPECIALIDAD-INTELIGENCIA-ORGANIZACIONAL_IGE.pdf</label></div><a href='assets/RETICULA_ESPECIALIDAD-INTELIGENCIA-ORGANIZACIONAL_IGE.pdf' download='RETICULA_ESPECIALIDAD-INTELIGENCIA-ORGANIZACIONAL_IGE.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var industrialString = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>IINE-LCS-2021-02.pdf</label></div><a href='assets/IINE-LCS-2021-02.pdf' download='IINE-LCS-2021-02.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var industrial2String = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>INE-MEN-2021-01.pdf</label></div><a href='assets/INE-MEN-2021-01.pdf' download='INE-MEN-2021-01.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var reglaString = "<img src='images/reticula2.png' class='croquistecnm'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Reglamento_de_Estudiantes_del_TecNM.pdf</label></div><a href='assets/Reglamento_de_Estudiantes_del_TecNM.pdf' download='Reglamento_de_Estudiantes_del_TecNM.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Visto por última vez hoy a " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Escribiendo...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hola mi nombre LinceBot 👋🏻,<br><br> Soy estudiante de ingeniería en Sistemas Computacionales  del <span class='bold'><a class='alink'>Tecnológico Nacional de México en Celaya</a>.</span><br>Estoy ansioso de poderte ayudar sobre lo que te puede ofrecer el TecNM en Celaya en la diferentes Ingenierías que tiene. <br> <span class='bold'></span><br>Enviar <span class='bold'>'ayuda' o ‘help’ </span> para saber más sobre mí.<br>");
            }, 2000);
            break;
        case "inicio":
                setTimeout(() => {
                    sendTextMessage("Hola mi nombre LinceBot 👋🏻,<br><br> Soy estudiante de ingeniería en Sistemas Computacionales  del <span class='bold'><a class='alink'>Tecnológico Nacional de México en Celaya</a>.</span><br>Estoy ansioso de poderte ayudar sobre lo que te puede ofrecer el TecNM en Celaya en la diferentes Ingenierías que tiene. <br> <span class='bold'></span><br>Enviar <span class='bold'>'ayuda' o ‘help’ </span> para saber más sobre mí.<br>");
                }, 2000);
                break;
        
        
        case "ayuda":
        case "help":
            sendTextMessage("<span class='sk'>Enviar palabra clave para obtener lo que quieres saber sobre mí...<br>e.g<br><span class='bold'>'inicio'</span><br><span class='bold'>'Croquis'</span><br><span class='bold'>'sii'</span><br><span class='bold'>'tecnm'</span><br><span class='bold'>'sistemas'</span><br><span class='bold'>'clear'</span> <br>");
            break;
        case "mapa":
        case "guia":
        case "croquis":
        case "me puedes dar un croquis":
            sendTextMessage(CroquisString);
            break;
        
            case "sistemas":
                sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
                sendTextMessage(DatosString);
                sendTextMessage(industria_4_0String);
                break;
            case "sistemas":
        case "ciencia de datos":
        case "me puedes dar la reticula de ciencia de datos":
            sendTextMessage(DatosString);
            break;
    
            case "sistemas":
                case "industria":
                case "reticula de sistemas":
                case "me puedes dar la reticula de industria":
                    sendTextMessage(industria_4_0String);
        break;
        case "reticula de sistemas":
            sendTextMessage(DatosString);
            sendTextMessage(industria_4_0String);

        break;
        case "sii":
            sendTextMessage("El SII del Tecnológico Nacional se refiere al Sistema de Información Integral (SII) utilizado por el Tecnológico Nacional de México (TecNM).<a target='_blank' href='https://sii.itcelaya.edu.mx/sii/index.php?r=cruge/ui/login'> SII</a>");
            sendTextMessage("El SII es una plataforma informática desarrollada para gestionar y administrar diversos aspectos académicos y administrativos del TecNM. <br>Algunas de las funcionalidades comunes del SII del TecNM pueden incluir:<br>");
            sendTextMessage("1- Inscripción y reinscripción de estudiantes. <br>");
            sendTextMessage("2- Consulta de horarios y calificaciones.<br>");
            sendTextMessage("3- Gestión de trámites administrativos, como solicitud de constancias y certificados.<br>");
            sendTextMessage("4- Comunicación entre estudiantes y profesores a través de mensajes internos.<br>");
            sendTextMessage("5- Acceso a recursos educativos y materiales de estudio en línea.<br>");
            break;
        case "calendario":
            sendTextMessage(calendarioString);
            break;
        case "tecnm":
            sendTextMessage("El Tecnológico Nacional de México (TecNM) es un sistema de instituciones educativas de nivel superior en México<br><br>Celaya, una ciudad ubicada en el estado de Guanajuato, cuenta con una unidad del TecNM conocida como el Instituto Tecnológico de Celaya (ITC).<br><br><br><br>");
            break;

        
        case "clear":
            clearChat();
            break;
        case "limpiar":
                clearChat();
                break;
        case "hora":
        case "time":
            var date = new Date();
            sendTextMessage("Hora actual es " + date.getHours() + ":" + date.getMinutes());
            break;
        case "dia":
        case "date":
            var date = new Date();
            sendTextMessage("La fecha actual es " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "hai":
            sendTextMessage("Hola soy LinceBot 👋🏻");
            sendTextMessage("<span class='sk'>Envíame una palabra clave para obtener lo que quieres saber sobre mí...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'Croquis'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "buenos tardes":
        case "buenos dias":
        case "buenas":
        case "hola":
        case "hello":
            sendTextMessage("Hola soy LinceBot👋🏻");
            sendTextMessage("<span class='sk'>Envíame una palabra clave para obtener lo que quieres saber sobre mí...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hi":
            sendTextMessage("Hola soy LinceBot 👋🏻");
            sendTextMessage("<span class='sk'>Envíame una palabra clave para obtener lo que quieres saber sobre mí...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "ey":
        case "hey":
            sendTextMessage("Hola soy LinceBot👋🏻");
            sendTextMessage("<span class='sk'>Envíame una palabra clave para obtener lo que quieres saber sobre mí...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "pagina":
        case "pagina web":
        case "web":
        case "website":
            sendTextMessage("Puedes consultar mi sitio web aquí <a target='_blank' href='https://celaya.tecnm.mx/'>Pagina del TecNM en Celaya</a>");
            break;
        
        case "departamento":
        case "servicio":
        case "servicios":
        case "departamentos":
            sendTextMessage("Los departamentos que tiene el <span class='bold'><a class='alink'>Tecnológico Nacional de México en Celaya</a>.</span>");
            sendTextMessage("1- Departamento de Licenciatura en Administración  <br>");
            sendTextMessage("2- Departamento de Ingeniería en Gestión Empresarial <br>");
            sendTextMessage("3- Departamento de Ingeniería en Sistemas Computacionales <br>");
            sendTextMessage("4- Departamento de Ingeniería en Mecatrónica <br>");
            sendTextMessage("5- Departamento de Ingeniería en Electrónica <br>");
            sendTextMessage("6- Departamento de Ingeniería en Mecánica <br>");
            sendTextMessage("7- Departamento de Ingeniería en Ambiental <br>");
            sendTextMessage("8- Departamento de Ingeniería en Industrial<br>");
            sendTextMessage("9- Departamento de Ingeniería en Química<br>");
            sendTextMessage("10- Departamento de licenciatura en Administración<br>");
            sendTextMessage("11- Departamento de Ingeniería en Bioquímica<br>");
            sendTextMessage("12- Centro de Investigacion e Innovacion Tecnologica A.C.<br>");
            sendTextMessage("12- Departamento de Gestión Tecnológica y Vinculación <br>");
            sendTextMessage("12- Biblioteca Campus 1<br>");
            sendTextMessage("12- Biblioteca Campus 2<br>");
            

        break;

        case "servicios de admin":
        case "licenciatura en administracion":
        case "lic admin":
        case"administracion":
        case "servicios administracion":
            sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        breaK;

        case "reticula de administracion":
            sendTextMessage(adminString);
        break;

        case "reticula de bioquimica":
        sendTextMessage(alimentosString); 
        sendTextMessage(biotecnlogiaString); 
        break;
     
        case "servicios de empresarial":
        case "servicios de gestion":
        case "ingenieria en gestion empresarial":
        case "gestion":
        case "empresarial":
        case "gestion empresarial":
        case "servicios de gestion empresarial":
                sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
            breaK;
        case "reticula de gestion":
        sendTextMessage(gestionString);
        sendTextMessage(gestion1String);
        break;
        case "sistemas":
        case "servicios de sistemas":
        case "computacional":
        case "la mejor carrera":    
        case "servicios de sistemas computacionales":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;

        case "departamento de ingeniería en mecatrónica":
        case "servicios de mecatronica":
        case "mecatronica":
        case "ingenieria mecatronia":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;
        
        case "servicios de electronica":
        case "electronica":
        case "departamento de ingeniería en electrónica":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;

        case "reticula de electronica":
                sendTextMessage(electronicaString);
        break;

         case "servicios de mecanica":
        case "mecanica":
        case "mecánica":
        case "departamento de ingeniería mecánica":
        case "departamento de ingeniería mecanica":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;
        case "reglamento":
            sendTextMessage(reglaString);
            break;
        case "servicios de ambiental":
        case "ambiental":
        case "departamento de ingenieria ambiental":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;

        case "servicios de industrial":
        case "industrial":
        case "departamento de ingenieria industrial":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;

        case "reticula de industrial":
            sendTextMessage(industrialString);
            sendTextMessage(industrial2String);
        break;
        case "servicios de quimica":
        case "quimica":
        case "departamento de ingenieria quimica":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;

        case "servicios de administracion":
        case "administracion":
        case "departamento de de licenciatura en administracion":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;

        case "servicios de ingeniería en bioquimica":
        case "bioquimica":
        case "departamento de de ingenieria en bioquimica":
        sendTextMessage("Los servicios que ofrecen: Trámite de Residencias <br>Trámite para Créditos Complementarios<br>Cartas de Presentación para Empresas<br>Trámites de Titulación<br> Consultas de Maestros<br>");
        break;
         
        case "ingles":
        case "idiomas":
        case "ciit":
         case "centro de investigacion e innovacion tecnologica a.c":
        sendTextMessage("Los servicios que ofrecen: Constancias de Nivel de Idioma <br>Trámite de Liberación de Idioma (Que no tome el curso)<br>Fichas de Pago<br>Aplicación de Examen Toefl<br> Servicio de Traducción<br>");
        break;
            
        case "servicios escolares":
        case "vinculacion":
        case "Departamento de Gestión Tecnológica y Vinculación":
        sendTextMessage("Los servicios que ofrecen: Trámites de Servicio Social <br>Movilidad Internacional<br>Visitas Industriales<br>Bolsas de Trabajo<br>Residencias Profesionales<br>");
        break;
        
        case "servicios de biblioteca":
        case "bibliotecas":
        case "biblioteca":
    
            sendTextMessage("Los servicios que ofrecen las bibiliotecas campus 1 y 2: Préstamos de Libros <br>Darse de Alta en el Sistema de la Biblioteca<br>Préstamo de Cubículos<br>Información de Tesis Existentes<br>Salas de Lectura<br>Hemeroteca<br>");
            break;
    

        

        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Hello "+name+"! How are you?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Oye, no pude entenderte ... 😢 estoy aprendiendo <br>Envíe 'ayuda'o 'help' para saber más sobre el uso.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
