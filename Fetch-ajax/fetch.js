'use strict'

var span = document.querySelector('span');
var span_2 = document.querySelector('#dos');
var span_3 = document.querySelector('#feo')
    getUsers()
        .then(data => data.json())
        .then((dato) => {
            var user = dato;
            userList(user);
            return getOnlyUser();
        })
    //  getOnlyUser() dos maneras validas de hacerlo 
        .then((data) => data.json())
        .then((dato) => {
           // console.log(dato.data);
            showUser(dato);
         
            return getInfo();
        })
        .then(data => {
            setTimeout(()=>{
                var mi_data = document.querySelector('#misdatos');
                span_3.style.display ="none";
                mi_data.append(data);
                console.log(data);
            },4000) 
        }).catch(error => console.log(error, "Este es el error"))

function getUsers() {
    return fetch('https://reqres.in/api/users?page=2'); // Es necesario que retorne el fetch
}

function getOnlyUser(){
    return fetch('https://reqres.in/api/users/2');
}

function userList(users) {
    setTimeout(()=>{ // Para que tenga una duración de 2 segundos para mostrar la data de los usarios
        //console.log(users.data); // Accedo a la data de los usuarios 
        //user.map()  por este otro metodo también se puede acceder a los valores de la data 
        for (let c in users.data) {
            //console.log(users.data[c].first_name, users.data[c].last_name); // Muestro en consola el nombre de cada uno de los usuarios
            var tag = document.querySelector('#nombre_usuarios')
            var parrf = document.createElement('p');
            parrf.append("Nombre y apellido del usuario: "+c+" - "+users.data[c].first_name+"  "+users.data[c].last_name);  // Escribe en pantalla el nombre y apellido de cada usuario 
            tag.append(parrf);
        }
        span.style.display = 'none';
    }, 2000)
}

function showUser(users) {
    setTimeout(()=>{ // Para que tenga una duración de 2 segundos para mostrar la data de los usarios
        // Accedo a la data de los usuarios 
        var user_1 = document.querySelector('#un_user');
        var parr = document.createElement('h3');
        var avatars = document.createElement('img');
        avatars.src = users.data.avatar;
        parr.append("Nombre de este único usuario : "+users.data.first_name+"  "+users.data.last_name);
        user_1.append(parr, avatars);
        span_2.style.display = 'none';

    }, 3000)
    
}

function getInfo() {

    var personas = {
        numero: 25,
        nombres: ["alan", "edu", "gregory"],
        pagina : 'https://www.youtube.com/'
    }   

    return new Promise((resolve, reject) =>{
        var personas_string = JSON.stringify(personas);

        if (typeof personas_string != 'string' || personas_string == "") return reject('error1-0-1');

        return resolve(personas_string);
    }) 
}