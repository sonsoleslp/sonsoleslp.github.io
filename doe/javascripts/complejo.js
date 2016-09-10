// Números complejos


	objeto = function(complejo){
		var objeto = {real:complejo.real, imaginario:complejo.imaginario};

		return objeto;
	}

	complejo = function(real,imaginario){
		var numero = {real:real, imaginario:imaginario};
		
		return numero;
	};



	suma = function(c1,c2) {
		var resultado={};
		
		
		resultado.real= c1.real + c2.real;
		resultado.imaginario=c1.imaginario + c2.imaginario;
			

		return resultado;
	}

	resta = function(c1,c2) {
		var resultado={};
		
				
		
		resultado.real=c1.real - c2.real;
		resultado.imaginario=c1.imaginario - c2.imaginario;
					

		return resultado;
	}

	multiplicacion = function(c1,c2) {
		var resultado={};

		resultado.real= c1.real*c2.real - c1.imaginario*c2.imaginario;
		resultado.imaginario= c1.real*c2.imaginario + c1.imaginario*c2.real;


		return resultado;
	}

	division = function(c1,c2) {
		//c1 dividendo, c2 divisor
		var resultado={};
		
		var modulo = c2.real*c2.real + c2.imaginario*c2.imaginario;
		var modulo1 = c1.real*c1.real + c1.imaginario*c1.imaginario;
		if(modulo==0 && modulo1 ==0) return 1;
		if(modulo==0) {
			resultado= {real:100000000,imaginario:100000000};
		}else{
			
			resultado.real= (c1.real*c2.real + c1.imaginario*c2.imaginario)/modulo;
			resultado.imaginario= (c1.imaginario*c2.real - c1.real*c2.imaginario)/modulo;
		}
		return resultado;
	}

	modulo = function(complejo) {

		return Math.sqrt(complejo.real*complejo.real + complejo.imaginario*complejo.imaginario);
	}


	fase = function(complejo) {

		var r = parseFloat(complejo.real);
		if (Math.abs(r) < 0.001) {r = 0;}
			
		

		var i = parseFloat(complejo.imaginario);
		if (Math.abs(i) < 0.001){i = 0;} 

		var atan = parseFloat(Math.atan2(i, r));
		var fase = ((-1) * atan);
		if (fase === -0) fase = 0;
		return fase;
	}

	complejox = function(modulo, fase) {
		var resultado = {};
		resultado.real = modulo*Math.cos(fase);
		resultado.imaginario = modulo*Math.sin(fase);
		return resultado;
	}


	imprimir = function(complejo){
		var res = "";
		var real = 0; var imaginario = 0;

		var numero = complejo;

		if (Math.abs(numero.real) < 0.0001){ numero.real = 0;}
		if (Math.abs(numero.imaginario) < 0.0001){ numero.imaginario = 0;}

		var r = numero.real.toFixed(2);
		var i = numero.imaginario.toFixed(2);

		if (numero.imaginario == 0)
			res = r ;
		else if (numero.real == 0)
			res = "j " + i ;

		else if (numero.imaginario == 0 && numero.real == 0)
			res = "" + 0 ;
		else {
			res = r;

			if (numero.imaginario < 0)
				res += "\n- j " + -i ;	}
		if (numero.imaginario > 0)
			res += "\n+ j " + i ;
		return res;
	}

