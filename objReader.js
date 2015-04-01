function loadObjFile(data) {

	// TO DO:   (i) Parse OBJ file and extract vertices and normal vectors
	// TO DO:  (ii) If normal vectors are not in the file, you will need to calculate them
	// TO DO: (iii) Return vertices and normals and any associated information you might find useful
	if(data == null) {
		document.write('data nulo!');
		return false;
	}

	var linha = data.split('\n');
	var normais = vertices = [];
	var normaisFace = new Array();
	var verticesFace = new Array();

	for(var i = 0; i < linha.length; i++)
	{
		var campos = [];
		campos = linha[i].split(' ');

		switch(String(campos[0])) {
			case "v": 
				vertices.push([campos[1], campos[2], campos[3]]);
				//document.write('Vertices: ('+campos[1]+','+campos[2]+','+campos[3]+')<br>'); 
				break;
			case "vn":
				normais.push([campos[1], campos[2], campos[3]]); 
				//document.write('Vetores Normais: ('+campos[1]+','+campos[2]+','+campos[3]+')<br>'); 
				break;
			case "f":

				var components = [];

				// vou assumir 3 campos por enquanto, ou seja, triangulo
				for(var j = 1; j < campos.length; j++) { 
					components = campos[j].split('//');
					verticesFace.push(components[0]);
					normaisFace.push(components[1]);
					//document.write(String(components[0]) +', ' + String(components[1]) + '<br>');
				}

				verticesFace.push(-1);
				normaisFace.push(-1);

				//document.write('Faces: ('+campos[1]+','+campos[2]+','+campos[3]+')<br>'); 
				break;

			default: break;		
		}	
	}

	for(var i = 0; i < vertices.length; i++) {
		document.write(vertices[i] + '<br>');
	}	
}

