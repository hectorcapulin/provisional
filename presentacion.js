var img = 0;
var version = 0;
var num_busqueda =0;
$(document).ready(function(){

	//Llenar productos
	//Llenar productos
	$('#menu_toggle').trigger('click');
	FotoFolio();

	$('.tag').tagsinput({
      allowDuplicates: false,
        itemValue: 'id',  
        itemText: 'label' 
    });
	
	llenarselect();

	Dropzone.options.myDropZone1 = {
	uploadMultiple: false,
    maxFilesize: 5,
    addRemoveLinks: true,
    dictResponseError: 'Server not Configured',
    acceptedFiles: ".jpg",
	dictDefaultMessage: "Click para subir.",

    init:function(){
	this.cleaningUp = false;
    var self = this;
	// configuracion delete
	  
   var removeButton = Dropzone.createElement("<div class='col-md-4 col-sm-4 col-xs-4'></div><div class='col-md-4 col-sm-4 col-xs-4'><span class='glyphicon glyphicon-trash' onclick='Bandera();'></span></div>");

    self.options.addRemoveLinks = true;
    self.options.dictRemoveFile = "<div class='col-md-4 col-sm-4 col-xs-4'></div><div class='col-md-4 col-sm-4 col-xs-4'><b><span class='glyphicon glyphicon-trash' onclick='Bandera();'></span> </b></div>";
	
	self.on("addedfile", function (file) {
	
    console.log('new file added ', file);
	var nombre_= file.name;
	 
	url = ''+urlBuscar+''+nombre_;
	url= ""+url+"";
	var a = document.createElement('a');
	$(file.previewElement).find(".dz-image img").attr("src", url);
	$(file.previewElement).find(".dz-image img").attr("width", '100%');

	$(file.previewElement).find(".dz-image img").attr("align", "center");
	
				
    });
	 
    self.on("success", function (file,responseText) {
	var nombre_= file.name;
		
    console.log('upload started', file);
	$('.meter').show();
	var a = document.createElement('a');
	file.previewTemplate.appendChild(a); 
	
    });
	  
	// Send file starts
    self.on("sending", function (file) {
    console.log('upload started', file);
    $('.meter').show();
    });
	  
	self.on("error", function () {
    alert("Error al subir archivo");
    $('.meter').show();
    });
      
	// File upload Progress
    self.on("totaluploadprogress", function (progress) {
    console.log("progress ", progress);
    $('.roller').width(progress + '%');
    });

    self.on("queuecomplete", function (progress) {
    $('.meter').delay(999).slideUp(999);
    });
      
	// On removing file
    self.on("removedfile", function (file) {
    console.log(file.name);
	var clave = $('#modifinput').val();
	var nombre_= file.name;
	var carpeta= clave;
	
	if (bandera==1)
	{
		$.ajax({
				url:  "delete.php",
				type: "POST",
				data: {
					'nombre': nombre_,
					'carpeta': carpeta					
					},
				success:function(response)
				{
					var valores = (response);
					if(valores == "Correcto")
					{
						crearNot('Realizado','El archivo se eliminó correctamente.','success','bootstrap3');	
						img = img - 1;
					}
					else if (valores == "Incorrecto")
					{
						crearNot("Error","Proceso Incorrecto.","info","bootstrap3","dark");		
					}
				},
				error:function ()
				{
					crearNot("Error","Proceso Incorrecto. ","info","bootstrap3","dark");	
				}
			});
		 bandera = 0;
	}
			
	});
	
	document.querySelector("#LimpiaDrop").addEventListener("click",function() {
    self.removeAllFiles();
    });
	  
      	  
    }
  };
  
});

//mostrar seccion Etiqueta.
$('#checketiqueta').on('ifChanged', function (event) { 
$(event.target).trigger('change'); 
});

$("#checketiqueta").on( 'change', function() {
    if( $(this).is(':checked') ) {
        $("#etiquetaconf").css('display','block');
    } else {
        $("#etiquetaconf").css('display','none');
    }
});


//texto default para selectpicker
$(".selectpicker").selectpicker({
    noneSelectedText : 'Seleccionar opción' 
});

var esp_id;
var array_especial;

//evento on change multiple para etiquetas y varios
$('.selectpicker.especial').on('changed.bs.select', function (e) { 
	array_especial  = [];
	//obtener id del div y mostrarlo
	esp_id= e.target.id;
	
	//obtener el valor de la seleccion 
	var texto;
	var valor;
	var cantidad;
	$('#'+esp_id+' option:selected').each(function(){ 
		texto= ($(this).text()); 
		valor =($(this).val()); 
		
		$('.selectpicker').removeClass('open');
		$('.selectpicker').selectpicker('refresh');
		//obtener la unidad.
		var nombredeunidad = ObtenerNombre(valor);
		
		$("#textomodal").empty();
		$("#textomodal").append("¿Cuantos "+nombredeunidad+" de "+texto+" lleva la presentación? ");
		//mostrar modal
		$('#asignacantidad').modal('show'); 
		
		$('.dropdown-menu').removeClass('open');
		$('.bs-searchbox').css("display","none");	
		$('.dropdown-menu').css("border","0px");
		
    }); 
	
	//guardar en arreglos los valores:
	array_especial.push({"valor":valor,"texto":texto});
		
	// mostrar el div de la seleccion
	$('#div'+esp_id).css('display','block'); 
});

function ObtenerNombre(cve)
{
	var nombreunidad = $.ajax({
					type: "POST",
					url: "clases/presentacion.php",
					data:{
					'metodo':"UnidadNombre",
					'cve': cve
					},
					dataType:"json",
					async: false
					}).responseText;
									
	nombreunidad =$.parseJSON(nombreunidad);	
	nombreunidad = nombreunidad[0]['Nombre'];
	
	var ult_car= nombreunidad.charAt(nombreunidad.length-1);
	
	if(ult_car == 'S')
	{}	else
	{nombreunidad = nombreunidad+'S'; }
	return nombreunidad;
}

$('#asignacantidad').on('shown.bs.modal', function () {
    $('#cantidad').focus();
})


$('.multiple').on('hidden.bs.select', function (e) {
	var idselectmultiple= e.target.id;

	// mostrar el div de la seleccion
	$('#div'+idselectmultiple).css('display','block'); 
		
	//obtener el valor de la seleccion 
	var seleccionmultiple = $('#'+idselectmultiple).val();
		
	var datostxt = new Array(); 
	var datosvalue = new Array(); 
	
	$('#'+idselectmultiple+' option:selected').each(function(){ 
		datostxt.push($(this).text()); 
		datosvalue.push($(this).val()); 
	}); 
	
	for(x=0; x < datosvalue.length; x++)
	{
		$('#tag'+idselectmultiple).tagsinput('add', { id: datosvalue[x], label:datostxt[x] });
	}
});

var idselect;
var seleccion;
var selecciontexto;

//al cambiar selecpicker insumo
$('.selectpicker.insumo').on('changed.bs.select', function (e) { 
	//obtener id del div y mostrarlo
	idselect= e.target.id;
	
	//obtener el valor de la seleccion 
	seleccion = $('#'+idselect).val();
	selecciontexto = $('#'+idselect+" option:selected").text();
	
	var nombredeunidad = ObtenerNombre(seleccion);
	//asignar label a modal	
	$("#textomodal").empty();
	$("#textomodal").append("¿Cuantos "+nombredeunidad+" de "+selecciontexto+" lleva la presentación? ");
	//mostrar modal
	
	$('#asignacantidad').modal('show'); 
	
	// mostrar el div de la seleccion
	$('#div'+idselect).css('display','block'); 
});
 
 
 function CreaEtiqueta()
 {
	if(esp_id=='varios'||esp_id=='etiqueta')
	{	
		for(x=0; x < array_especial.length; x++)
		{
			var cantidad = $('#cantidad').val();
			var textomostrado = (cantidad+" pzas. : " +array_especial[x].texto).substring(0,38);
			//var  label = (array_especial[x].texto).substring(0,38);
			
			$('#tag'+esp_id).tagsinput('add', { id: array_especial[x].valor, label: textomostrado, cantidad: cantidad  });
			$('.dropdown-menu').addClass('open');
			$('.bs-searchbox').css("display","block");
			$('.dropdown-menu').css("border","1px solid");
			$('.dropdown-menu').css("border-color","#D9DEE4");
			    
			$('#asignacantidad').modal('hide'); 
			$('#cantidad').val('');	
			
		}
		esp_id='';
		
	}
	else
	{
		if(idselect=='tarima'||idselect=='caja'||idselect=='plu'||idselect=='bolsa'||idselect=='inserto'||idselect=='clam')
		{
			$('#tag'+idselect).tagsinput('removeAll');
		}
		var cantidad = $('#cantidad').val();
		var  label = selecciontexto;
		var textomostrado = (cantidad+" pzas. : "+label).substring(0,38);
		
		//crear tag con lo seleccionado
		$('#tag'+idselect).tagsinput('add', { id: seleccion, label:textomostrado ,cantidad: cantidad });
		//ocultar modal y limpiar cantidad
		$('#asignacantidad').modal('hide'); 
		$('#cantidad').val('');	
		
	}
   

//pensaba en refrescar el selectpicker
  
}
   
function CambiaPestaña(cve,prov)
{
	$('#home-tab a[href="#home-tab"]').tab('show');
	$('#home-tab').tab('show');
	//this$('#catli').removeClass('active');
	//$("a[href='#tab_content2']").removeAttr("href");
	//this$("a[href='#tab_content2']").attr('href', '').css({ 'pointer-events' : 'none','cursor': 'not-allowed'});
	num_busqueda = num_busqueda+1;
	
	//alert('recibi cve'+cve);
	//limpiar los tags
	$('#tagcolor').tagsinput('removeAll');
	$('#tagcalidad').tagsinput('removeAll');
	$('#tagtamano').tagsinput('removeAll');
	$('#tagtarima').tagsinput('removeAll');
	$('#tagplu').tagsinput('removeAll');
	$('#tagbolsa').tagsinput('removeAll');
	$('#tagcaja').tagsinput('removeAll');
	$('#taginserto').tagsinput('removeAll');
	$('#tagclam').tagsinput('removeAll');
	$('#tagetiqueta').tagsinput('removeAll');
	$('#tagvarios').tagsinput('removeAll');
	
	//limpiarDropzone
	$("#LimpiaDrop").trigger("click");
	$('#modifinput').val(cve);
	
	
	$('.formulario').val('');
	$('.formulario').selectpicker('refresh');
	$('#num_cajas').val('');
	
	
	$('#divactualiza').css('display','block');
	$('#divguarda').css('display','none');
	
	//cargar datos generales
	var datospresent = $.ajax({
						type: "POST",
						url: "clases/presentacion.php",
						data:{
						'metodo':"datospresent",
						'cve': cve
						},
						dataType:"json",
						async: false
						}).responseText;
									
	datospresent =$.parseJSON(datospresent);	

	
	//cargamos informacion
	$('#producto').val(datospresent[0]['id_producto']);
	$('#cliente').val(prov);
	$("#producto").attr('disabled',true);
	$("#cliente").attr('disabled',true);
	
	$('#nombre').val(datospresent[0]['Nombre']);
	$('#num_cajas').val(datospresent[0]['cajas']);
	$('#nombrecorto').val(datospresent[0]['nombre_grafica']);
	$('#linea1').val(datospresent[0]['etiketaL1']);
	$('#linea2').val(datospresent[0]['etiketaL2']);
	$('#productoinput').val(datospresent[0]['producto']);
	$('#presentacion').val(datospresent[0]['presentacion']);
	$('#descripcion').val(datospresent[0]['descripcion']);
	$('#origen').val(datospresent[0]['origen']);
	$('#extras').val(datospresent[0]['extras']);
	$('#costo').val(datospresent[0]['Costo']);
	$('#precionacional').val(datospresent[0]['Precio_Venta']);
	$('#precioexp').val(datospresent[0]['Precio_VentaExp']);
	$('#peso').val(datospresent[0]['Peso']);
	$('#codigoiso').val(datospresent[0]['Codigo_iso']);
	$('#codigofecha').val(datospresent[0]['codigofecha']);
	//actualizar selectpicker							
	$('.formulario').selectpicker('refresh');
	
	$('#producto').trigger( "change" );
	//ocultar div
	$('.divtag').css('display','none'); 
	//limpiar de seleccion selects
	$('.insumo option').attr("selected",false);
	$('.insumo').selectpicker('refresh');
	$('.especial option').attr("selected",false);
	$('.especial').selectpicker('refresh');
		
	//cargar datos insumo
	var datosinsumo = $.ajax({
						type: "POST",
						url: "clases/presentacion.php",
						data:{
						'metodo':"datosinsumo",
						'cve': cve
						},
						dataType:"json",
						async: false
						}).responseText;
									
	datosinsumo =$.parseJSON(datosinsumo);	
	
	for(x=0; x < datosinsumo.length; x++)
	{ 
		var id = '';
		if (datosinsumo[x]['CatAlmacen']==1)
			{ id= 'caja';				}
			else if(datosinsumo[x]['CatAlmacen']==2)
			{ id= 'tarima';				}
			else if(datosinsumo[x]['CatAlmacen']==3)
			{ id= 'plu';				}
			else if(datosinsumo[x]['CatAlmacen']==4)
			{ id='inserto';				}
			else if(datosinsumo[x]['CatAlmacen']==5)
			{ id= 'clam';				}
			else if(datosinsumo[x]['CatAlmacen']==6)
			{ id= 'bolsa';				}
			else if(datosinsumo[x]['CatAlmacen']==7)
			{ id= 'etiqueta';			}
			else if(datosinsumo[x]['CatAlmacen']==8)
			{ id= 'varios';				}
	
		
		var cantidad = datosinsumo[x]['cantidad'];
		var textomostrado = (cantidad+" pzas. : " + datosinsumo[x]['Nombre']).substring(0,38);
				
		// cargamos tags apartado insumo con cantidad
		$('#tag'+id).tagsinput('add', { id: datosinsumo[x]['id_insumo'], label: textomostrado, cantidad: cantidad  });
		$('#div'+id).css('display','block'); 
		//cargamos selects referentes a insumo
		$('#'+id +'> option[value="'+datosinsumo[x]['id_insumo']+'"]').attr('selected','selected');
		//$('#'+id).selectpicker('refresh');
		
		
	}
	$('#tarima').selectpicker('refresh');
	$('#plu').selectpicker('refresh');
	$('#bolsa').selectpicker('refresh');
	$('#caja').selectpicker('refresh');
	$('#inserto').selectpicker('refresh');
	$('#clam').selectpicker('refresh');
	$('#etiqueta').selectpicker('refresh');
	$('#varios').selectpicker('refresh');
	
	//cargar datos caracteristica
	var datoscaracte = $.ajax({
						type: "POST",
						url: "clases/presentacion.php",
						data:{
						'metodo':"datoscaracte",
						'cve': cve
						},
						dataType:"json",
						async: false
						}).responseText;
									
	datoscaracte =$.parseJSON(datoscaracte);	
	
	for(x=0; x < datoscaracte.length; x++)
	{ 
		var id = '';
		if (datoscaracte[x]['tipo']==1)
			{ 
				id= 'calidad';
			}
			else if(datoscaracte[x]['tipo']==2)
			{ id= 'tamano';				}
			else if(datoscaracte[x]['tipo']==3)
			{ id= 'color';				}
				
			$('#'+id +'> option[value="'+datoscaracte[x]['id_caract']+'"]').attr('selected','selected');
			//$('#'+id).selectpicker('refresh');
	}
	$('#calidad').selectpicker('refresh');
	$('#tamano').selectpicker('refresh');
	$('#color').selectpicker('refresh');	
	
	var Caracti = ['calidad','tamano','color'];	
	var datostxt = new Array(); 
	var datosvalue = new Array();
	for(x=0; x<Caracti.length; x++)
	{
		datostxt =[];
		datosvalue =[];
		
		$('#'+Caracti[x]+' option:selected').each(function(){ 
			datostxt.push($(this).text()); 
			datosvalue.push($(this).val()); 
		}); 
					
		for(z=0; z < datosvalue.length; z++)
		{
			$('#tag'+Caracti[x]).tagsinput('add', { id: datosvalue[z], label:datostxt[z] });
		}	
	}

	//$('.especial').selectpicker('refresh');
	$('#tarima').selectpicker('refresh');
	$('#plu').selectpicker('refresh');
	$('#bolsa').selectpicker('refresh');
	$('#caja').selectpicker('refresh');
	$('#inserto').selectpicker('refresh');
	$('#clam').selectpicker('refresh');
	$('#etiqueta').selectpicker('refresh');
	$('#varios').selectpicker('refresh');
	
	
	//$('.insumo').selectpicker('refresh');
	cargarFotos( );	
}
 
 

 
function llenarselect()
{
 //llenar select de modificacion
	$.ajax({
			async: false,
			type: 'POST',
			url: 'clases/presentacion.php',
			data:{metodo:"ComboProducto"},
			success: function(data) {
			$("#producto").append(data);
			$("#producto_colores").append(data);
			$("#producto").selectpicker('refresh');
			$("#producto_colores").selectpicker('refresh');
			}
    });
	
	$.ajax({
		async: false,
		type: 'POST',
		url: 'clases/presentacion.php',
		data:{metodo:"ComboCliente"},
		success: function(data) {
        $("#cliente").append(data);
		$("#cliente").selectpicker('refresh');
       }
    });
	
	//llenamos select de catalogo
	$.ajax({
		async: false,
		type: 'POST',
		url: 'clases/presentacion.php',
		data:{metodo:"ComboPresentProducto"},
		success: function(data) {
        $("#productocat").append(data);
		$("#productocat").selectpicker('refresh');
		  
       }
    });
	
	//llenamos insumos
	for(x=1; x<9; x++)
	{
		$.ajax({
			async: false,
			type: 'POST',
			url: 'clases/presentacion.php',
			data:{metodo:"ComboInsumos", insumo:x},
			success: function(data) {
				
			if (x==1)
			{
				$("#caja").append(data);
				$("#caja").selectpicker('refresh');
			}
			else if(x==2)
			{
				$("#tarima").append(data);
				$("#tarima").selectpicker('refresh');
			}
			else if(x==3)
			{
				$("#plu").append(data);
				$("#plu").selectpicker('refresh');
			}
			else if(x==4)
			{
				$("#inserto").append(data);
				$("#inserto").selectpicker('refresh');
			}
			else if(x==5)
			{
				$("#clam").append(data);
				$("#clam").selectpicker('refresh');
			}
			else if(x==6)
			{
				$("#bolsa").append(data);
				$("#bolsa").selectpicker('refresh');
			}
			else if(x==7)
			{
				$("#etiqueta").append(data);
				$("#etiqueta").selectpicker('refresh');
			}
			else if(x==8)
			{
				$("#varios").append(data);
				$("#varios").selectpicker('refresh');
			}
			}
		});
	}
}
 
 
$('#productocat').on('change', function() {
	$("#clientecat").empty();
	var idproducto= this.value;
	$.ajax({
		async: false,
		type: 'POST',
		url: 'clases/presentacion.php',
		data:{metodo:"ComboClienteProducto",id_producto: idproducto},
		success: function(data) {
			$("#clientecat").append(data);
			$("#clientecat").selectpicker('refresh');
		  
       }
    });
})
 
 // onchange de producto asigna color tamaño y calidades
$('#producto').on('change', function() {
		$("#color").empty();
		$("#tamano").empty();
		$("#calidad").empty();
		$("#color").selectpicker('refresh');
		$("#tamano").selectpicker('refresh');
		$("#calidad").selectpicker('refresh');
	$.ajax({
		async: false,
		type: 'POST',
		url: 'clases/presentacion.php',
		data:{metodo:"ComboColor", cve_producto: this.value},
		success: function(data) {
		$("#color").append(data);
		$("#color").selectpicker('refresh');
		}
	});
	
	$.ajax({
		async: false,
		type: 'POST',
		url: 'clases/presentacion.php',
		data:{metodo:"ComboTamanos", cve_producto: this.value},
		success: function(data) {
		$("#tamano").append(data);
		$("#tamano").selectpicker('refresh');
		}
	});
	
	$.ajax({
		async: false,
		type: 'POST',
		url: 'clases/presentacion.php',
		data:{metodo:"ComboCalidad", cve_producto: this.value},
		success: function(data) {
		$("#calidad").append(data);
		$("#calidad").selectpicker('refresh');
		}
	});
})


function GuardaPresent()
{
	if ( $('#cliente').val()!=='' && $('#producto').val()!=='' && $('#nombre').val().length > 0 && $('#codigoiso').val().length>0 && $('#peso').val().length>0 &&  $('#precionacional').val().length>0 &&  $('#costo').val().length>0)
	{
		var Duplicada = $.ajax({
						type: "POST",
						url: "clases/presentacion.php",
						data:{
						'metodo':"Duplicada",
						'idproducto': $('#producto').val(),
						'idprov':  $('#cliente').val() ,
						'nombrepresent': $('#nombre').val()
						},
						dataType:"json",
						async: false
						}).responseText;
									
		Duplicada =$.parseJSON(Duplicada);	
		if( Duplicada[0].Duplicada == 1)
		{
			crearNot("Advertencia","La presentación ya existe, revisar información y volver a intentarlo.","info","bootstrap3","dark");	
		}
		else
		{
			var CodigoSiguiente = ObtenerCodigoSig();
			//alert (CodigoSiguiente);
			
			var UltimaCve = $.ajax({
							type: "POST",
							url: "clases/presentacion.php",
							data:{
							'metodo':"UltimaCve"
							},
							dataType:"json",
							async: false
							}).responseText;
									
			UltimaCve =$.parseJSON(UltimaCve);
			var Cve = UltimaCve[0].Cve;
			
			//obtener today
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!

			var yyyy = today.getFullYear();
			if(dd<10){
			dd='0'+dd;
			} 
			if(mm<10){
			mm='0'+mm;
			} 
			var today = yyyy+'-'+mm+'-'+dd;
			if(img == 0){ var imagen= '';}
			else{ var imagen= Cve+'.jpg'; }
			var RegistraPresentacion = $.ajax({
									type: "POST",
									url: "clases/presentacion.php",
									data:{
										'metodo':"RegistraPresentacion",
										'cve':Cve,
										'id_producto':$('#producto').val(),
										'nombre': $('#nombre').val(),
										'nombrecorto': $('#nombrecorto').val(),
										'codigo': CodigoSiguiente,
										'etiketaL1':$('#linea1').val(),
										'etiketaL2':$('#linea2').val(),
										'producto':$('#productoinput').val(),
										'presentacion':$('#presentacion').val(),
										'descripcion':$('#descripcion').val(),
										'origen':$('#origen').val(),
										'extras':$('#extras').val(),
										'costo':$('#costo').val(),
										'precion':$('#precionacional').val(),
										'preciou':$('#precioexp').val(),
										'peso':$('#peso').val(),
										'imagen':imagen,// nombre de imagen
										'codigoiso':$('#codigoiso').val(),
										'fecha':today,
										'fechamod':today,
										'codigofecha':$('#codigofecha').val(),
										'cajas': $('#num_cajas').val()
										},
									dataType:"json",
									async: false
									}).responseText;
			
			var RegistraPresentacionCliente = $.ajax({
									type: "POST",
									url: "clases/presentacion.php",
									data:{
										'metodo':"RegistraPresentacionCliente",
										'id_cliente':  	$('#cliente').val(),
										'cve_presentacion': Cve
										},
									dataType:"json",
									async: false
									}).responseText;
									
			var Secciones = ['tarima','caja','plu','bolsa','inserto','clam','etiqueta','varios'];	
			for(x=0; x<Secciones.length; x++)
			{	
				var contenido = $('#tag'+Secciones[x]).tagsinput('items')	;
				
				for(z=0; z<contenido.length; z++)
				{	
					if (contenido.length == 0)
					{}
					else
					{ 
						//alert(Secciones[x]+'id:'+contenido[z].id+ ' cantidad:'+contenido[z].cantidad);
						var DetallePresentacion = $.ajax({
												type: "POST",
												url: "clases/presentacion.php",
												data:{
													'metodo':"DetallePresentacion",
													'cve_presentacion': Cve,
													'id_insumo':contenido[z].id,
													'cantidad':contenido[z].cantidad
													},
												dataType:"json",
												async: false
												}).responseText;
					}	
				}
			}

			//insert caracteristica de presentacion sin cantidad.
			var Caracte = ['calidad','tamano','color'];	
			for(x=0; x<Caracte.length; x++)
			{	
				var contenido = $('#tag'+Caracte[x]).tagsinput('items')	;
				var tipo;
				if (Caracte[x]== 'calidad')
				{tipo =1 ;} 
				else if (Caracte[x]== 'tamano')
				{tipo = 2;} 
				else if (Caracte[x]== 'color') { tipo = 3;}
			
				for(z=0; z<contenido.length; z++)
				{	
					if (contenido.length == 0)
					{}
					else
					{ 							
						var DetPresentCaract = $.ajax({
												type: "POST",
												url: "clases/presentacion.php",
												data:{
													'metodo':"DetPresentCaract",
													'cve_presentacion': Cve,
													'id_caract':contenido[z].id,
													'tipo': tipo
													},
												dataType:"json",
												async: false
												}).responseText;
					}	
				}
			}
			
			var insertarAccion = $.ajax({
										type: "POST",
										url: "clases/presentacion.php",
										data:{
											'metodo':"registrarAccion",
											'fecha':"",
											'idUsuario': "",
											'modulo':"Config.",
											'idAccion':"22",
											'id_ref':Cve,
											'txtReferencia':"Registro de Presentacion "+Cve
										},
										dataType:"json",
										async: false
										}).responseText;
			
			crearNot('Realizado','La presentación se guardó correctamente.','success','bootstrap3');	
			$('#guardar').attr('disabled', true);
			$('#cancelar').attr('disabled', true);
				
			recarga();
		}	
	}
	else
	{
		crearNot("Error","Datos incompletos ,favor de validar información ingresada. ","info","bootstrap3","dark");	
	}
}

function ObtenerCodigoSig()
{
	var ConsultaCodigo = $.ajax({
							type: "POST",
							url: "clases/presentacion.php",
							data:{
							'metodo':"ConsultaCodigo"
							},
							dataType:"json",
							async: false
							}).responseText;

	return ConsultaCodigo;	 
}

function crearNot(titulo,texto,tipo,estilo,clase)
{
	new PNotify({
		title: titulo,
		text: texto,
		type: tipo,
		styling: estilo,
		addclass: clase
				});
}

function recarga()
{
	setTimeout(function()
	{
	location.reload();; },3000);
}


function Limpia()
{
	location.reload();
}

function FotoFolio()
{
	var UltimaCve = $.ajax({
				type: "POST",
				url: "clases/presentacion.php",
				data:{
				'metodo':"UltimaCve"
				},
				dataType:"json",
				async: false
				}).responseText;
									
UltimaCve =$.parseJSON(UltimaCve);
var Cve = UltimaCve[0].Cve;
$('#clave').val(Cve);
}

$(".remove").on('itemRemoved', function(event) {
	var id_Sel= event.target.id;
	var id = id_Sel.substring(3);
	
    var asda= event.item.id;
	$('#'+id).find('[value='+asda+']').prop('selected', false);
	$('#'+id).selectpicker('refresh');
	
	if($('#'+id_Sel).val() == '')
	{
		$('#div'+id).css('display','none');
	}
	
});

function cargaTabla() 
{
	var cliente = $("#clientecat").val();
	var producto = $("#productocat").val();
	llenarTabla('consulta',cliente,producto);
}

function GetHeaders(obj) {
    var cols = new Array();
    var p = obj[0];
    for (var key in p) {
       cols.push(key);
    }
    return cols;
}

function llenarTabla(reporte,proveedor,producto)
{
	$("#cont_presentacion").empty();
	 
	var tabla = "<table id='datatable' class='table table-striped table-bordered dataTable no-footer' style='width:100%;'>"+
                    "<thead>"+
                    "<tr>"+
						"<th style='width: 20%;'>Cliente</th>"+
                        "<th style='width: 20%;'>Presentación</th>"+
                        "<th style='width: 10%;'>Peso</th>"+
                        "<th style='width: 10%;'>Costo</th>"+
						"<th style='width: 15%;'>Precio Nacional</th>"+
						"<th style='width: 10%;'>Precio Exp.</th>"+
                        "<th style='width: 10%;'>Visualizar</th>"+
						"<th style='width: 5%;'>Activo</th>"+
                    "</tr>"+
                    "</thead>"+
                    "<tbody>"+
                    "</tbody>"+
                "</table>";
    
    $("#cont_presentacion").append(tabla);
	
	var catalogoPresenta = $.ajax({
                            type: "POST",
                            url: "clases/presentacion.php",
                            data:
                            {
                                'metodo':"consulta",
								'id_provedor': proveedor,
								'id_producto': producto
                            },
                             dataType:"json",
                            async: false
                            }).responseText;

    catalogoPresenta = $.parseJSON(catalogoPresenta);
    if(catalogoPresenta[0]=="0"){ new PNotify({title: "Error en consulta usuarios", text: "Hubo un error en la consulta para el catalogo de usuarios.", type: "error",styling: "bootstrap3"}); }
    var catalogoPresent = catalogoPresenta[1];
	var largo = catalogoPresenta.length;
		
    for(var i =0; i<catalogoPresenta.length; i++)
    {
		var idRenglon = "trPresent"+i.toString();
        var idCheck = "check"+i.toString();
   
        var renglon = ' <tr id="'+idRenglon+'">'+
						'<td>'+ catalogoPresenta[i]['Cliente'] +'</td>'+
						'<td>'+ catalogoPresenta[i]['Nombre'] +'</td>'+
						'<td align="right">'+ catalogoPresenta[i]['Peso'] +'</td>'+
						'<td align="right">'+ catalogoPresenta[i]['Costo'] +'</td>'+
						'<td align="right">'+ catalogoPresenta[i]['Precio Venta'] +'</td>'+
						'<td align="right">'+ catalogoPresenta[i]['Precio Exp.'] +'</td>'+
						'<td align="center"><i class="calidad fa fa-eye fa-lg" id="editar"  onclick="CambiaPestaña('+catalogoPresenta[i]['Cve']+','+catalogoPresenta[i]['id_provedor']+');"></i> </td>'+
						'<td align="center" class="tdActivo"><input  id='+idCheck+'  type="checkbox" class="js-switch " Cve="'+catalogoPresenta[i]['Cve']+'" /> </td></tr>';
	 
        $('#datatable tbody').append(renglon);
	}
	
	//Validar Activos o Inactivos
	for(var i =0;i<catalogoPresenta.length;i++)
    {
        var id_renglon = "trPresent"+i.toString();
        var idCheck = "check"+i.toString();
        if(catalogoPresenta[i]['Activo'] == 'S')
        {
            $("#"+idCheck).attr('checked','true');
        }
    }
	
	//Inicializar Switch.
	var elem = document.querySelectorAll('.js-switch');
	for (i = 0; i < elem.length; ++i) 
	{
		var init = new Switchery(elem[i]);
	}

    if ($.fn.dataTable.isDataTable('#datatable'))
    {
    }
    else
    {
        $('#datatable').dataTable(
            {
                "paging":false
            }
        ); 
    }
}


//cambiar activo a inactivo y viceversa
$(document).on("click","#datatable :has(input[type='checkbox'])",function(event){
	var check =  $(this).children("input").attr("checked");
	var cve =  $(this).children("input").attr("Cve");
	var idRenglon = $(this).children().attr('id');
	if (typeof cve != 'undefined')
	{
		//alert('me dieron click'+cve);
		if (typeof check != 'undefined'&& check == 'checked')
		{
			var estado= 'N';
			
			var actualizaestado = $.ajax({
							type: "POST",
							url: "clases/presentacion.php",
							data:{
							'metodo':"actualizaestado",
							'cve': cve,
							'estado': estado
							},
							dataType:"json",
							async: false
							}).responseText;
			if (actualizaestado == 'correcto')
			{
				crearNot('Actualizado','Presentación modificada correctamente','success','bootstrap3');	
				$("#"+idRenglon).attr('checked','false');				
			}
			else
			{
				crearNot("Advertencia","No se pudo actualizar correctamente, volver a intentarlo.","info","bootstrap3","dark");
				$("#"+idRenglon).attr('checked','true');			
			}

		}
		else
		{
			var estado= 'S';

			var actualizaestado = $.ajax({
							type: "POST",
							url: "clases/presentacion.php",
							data:{
							'metodo':"actualizaestado",
							'cve': cve,
							'estado': estado
							},
							dataType:"json",
							async: false
							}).responseText;
			if (actualizaestado == 'correcto')
			{
				crearNot('Actualizado','Presentación modificada correctamente','success','bootstrap3');	
				$("#"+idRenglon).attr('checked','true');
			}
			else
			{
				crearNot("Advertencia","No se pudo actualizar correctamente, volver a intentarlo.","info","bootstrap3","dark");	
				$("#"+idRenglon).attr('checked','false');
			}
		}
		cargaTabla();
	}
	
});

var urlBuscar; 
function cargarFotos()
{
	$(".dz-hidden-input").prop("disabled",true);
	
    var Cve= $("#modifinput").val();
		
   urlBuscar = "uploads/"+Cve+"/"; 

   if (Cve == "")
    {return;}
  
    $.ajax({
        url: urlBuscar,
        success: function(data){
          
            $(data).find("a:contains(.jpg)").each(function(){
                    previewThumbailFromUrl({
                    selector: 'myDropZone1',
                    fileName:  $(this).html(),
                    imageURL: urlBuscar+ $(this).html(),
                });
            });

			
        }
    });
		
}

function previewThumbailFromUrl(opts)
{
    var imgDropzone = Dropzone.forElement("#" + opts.selector);
    var mockFile = {
        name: opts.fileName,
        size: 12345,
        accepted: true,
        kind: 'image'
    };
    imgDropzone.emit("addedfile", mockFile);
    imgDropzone.files.push(mockFile);
    imgDropzone.createThumbnailFromUrl(mockFile, opts.imageURL, function() {
        imgDropzone.emit("complete", mockFile);
    });

    console.log(mockFile + "\n" + opts.imageURL + "\n" + opts.fileName);
}

function ActualizaPresent()
{
	var Cve = $('#modifinput').val();
	//obtener today
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){
	dd='0'+dd;
	} 
	if(mm<10){
	mm='0'+mm;
	} 
	var today = yyyy+'-'+mm+'-'+dd;
			
	var UpdatePresent = $.ajax({
					type: "POST",
					url: "clases/presentacion.php",
					data:{
						'metodo':"UpdatePresent",
						'cve':Cve,
						'nombre': $('#nombre').val(),
						'nombrecorto': $('#nombrecorto').val(),
						'etiketaL1':$('#linea1').val(),
						'etiketaL2':$('#linea2').val(),
						'producto':$('#productoinput').val(),
						'presentacion':$('#presentacion').val(),
						'descripcion':$('#descripcion').val(),
						'origen':$('#origen').val(),
						'extras':$('#extras').val(),
						'costo':$('#costo').val(),
						'precion':$('#precionacional').val(),
						'preciou':$('#precioexp').val(),
						'codigoiso':$('#codigoiso').val(),
						'fechamod':today,
						'codigofecha':$('#codigofecha').val(),
						'peso':$('#peso').val(),
						'cajas': $('#num_cajas').val()
						},
					dataType:"json",
					async: false
					}).responseText;
					
	//eliminamos registro de insumos actual			
	var deletepreseninsumo = $.ajax({
					type: "POST",
					url: "clases/presentacion.php",
					data:{
						'metodo':"deletepreseninsumo",
						'cve':Cve
						},
					dataType:"json",
					async: false
					}).responseText;
	
	//insertamos todos insumos 
	var Secciones = ['tarima','caja','plu','bolsa','inserto','clam','etiqueta','varios'];	
	for(x=0; x<Secciones.length; x++)
	{	
		var contenido = $('#tag'+Secciones[x]).tagsinput('items')	;
		
		for(z=0; z<contenido.length; z++)
		{	
			if (contenido.length == 0)
			{}
			else
			{ 
				var DetallePresentacion = $.ajax({
										type: "POST",
										url: "clases/presentacion.php",
										data:{
											'metodo':"DetallePresentacion",
											'cve_presentacion': Cve,
											'id_insumo':contenido[z].id,
											'cantidad':contenido[z].cantidad
											},
										dataType:"json",
										async: false
										}).responseText;
			}	
		}
	}
	//eliminamos registro de caracteristicas actual	
	var deletepreseninsumo = $.ajax({
					type: "POST",
					url: "clases/presentacion.php",
					data:{
						'metodo':"deletepresencarac",
						'cve':Cve
						},
					dataType:"json",
					async: false
					}).responseText;
					
	//insert caracteristica de presentacion sin cantidad.
			var Caracte = ['calidad','tamano','color'];	
			for(x=0; x<Caracte.length; x++)
			{	
				var contenido = $('#tag'+Caracte[x]).tagsinput('items')	;
				var tipo;
				if (Caracte[x]== 'calidad')
				{tipo =1 ;} 
				else if (Caracte[x]== 'tamano')
				{tipo = 2;} 
				else if (Caracte[x]== 'color') { tipo = 3;}
			
				for(z=0; z<contenido.length; z++)
				{	
					if (contenido.length == 0)
					{}
					else
					{ 							
						var DetPresentCaract = $.ajax({
												type: "POST",
												url: "clases/presentacion.php",
												data:{
													'metodo':"DetPresentCaract",
													'cve_presentacion': Cve,
													'id_caract':contenido[z].id,
													'tipo': tipo
													},
												dataType:"json",
												async: false
												}).responseText;
					}	
				}
			}
	
					
	if(UpdatePresent == 'correcto' && DetallePresentacion == 'correcto')
	{	
		var insertarAccion = $.ajax({
										type: "POST",
										url: "clases/presentacion.php",
										data:{
											'metodo':"registrarAccion",
											'fecha':"",
											'idUsuario': "",
											'modulo':"Config.",
											'idAccion':"24",
											'id_ref':Cve,
											'txtReferencia':"Actualizacion de Presentacion "+Cve
										},
										dataType:"json",
										async: false
										}).responseText;
										
		crearNot("Actualizado","Presentación Actualizada correctamente","success","bootstrap3");
		$('#actualiza').attr('disabled', true);
		$('#cancelar').attr('disabled', true);
		recarga();
	}
	else
	{
		crearNot("Error","No se logró actualizar, intentar nuevamente. ","info","bootstrap3","dark");	
	}
}

var bandera=0;
function Bandera()
{
	bandera = 1;
}


$('#profile-tab').click(function () {
 if (num_busqueda == 2)
 {
	Limpia();
 }
});

function GuardaColor()
{

	var cve_producto = $("#producto_colores").val();
	var nombre_color = $("#nombre_color").val();
	var codigo_color = $("#codigo_color").val();

	
	if( cve_producto ==='' || nombre_color === ''  || codigo_color === ''  )
	{
        crearNot("Error","Datos incompletos ,favor de validar información ingresada. ","info","bootstrap3","dark");	
        return;
	}
	
	if( codigo_color.length != 1  )
	{
        crearNot("Error","Longitud del código, favor de escribir solo una letra en el código. ","info","bootstrap3","dark");
        return;	
	}

	var colorRepetido = $.ajax({
										type: "POST",
										url: "clases/presentacion.php",
										data:{
											'metodo':"repetido_color",
											'producto': cve_producto,
											'color': nombre_color,
											'codigo':codigo_color
										},
										dataType:"json",
										async: false
						}).responseText;
    console.log("repetido"+colorRepetido);
    if( colorRepetido == null ) { crearNot("Error","En la consulta de repetidos ","info","bootstrap3","dark");  return; }
    colorRepetido = $.parseJSON(colorRepetido);
    if( !colorRepetido[0] ){ crearNot("Error","En la consulta de repetidos, error: "+colorRepetido[1],"info","bootstrap3","dark");   return;}
    colorRepetido = colorRepetido[1];
    colorRepetido = colorRepetido[0]["repetido"];
    if( parseInt(colorRepetido) > 0 ){ crearNot("Error","Color  y/o código repetidos","info","bootstrap3","dark");   return;}
    

	var registrarColor =    $.ajax({
										type: "POST",
										url: "clases/presentacion.php",
										data:{
											'metodo':"registrar_color",
											'producto': cve_producto,
											'color': nombre_color,
											'codigo':codigo_color
										},
										dataType:"json",
										async: false
										}).responseText;
    console.log("Registro color: "+registrarColor);
    if(registrarColor == null)
    {
      crearNot("Error","No se realizó el registro del color. ","info","bootstrap3","dark"); return;
    } 

    registrarColor = $.parseJSON(registrarColor);
    if(!registrarColor[0] )
    {
        crearNot("Error","No se realizó el registro del color, error: "+registrarColor[1] ,"info","bootstrap3","dark"); 
    }

    if( registrarColor[1] ){crearNot("Color registrado","Se ha registrado al color.","info","bootstrap3","success");  Limpia();}

}