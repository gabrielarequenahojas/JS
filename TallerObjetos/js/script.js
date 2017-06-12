function Usuario(user, pass, name, id){
    
    this.username = user;
    this.pass = pass;
    this.name = name;
    this.id = id;
    this.status = 'offline';
    this.toString = function(){
        return this.username + ': ' + this.status;
    }
}

function Administrador(user, pass, name, id, telefono, email){
    
    Usuario.call(this, user, pass, name, id);
    this.telefono = telefono;
    this.e_mail = email;
       
}

function Votante(user, pass, name, id, cedula, voto){
    Usuario.call(this, user, pass, name, id);
    this.cedula = cedula;
    this.voto = voto;
    this.toString = function(){
        return this.username + ' - ' + this.pass + ' - ' + this.name + ' - ' + this.id + ' - ' + this.cedula + ' - ' + this.voto;   
} 
}
function Candidato(user, pass, name, id, partido, numero_lista){
  	
    Votante.call(this, user, pass, name, id);
    this.partido = partido;
    this.numero_lista = numero_lista;
       
}


var u1 = new Usuario('margareq', '1025', 'Gabriela Requena', '2008174258');
var u2 = new Usuario('geesdiaz', '1520', 'Estefania Diaz', '200813780');
var u3 = new Usuario('erequena', '1911', 'Elba Requena', '201407289');
var u4 = new Usuario('saysmont', '1941', 'Nathaly Montenegro', '200811185');
var u5 = new Usuario('mleon', '4755', 'Manuel Leon', '2008674559');

var a1 = new Administrador(u1, '0919568261', 'margareq@espol.edu.ec');

var Votantes = [];

Votantes[0] = new Votante(u1, '0924245664', '1');
Votantes[1] = new Votante(u2, '0924717854', '2');
Votantes[2] = new Votante(u3, '1202419559', '1');
Votantes[3] = new Votante(u4, '0913164582', '2');
Votantes[4] = new Votante(u5, '0902524541', '1');

var c1 = new Candidato(u2, 'Movimiento Centro Democrático Nacional', '1');
var c2 = new Candidato(u3, 'Movimiento Unidad popular', '2');




console.log(a1);

console.log(Votantes);
console.log(c1);
console.log(c2);
