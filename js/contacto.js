var Fn = {
    // Valida el rut con cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
        rutCompleto = rutCompleto.replace("‐","-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        var tmp   = rutCompleto.split('-');
        var digv  = tmp[1]; 
        var rut   = tmp[0];
        if ( digv == 'K' ) digv = 'k' ;

        return (Fn.dv(rut) == digv );
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}


const form = document.getElementById('form');
const rut = document.getElementById('rut');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const telefono = document.getElementById('telefono');
const comuna = document.getElementById('comuna');
const ciudad = document.getElementById('ciudad');
const comentario = document.getElementById('comentario');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nombreValue = nombre.value.trim();
	const rutValue = rut.value.trim();
	const apellidoValue = apellido.value.trim();
	const telefonoValue = nombre.value.trim();
	const comunaValue = nombre.value.trim();
	const ciudadValue = nombre.value.trim();
	const comentarioValue = nombre.value.trim();
	const correoValue = correo.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el campo en blanco');
	} else {
		setSuccessFor(nombre);
	}

    if(rutValue === '') {
		setErrorFor(rut, 'No puede dejar el campo en blanco');
	} else {
		setSuccessFor(rut);
	}

    if(apellidoValue === '') {
		setErrorFor(apellido, 'No puede dejar el campo en blanco');
	} else {
		setSuccessFor(apellido);
	}

    if(telefonoValue === '') {
		setErrorFor(telefono, 'No puede dejar el campo en blanco');
	} else {
		setSuccessFor(telefono);
	}

    if(comunaValue === '') {
		setErrorFor(comuna, 'No puede dejar el campo en blanco');
	} else {
		setSuccessFor(comuna);
	}

    if(ciudadValue === '') {
		setErrorFor(ciudad, 'No puede dejar el campo en blanco');
	} else {
		setSuccessFor(ciudad);
	}

    if(comentarioValue === '') {
		setErrorFor(comentario, 'No puede dejar el campo en blanco');
	} else {
		setSuccessFor(comentario);
	}
	
	if(correoValue === '') {
		setErrorFor(correo, 'No puede dejar el correo en blanco');
	} else if (!iscorreo(correoValue)) {
		setErrorFor(correo, 'No ingreso un correo válido');
	} else {
		setSuccessFor(correo);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe estar en blanco.');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Repetir password no debe estar en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords no coinciden');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function iscorreo(correo) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}