<?php
	include('../../inc/varsesion.php');
	header('Content-Type: text/html; charset=iso-8859-1'); 
?>
<!DOCTYPE html>
<html xml:lang="en" lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Language" content="es" />
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Talayote | Configuración</title>

    <!-- Bootstrap -->
    <link href="../../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- bootstrap-daterangepicker -->
    <link href="../../vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">
    <!-- bootstrap-datetimepicker -->
    <link href="../../vendors/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css" rel="stylesheet">
	<!-- Bootstrap select -->
	<link href="../../vendors/bootstrap-select/dist/css/bootstrap-select.css" rel="stylesheet">
	<link href="../../vendors/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="../../vendors/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- Datatables -->
    <link href="../../vendors/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <!-- Switchery -->
    <link href="../../vendors/switchery/dist/switchery.min.css" rel="stylesheet">
	<!-- bootstrap-wysiwyg -->
    <link href="../../vendors/google-code-prettify/bin/prettify.min.css" rel="stylesheet">
	<!-- PNotify -->
    <link href="../../vendors/pnotify/dist/pnotify.css" rel="stylesheet">
    <link href="../../vendors/pnotify/dist/pnotify.buttons.css" rel="stylesheet">
    <link href="../../vendors/pnotify/dist/pnotify.nonblock.css" rel="stylesheet">
	<!-- Custom Theme Style -->
    <link href="../../build/css/custom.min.css" rel="stylesheet">
	<!-- Tags -->
	<link href="../../vendors/bootstrap-tagsinput/dist/bootstrap-tagsinput.css" rel="stylesheet">	
	<!-- Dropzone.js -->
    <link href="../../vendors/dropzone/dist/dropzone.css"  type="text/css" rel="stylesheet">
	<!-- Custom Table Style -->
	<link href="../configuracion/css/presentacion.css" rel="stylesheet">	
	
</head>

<body class="nav-md">
	<div id="us_un" style="display: none;" cl= <?php  echo $id_usuario; ?> > </div>
<div class="container body">
    <div class="main_container">
        <!-- menu derecho -->
        <?php
        require_once("../../layouts/navIzquierda.php");
        ?>
        <!-- menu derecho -->
        <!-- top navigation -->
        <?php
        require_once("../../layouts/navSuperior.php");
        ?>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
            <div class="">
			  <div class="clearfix"></div> 
                <div class="page-title">
                    <div class="title_left">
                        <h3>Gestión de Presentación</h3>
                    </div>
                </div>

                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>Menú</h2>
                                   <div class="clearfix"></div>
                            </div>
                            
							<div class="x_content" >
                                <div class="" role="tabpanel" data-example-id="togglable-tabs">
                                    <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
                                        <li role="presentation" class="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Alta</a>
                                        </li>

                                        <li role="presentation" class="" id="catli"><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Catálogo</a>
                                        </li>

                                        <li role="presentation" class="" id="coloresli"><a href="#tab_content3" role="tab" id="colores_tab" data-toggle="tab" aria-expanded="false">Colores</a>
                                        </li>


								    </ul>
                                    <div id="myTabContent" class="tab-content">
                                        <div role="tabpanel" class="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
                                            <!--contenido del primer tab-->
                                            <div class="row" id="roww">
                                                <div class="col-md-12 col-sm-12 col-xs-12">
                                                    <div class="x_panel">
                                                        <div class="x_title">
                                                            <h2>Registro de Datos</h2>
                                                            <div class="clearfix"></div>
                                                        </div>
														
													<div class="col-md-9 col-sm-9 col-xs-12 form-group has-feedback">
														<b><h5>Datos de Presentación</h5></b>
													</div>
													
													<div class="col-md-3 col-sm-3 col-xs-12 form-group has-feedback">
														<b><h5>Resumen :</h5></b>
													</div>
														
													<div class="col-md-9 col-sm-9 col-xs-12 form-group">
														<div class="x_content borde">
															<div class="clearfix "><br/></div>
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Producto :</label>
																<select id ="producto" class="selectpicker form-control formulario"  data-size="15">
																	<option data-content="<i class='glyphicon glyphicon-leaf'></i>     Selecciona Producto"></option>
																</select>
															</div>
																																										
															<div class="col-md-4 col-sm-4 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Cliente :</label>
																<select id ="cliente" class="selectpicker form-control formulario" data-live-search="true"  data-size="13">
																	<option data-content="<i class='glyphicon glyphicon-user'></i>     Selecciona Cliente"></option>
																</select>
															</div>
																												
															<div class="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
																<label for="nombre" class="control-label col-md-12 col-sm-12 col-xs-12">Nombre :</label>
																<input id="nombre" type="text" class="form-control has-feedback-left">
																<span class="fa fa-edit form-control-feedback left" aria-hidden="true"></span>
															</div>
															
															<div class="col-md-1 col-sm-1 col-xs-12 form-group has-feedback">
																<label for="num_cajas" class="control-label col-md-12 col-sm-12 col-xs-12">Cajas:</label>
																<input id="num_cajas" type="text" class="form-control has-feedback-left" style="padding-left: 8px;">
															</div>
														
															<div class="col-md-2 col-sm-2 col-xs-12 form-group has-feedback">
																<label for="costo" class="control-label col-md-12 col-sm-12 col-xs-12">Costo Empaque</label>
																<input id="costo" type="text" class="form-control has-feedback-left">
																<span class="fa fa-usd form-control-feedback left" aria-hidden="true"></span>
															</div>
														
															<div class="col-md-2 col-sm-2 col-xs-12 form-group has-feedback">
																<label for="precionacional" class="control-label col-md-12 col-sm-12 col-xs-12">P. Nacional :</label>
																<input id="precionacional" type="text" class="form-control has-feedback-left">
																<span class="fa fa-usd form-control-feedback left" aria-hidden="true"></span>
															</div>
															
															<div class="col-md-2 col-sm-2 col-xs-12 form-group has-feedback">
																<label for="precioexp" class="control-label col-md-12 col-sm-12 col-xs-12">P. Exportación :</label>
																<input id="precioexp" type="text" class="form-control has-feedback-left">
																<span class="fa fa-usd form-control-feedback left" aria-hidden="true"></span>
															</div>
															
															<div class="col-md-2 col-sm-2 col-xs-12 form-group has-feedback">
																<label for="codigoiso" class="control-label col-md-12 col-sm-12 col-xs-12">Código :</label>
																<input id="codigoiso" type="text" class="form-control has-feedback-left">
																<span class="fa fa-check-square-o form-control-feedback left" aria-hidden="true"></span>
															</div>
															
															<div class="col-md-2 col-sm-2 col-xs-12 form-group ">
																<label for="nombrecorto" class="control-label col-md-12 col-sm-12 col-xs-12">Nombre Corto:</label>
																<input id="nombrecorto" type="text" class="form-control ">
															</div>
														
															<div class="col-md-2 col-sm-2 col-xs-12 form-group has-feedback">
																<br/>
																<input type="checkbox" name="hobbies[]" id="checketiqueta" value="limpio"  class="flat" /> Datos Etiqueta 
															</div>
														</div>
														
														<div class="x_content borde" id="etiquetaconf" style="display:none;">
															<b><h5>Datos Etiqueta :</h5></b>
															<br/>
															<div class="col-md-3 col-sm-3 col-xs-12 form-group ">
																<label for="linea1" class="control-label col-md-12 col-sm-12 col-xs-12">Linea 1 :</label>
																<input id="linea1" type="text" class="form-control ">
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group ">
																<label for="productoinput" class="control-label col-md-12 col-sm-12 col-xs-12">Producto :</label>
																<input id="productoinput" type="text" class="form-control">
															</div>
															
															<div class="col-md-2 col-sm-2 col-xs-12 form-group ">
																<label for="descripcion" class="control-label col-md-12 col-sm-12 col-xs-12">Descripción :</label>
																<input id="descripcion" type="text" class="form-control">
															</div>
															
															<div class="col-md-1 col-sm-1 col-xs-12 form-group ">
																<label for="peso" class="control-label col-md-12 col-sm-12 col-xs-12">Peso:</label>
																<input id="peso" type="text" class="form-control "  style="padding-right: 3px; padding-left: 3px;">
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group ">
																<label for="extras" class="control-label col-md-12 col-sm-12 col-xs-12">Extras :</label>
																<input id="extras" type="text" class="form-control ">
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Código Etiqueta :</label>
																<select id ="codigofecha" class="selectpicker form-control formulario">
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Código"></option>
																	<option value="">Etiqueta Normal </option>
																	<option value="1">Con Código de Fecha </option>
																	<option value="3">Etiqueta Chica </option>
																</select>
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group ">
																<label for="linea2" class="control-label col-md-12 col-sm-12 col-xs-12">Linea 2 :</label>
																<input id="linea2" type="text" class="form-control ">
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group ">
																<label for="presentacion" class="control-label col-md-12 col-sm-12 col-xs-12">Presentación :</label>
																<input id="presentacion" type="text" class="form-control ">
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group ">
																<label for="origen" class="control-label col-md-12 col-sm-12 col-xs-12">Origen :</label>
																<input id="origen" type="text" class="form-control ">
															</div>
														</div>
														
														<div class="x_content borde" style="display:block;">
															<b><h5>Colores, Tamaños, Calidades :</h5></b>
															<br/>
																					
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Colores :</label>
																<select id ="color" class="selectpicker form-control multiple" multiple>
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Color"></option>
																</select>
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Tamaños :</label>
																<select id ="tamano" class="selectpicker form-control multiple" multiple>
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Tamaño"></option>
																</select>
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Calidad :</label>
																<select id ="calidad" class="selectpicker form-control multiple" multiple>
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Calidad"></option>
																</select>
															</div>
														</div>
													
														<div class="x_content borde" style="display:block;">
															<b><h5>Insumos de Empaque :</h5></b>
															<br/>
																																			
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Tarima :</label>
																<select id ="tarima" class="selectpicker form-control insumo"   data-size="15">
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Tarima"></option>
																</select>
															</div>
														
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">PLU :</label>
																<select id ="plu" class="selectpicker form-control insumo"   data-size="15">
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona PLU"></option>
																</select>
															</div>
														
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Bolsa :</label>
																<select id ="bolsa" class="selectpicker form-control insumo"   data-size="9" data-container="body"  data-live-search="true" >
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Bolsa"></option>
																</select>
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Caja :</label>
																<select id ="caja" class="selectpicker form-control insumo"   data-size="9" data-container="body"  data-live-search="true" >
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Caja"></option>
																</select>
															</div>
														
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Inserto :</label>
																<select id ="inserto" class="selectpicker form-control insumo"   data-size="15">
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Inserto"></option>
																</select>
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Clam :</label>
																<select id ="clam" class="selectpicker form-control insumo"   data-size="15">
																	<option data-content="<i class='glyphicon glyphicon-triangle-bottom'></i>     Selecciona Clam"></option>
																</select>
															</div>
														
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Etiquetas :</label>
																<select id ="etiqueta" class="selectpicker form-control  especial  col-md-12" multiple   data-size="9" data-live-search="true">
																	
																</select>
															</div>
															
															<div class="col-md-3 col-sm-3 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Varios :</label>
																<select id ="varios" class="selectpicker form-control  especial col-md-12"  multiple  data-size="9"  data-live-search="true"  >
																	
																</select>
															</div>
														</div>
													</div>
													
													<div class="col-md-3 col-sm-3 col-xs-12 form-group ">
													
																			
														<div class="x_content borde" >
															<div class="x_content borde" style="background-color:#f5f7fa;">		
																	<b><h5>Fotografía :</h5></b>
																<div class="col-md-1 col-sm-1 col-xs-1"></div>
																<div class="col-md-10 col-sm-10 col-xs-10" id="contenedor_imagen">
																	<form action="upload.php" class="dropzone hzScroll" id="myDropZone1" method="post">
																	<input type="file" name="file" style="display:none;">
																	<input  id="clave" name="clave" style="display:none;" value="">
																	
																	</form>
																</div>
															</div>
														
															<div class="x_content borde" style="background-color:#f5f7fa;">
																<b><h5>Color :</h5></b>
																<input id="tagcolor" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
															</div>
															
															<div class="x_content borde" style="background-color:#f5f7fa;">
																<b><h5>Tamaño :</h5></b>
																<input id="tagtamano" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
															</div>
															
															<div class="x_content borde" style="background-color:#f5f7fa;">
																<b><h5>Calidad :</h5></b>
																<input id="tagcalidad" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
															</div>
															
															<div class="x_content borde" style="background-color:#f5f7fa;">
																<b><h5>Insumos de empaque </h5></b>
																<div id="divtarima" class="divtag" style="display:none;">
																	<b><h6>Tarima :</h6></b>
																	<input id="tagtarima" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
																</div>
															
																<div id="divplu" class="divtag" style="display:none;">
																	<b><h6>PLU :</h6></b>
																	<input id="tagplu" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
																</div>
															
																<div id="divbolsa" class="divtag" style="display:none;">
																	<b><h6>Bolsa :</h6></b>
																	<input id="tagbolsa" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa; display:none;">
																</div>
															
																<div id="divcaja"  class="divtag" style="display:none;">
																	<b><h6>Caja :</h6></b>
																	<input id="tagcaja" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
																</div>
															
																<div id="divinserto"  class="divtag" style="display:none;">
																	<b><h6>Inserto :</h6></b>
																	<input id="taginserto" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
																</div>
															
																<div id="divclam" class="divtag" style="display:none;">
																	<b><h6>Clam :</h6></b>
																	<input id="tagclam" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
																</div>
															
																<div id="divetiqueta"  class="divtag" style="display:none;">
																	<b><h6>Etiqueta :</h6></b>
																	<input id="tagetiqueta" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;">
																</div>
															
																<div id="divvarios" class="divtag" style="display:none;">
																	<b><h6>Varios :</h6></b>
																	<input id="tagvarios" type="text" class="form-control tag remove" data-role="tagsinput"  style="padding-right: 5px;    border: 0px; background-color: #f5f7fa;  width: 500px;">
																</div>
															</div>
														</div>
													</div>
													
													<div class="clearfix col-md-12 col-sm-12 col-xs-12"><br/></div>
													<div class="col-md-10 col-sm-10 col-xs-10" > </div>	
													<div class="col-md-1 col-sm-1 col-xs-6" >															
														<button id="cancelar" class="btn btn-dark" onclick="Limpia();">Cancelar</button>
													</div>	
													<div  id='divguarda' class="col-md-1 col-sm-1 col-xs-6" style="display:block;" >															
														<button id="guardar" class="btn btn-success" onclick="GuardaPresent();">
														<span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Guardar</button>
													</div>	
													<div  id='divactualiza' class="col-md-1 col-sm-1 col-xs-6" style="display:none;" >															
														<button id="actualiza" class="btn btn-success" onclick="ActualizaPresent();">
														<span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Actualiza</button>
													</div>
													
													</div>
												</div>
                                            </div>
                                        </div> 
										<input id='modifinput' style="display:none;" readonly>
										<input id='modifinputcliente' style="display:none;" readonly>
										<div class="col-md-1 col-sm-1 col-xs-12  form-group">
										<button  id="LimpiaDrop" class="btn btn-dark" type="button" style="display:none">
										</div>
										
                                        <div role="tabpanel" class="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                                        <!--contenido del segundo tab-->
										    <div class="row">
                                                <div class="col-md-12 col-sm-12 col-xs-12">
                                                    <div class="x_panel">
                                                        <div class="x_title">
                                                            <h2>Búsqueda</h2>
                                                             <ul class="nav navbar-right panel_toolbox">
																<li><a></a></li><li><a></a></li><li><a></a></li><li><a></a></li>
                                                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                                                </li>  
                                                                
                                                            </ul>
                                                            <div class="clearfix"></div>
                                                        </div>
														
                                                        <div class="x_content">
															<div class="col-md-4 col-sm-4 col-xs-4">
																Selecciona el Producto
																<div class="form-group">
																	 <div class="col-md-12 col-sm-12 col-xs-12">
																		<select id="productocat"  class="form-control selectpicker">
																		</select>
																	</div>
																</div>
															</div>
															<div class="col-md-4 col-sm-4 col-xs-4">
																Selecciona el Cliente
																<div class="form-group">
																	 <div class="col-md-12 col-sm-12 col-xs-12">
																		<select id="clientecat"  class="form-control selectpicker" >
																		</select>
																	</div>
																</div>
															</div>
								
															<div class="col-md-3 col-sm-3 col-xs-12 form-group has-feedback">
																<div class="form-group pull-right" style="margin-top: 15px">
																	<button class="btn btn-large btn-success" onclick="cargaTabla();" type="submit">Consulta</button>
																</div>
															</div>
														</div>
													</div>
                                                </div>
                                            </div>
											
											<div class="row">
                                                <div class="col-md-12 col-sm-12 col-xs-12">
                                                    <div class="x_panel">
                                                        <div class="x_title">
                                                            <h2>Catálogo</h2>
                                                            <ul class="nav navbar-right panel_toolbox">
																<li><a></a></li><li><a></a></li><li><a></a></li>
                                                                <li class="dropdown">
                                                                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" onclick=""><i class="fa fa-refresh" ></i></a>
                                                                 <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                                                </li>  
                                                                </li>
                                                            </ul>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                        
														<div id="cont_presentacion" class="x_content">
														
														
														</div>
													</div>
                                                </div>
                                            </div>
                                        </div>


                                        <div role="tabpanel" class="tab-pane fade" id="tab_content3" aria-labelledby="colores_tab">

                                            <div class="row">
                                            	<div class="col-md-12 col-sm-12 col-xs-12">

                                            		<div class="x_panel">
                                                        <div class="x_title">
                                                            <h2>Colores</h2>
                                                             <ul class="nav navbar-right panel_toolbox">
																<li><a></a></li><li><a></a></li><li><a></a></li><li><a></a></li>
                                                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                                                </li>  
                                                                
                                                            </ul>
                                                            <div class="clearfix"></div>
                                                        </div>
														
                                                        <div class="x_content">

                                                        	

                                                        	<div class="col-md-4 col-sm-4 col-xs-12 form-group">
																<label  class="control-label col-md-12 col-sm-12 col-xs-12">Producto :</label>
																<select id ="producto_colores" class="selectpicker form-control formulario"  data-size="15">
																	<option data-content="<i class='glyphicon glyphicon-leaf'></i>     Selecciona Producto"></option>
																</select>
															</div>


															<div class="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
																<label for="nombre_color" class="control-label col-md-12 col-sm-12 col-xs-12">Nombre del color:</label>
																<input id="nombre_color" type="text" class="form-control has-feedback-left">
																<span class="fa fa-edit form-control-feedback left" aria-hidden="true"></span>
															</div>

															<div class="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
																<label for="codigo_color" class="control-label col-md-12 col-sm-12 col-xs-12">Código del color :</label>
																<input id="codigo_color" type="text" class="form-control has-feedback-left">
																<span class="fa fa-edit form-control-feedback left" aria-hidden="true"></span>
															</div>

															<div class="clearfix col-md-12 col-sm-12 col-xs-12"><br/></div>


															<div class="col-md-10 col-sm-10 col-xs-10" > </div>	

															<div class="col-md-1 col-sm-1 col-xs-6" >															
																<button id="cancelar_colores" class="btn btn-dark" onclick="Limpia();">Cancelar</button>
															</div>


															<div  id='divguarda_colores' class="col-md-1 col-sm-1 col-xs-6" style="display:block;" >															
																<button id="guardar_colores" class="btn btn-success" onclick="GuardaColor();">
																<span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Guardar</button>
															</div>


                                                        </div>
                                                    </div>

                                            	</div>
                                            </div>

                                        </div>

                                    </div>
									
									<!--VentanaEmergente-->
									<div  id="asignacantidad" class="modal fade bs-example-modal" tabindex="-1" role="dialog" aria-hidden="true" style="display:none;">
										<div class="modal-dialog modal-sm" id="emer">
											<div class="modal-content">
																				
											<div class="modal-body col-md-12 col-sm-12 col-xs-12">
												<label style="text-align: center;" id="textomodal"></label><br/><br/>
												<div class="col-md-2 col-sm-2 col-xs-12 form-control-has-feedback">	</div>
												<div class="col-md-6 col-sm-6 col-xs-12 form-control-has-feedback">	
													<input id="cantidad" type="text" class="form-control has-feedback-left" >
													<span class="fa fa-cubes form-control-feedback left" aria-hidden="true"></span>
												</div>
												
												<div class="col-md-3 col-sm-3 col-xs-12 form-control-has-feedback">	
													<button onclick="CreaEtiqueta();" class="btn btn-success btn-xs antosubmit" type="button">
													<span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> </button>
												</div>
											</div>
													
											<div class="modal-footer"></div>											
											</div>
										</div>
									</div>
								</div>
							</div>
                        </div>
                    </div>
				</div>
            </div>
            <!-- footer content -->
            <?php
            require_once("../../layouts/footer.php");
            ?>
            <!-- /footer content -->
        </div>
    </div>
</div>
	




<!-- jQuery -->
<script src="../../vendors/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="../../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- FastClick -->
<script src="../../vendors/fastclick/lib/fastclick.js"></script>
<!-- NProgress -->
<script src="../../vendors/nprogress/nprogress.js"></script>
<!-- iCheck -->
<script src="../../vendors/iCheck/icheck.min.js"></script>
<!-- bootstrap-daterangepicker -->
<script src="../../vendors/moment/min/moment.min.js"></script>
<script src="../../vendors/bootstrap-daterangepicker/daterangepicker.js"></script>
<!-- bootstrap-datetimepicker -->
<script src="../../vendors/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
<!-- Bootstrap-Select -->
<script src="../../vendors/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
<script src="../../vendors/bootstrap-select/dist/js/bootstrap-select.js"></script>
<!-- Datatables -->
<script src="../../vendors/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="../../vendors/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
<script src="../../vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/buttons.flash.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/buttons.html5.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/buttons.print.min.js"></script>
<script src="../../vendors/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js"></script>
<script src="../../vendors/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
<script src="../../vendors/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
<script src="../../vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js"></script>
<script src="../../vendors/datatables.net-scroller/js/dataTables.scroller.min.js"></script>
<script src="../../vendors/jszip/dist/jszip.min.js"></script>
<script src="../../vendors/pdfmake/build/pdfmake.min.js"></script>
<script src="../../vendors/pdfmake/build/vfs_fonts.js"></script>
<script src="../../vendors/datatables.net-buttons/js/dataTables.buttons.min.js"></script> <!--No se ven !-->
<script src="../../vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js"></script> <!-- ESTILOS !-->
<script src="../../vendors/datatables.net-buttons/js/buttons.flash.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/buttons.html5.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/buttons.print.min.js"></script>

<!-- Chart.js -->
<script src="../../vendors/Chart.js/dist/Chart.bundle.min.js"></script>
<!-- bootstrap-wysiwyg -->
<script src="../../vendors/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js"></script>
<script src="../../vendors/jquery.hotkeys/jquery.hotkeys.js"></script>
<script src="../../vendors/google-code-prettify/src/prettify.js"></script>
<!-- jQuery Tags Input -->
<script src="../../vendors/jquery.tagsinput/src/jquery.tagsinput.js"></script>
<!-- Switchery -->
<script src="../../vendors/switchery/dist/switchery.min.js"></script>
<!-- Select2 -->
<script src="../../vendors/select2/dist/js/select2.full.min.js"></script>
<!-- Parsley -->
<script src="../../vendors/parsleyjs/dist/parsley.min.js"></script>
<!-- Autosize -->
<script src="../../vendors/autosize/dist/autosize.min.js"></script>
<!-- jQuery autocomplete -->
<script src="../../vendors/devbridge-autocomplete/dist/jquery.autocomplete.min.js"></script>
<!-- starrr -->
<script src="../../vendors/starrr/dist/starrr.js"></script>
 <!-- PNotify -->
<script src="../../vendors/pnotify/dist/pnotify.js"></script>
<script src="../../vendors/pnotify/dist/pnotify.buttons.js"></script>
<script src="../../vendors/pnotify/dist/pnotify.nonblock.js"></script>
	<!-- Custom Theme Scripts -->
<script src="../../build/js/custom.js"></script> 
<script src="js/presentacion.js"></script>
  <!-- Tags -->
<script src="../../vendors/bootstrap-tagsinput/dist/bootstrap-tagsinput.js"></script>
 <!-- Dropzone.js -->
  <script src="../../vendors/dropzone/dist/dropzone.js"></script>
     
</body>
</html>
