(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 620,
	height: 3600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Mapadebits10 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits14 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits17 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits18 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits19 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits20 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits22 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits23 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits24 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits25 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.spriteSheet = ss["Investigación_Canvas_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.Investigación_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Evento MouseClick
		//Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		//
		//Instrucciones:
		//1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		//El código se ejecutará al hacer clic en la instancia del símbolo.
		//*/
		//
		//Text1.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, fl_MouseClickHandler_1);
		//
		//function fl_MouseClickHandler_1(event:MouseEvent):void
		//{
		//	// Inicio del código personalizado
		//	// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		//	trace("Ratón pulsado");
		//	// Fin del código personalizado
		//}
		///* Evento MouseClick
		//Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		//
		//Instrucciones:
		//1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		//El código se ejecutará al hacer clic en la instancia del símbolo.
		//*/
		//
		//Text2.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, fl_MouseClickHandler_2);
		//
		//function fl_MouseClickHandler_2(event:MouseEvent):void
		//{
		//	// Inicio del código personalizado
		//	// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		//	trace("Ratón pulsado");
		//	// Fin del código personalizado
		//}
		//
		///* Evento MouseClick
		//Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		//
		//Instrucciones:
		//1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		//El código se ejecutará al hacer clic en la instancia del símbolo.
		//*/
		//
		//Text3.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, fl_MouseClickHandler_3);
		//
		//function fl_MouseClickHandler_3(event:MouseEvent):void
		//{
		//	// Inicio del código personalizado
		//	// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		//	trace("Ratón pulsado");
		//	// Fin del código personalizado
		//}
		//
		///* Evento MouseClick
		//Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		//
		//Instrucciones:
		//1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		//El código se ejecutará al hacer clic en la instancia del símbolo.
		//*/
		//
		//Text4.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, fl_MouseClickHandler_4);
		//
		//function fl_MouseClickHandler_4(event:MouseEvent):void
		//{
		//	// Inicio del código personalizado
		//	// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		//	trace("Ratón pulsado");
		//	// Fin del código personalizado
		//}
		//
		//
		///* Evento MouseClick
		//Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		//
		//Instrucciones:
		//1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		//El código se ejecutará al hacer clic en la instancia del símbolo.
		//*/
		//
		//Text5.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, fl_MouseClickHandler_5);
		//
		//function fl_MouseClickHandler_5(event:MouseEvent):void
		//{
		//	// Inicio del código personalizado
		//	// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		//	trace("Ratón pulsado");
		//	// Fin del código personalizado
		//}
		//
		///* Evento MouseClick
		//Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		//
		//Instrucciones:
		//1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		//El código se ejecutará al hacer clic en la instancia del símbolo.
		//*/
		//
		//Text6.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, fl_MouseClickHandler_6);
		//
		//function fl_MouseClickHandler_6(event:MouseEvent):void
		//{
		//	// Inicio del código personalizado
		//	// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		//	trace("Ratón pulsado");
		//	// Fin del código personalizado
		//}
		//
		///* Evento MouseClick
		//Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		//
		//Instrucciones:
		//1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		//El código se ejecutará al hacer clic en la instancia del símbolo.
		//*/
		//
		//Text7.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, fl_MouseClickHandler_7);
		//
		//function fl_MouseClickHandler_7(event:MouseEvent):void
		//{
		//	// Inicio del código personalizado
		//	// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		//	trace("Ratón pulsado");
		//	// Fin del código personalizado
		//}
		//
		///* Evento MouseClick
		//Al hacer clic en la instancia del símbolo especificado, se ejecuta una función a la que puede añadir su código personalizado.
		//
		//Instrucciones:
		//1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
		//El código se ejecutará al hacer clic en la instancia del símbolo.
		//*/
		//
		//textField_2.addEventListener(MouseEvent.RIGHT_MOUSE_DOWN, fl_MouseClickHandler_16);
		//
		//function fl_MouseClickHandler_16(event:MouseEvent):void
		//{
		//	// Inicio del código personalizado
		//	// Este código de ejemplo muestra las palabras "Ratón pulsado" en el panel Salida.
		//	trace("Ratón pulsado");
		//	// Fin del código personalizado
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.Text1 = new cjs.Text("Octubre", "bold 18px 'Arial'");
	this.Text1.name = "Text1";
	this.Text1.lineHeight = 22;
	this.Text1.lineWidth = 364;
	this.Text1.setTransform(83.1,2081.3);

	this.instance = new lib.Mapadebits25();
	this.instance.setTransform(83.1,2277.4,0.418,0.418);

	this.Text1_1 = new cjs.Text("Noviembre", "bold 18px 'Arial'");
	this.Text1_1.name = "Text1_1";
	this.Text1_1.lineHeight = 22;
	this.Text1_1.lineWidth = 364;
	this.Text1_1.setTransform(83.1,2253.3);

	this.Text1_2 = new cjs.Text("2015", "bold 18px 'Arial'");
	this.Text1_2.name = "Text1_2";
	this.Text1_2.lineHeight = 22;
	this.Text1_2.lineWidth = 364;
	this.Text1_2.setTransform(35.2,2040.3);

	this.instance_1 = new lib.Mapadebits24();
	this.instance_1.setTransform(83.1,2105.4);

	this.Text3 = new cjs.Text("                                                                                \n                                                                        \n                                                                                                            ", "bold 18px 'Arial'", "#0033FF");
	this.Text3.name = "Text3";
	this.Text3.lineHeight = 22;
	this.Text3.lineWidth = 197;
	this.Text3.setTransform(358.4,3488.8);

	this.Text3_1 = new cjs.Text("                                                                                \n                                                                        \n                                                                                                            ", "bold 18px 'Arial'", "#0033FF");
	this.Text3_1.name = "Text3_1";
	this.Text3_1.lineHeight = 22;
	this.Text3_1.lineWidth = 193;
	this.Text3_1.setTransform(87.5,3479.6);

	this.instance_2 = new lib.Mapadebits23();
	this.instance_2.setTransform(85.5,3086.6,0.73,0.73);

	this.Text1_3 = new cjs.Text("Junio", "bold 18px 'Arial'");
	this.Text1_3.name = "Text1_3";
	this.Text1_3.lineHeight = 22;
	this.Text1_3.lineWidth = 364;
	this.Text1_3.setTransform(85.5,2923.1);

	this.instance_3 = new lib.Mapadebits22();
	this.instance_3.setTransform(85.5,2947.2);

	this.Text1_4 = new cjs.Text("Diana Carolina Vargas                 dicavagi@misena.edu.co", "bold 18px 'Arial'", "#0033FF");
	this.Text1_4.name = "Text1_4";
	this.Text1_4.lineHeight = 22;
	this.Text1_4.lineWidth = 524;
	this.Text1_4.setTransform(73,1188.6,0.975,1);

	this.Text1_5 = new cjs.Text("Christian Zetty Arenas                 czettya@misena.edu.co", "bold 18px 'Arial'", "#0033FF");
	this.Text1_5.name = "Text1_5";
	this.Text1_5.lineHeight = 22;
	this.Text1_5.lineWidth = 524;
	this.Text1_5.setTransform(73,1140.4,0.975,1);

	this.Text1_6 = new cjs.Text("Diana Carolina Galvez Coy         dcgalvez6@misena.edu.co", "bold 18px 'Arial'", "#0033FF");
	this.Text1_6.name = "Text1_6";
	this.Text1_6.lineHeight = 22;
	this.Text1_6.lineWidth = 511;
	this.Text1_6.setTransform(73.1,1092.2);

	this.Text1_7 = new cjs.Text("Instructor SENNOVA", "bold 18px 'Arial'");
	this.Text1_7.name = "Text1_7";
	this.Text1_7.lineHeight = 22;
	this.Text1_7.lineWidth = 315;
	this.Text1_7.setTransform(45,1164.5);

	this.Text1_8 = new cjs.Text("Instructor SENNOVA", "bold 18px 'Arial'");
	this.Text1_8.name = "Text1_8";
	this.Text1_8.lineHeight = 22;
	this.Text1_8.lineWidth = 315;
	this.Text1_8.setTransform(45,1116.3);

	this.Text1_9 = new cjs.Text("Instructor SENNOVA", "bold 18px 'Arial'");
	this.Text1_9.name = "Text1_9";
	this.Text1_9.lineHeight = 22;
	this.Text1_9.lineWidth = 315;
	this.Text1_9.setTransform(45,1068.1);

	this.Text1_10 = new cjs.Text("Andrés Felipe Aguirre García     afaguirreg@misena.edu.co", "bold 18px 'Arial'", "#0033FF");
	this.Text1_10.name = "Text1_10";
	this.Text1_10.lineHeight = 22;
	this.Text1_10.lineWidth = 511;
	this.Text1_10.setTransform(73,1044);

	this.Text1_11 = new cjs.Text("Equipo SENNOVA", "bold 18px 'Arial'");
	this.Text1_11.name = "Text1_11";
	this.Text1_11.lineHeight = 22;
	this.Text1_11.lineWidth = 315;
	this.Text1_11.setTransform(22,852.4);

	this.Text1_12 = new cjs.Text("Jose Fernando Murillo Arango    jfmurilloa@misena.edu.co", "bold 18px 'Arial'", "#0033FF");
	this.Text1_12.name = "Text1_12";
	this.Text1_12.lineHeight = 22;
	this.Text1_12.lineWidth = 524;
	this.Text1_12.setTransform(73,996.8,0.975,1);

	this.Text1_13 = new cjs.Text("Manuel Guillermo Vargas Silva    mvasgass@sena.edu.co", "bold 18px 'Arial'", "#0033FF");
	this.Text1_13.name = "Text1_13";
	this.Text1_13.lineHeight = 22;
	this.Text1_13.lineWidth = 524;
	this.Text1_13.setTransform(73,948.6,0.975,1);

	this.Text1_14 = new cjs.Text("Nestor Eduardo Sanchez Ospina nesanchez51@sena.edu.co", "bold 18px 'Arial'", "#0033FF");
	this.Text1_14.name = "Text1_14";
	this.Text1_14.lineHeight = 22;
	this.Text1_14.lineWidth = 524;
	this.Text1_14.setTransform(73,900.5,0.975,1);

	this.Text1_15 = new cjs.Text("Octubre", "bold 18px 'Arial'");
	this.Text1_15.name = "Text1_15";
	this.Text1_15.lineHeight = 22;
	this.Text1_15.lineWidth = 364;
	this.Text1_15.setTransform(83.1,3227.8);

	this.Text1_16 = new cjs.Text("2017", "bold 18px 'Arial'");
	this.Text1_16.name = "Text1_16";
	this.Text1_16.lineHeight = 22;
	this.Text1_16.lineWidth = 364;
	this.Text1_16.setTransform(35.2,2885.6);

	this.Text1_17 = new cjs.Text("Diciembre", "bold 18px 'Arial'");
	this.Text1_17.name = "Text1_17";
	this.Text1_17.lineHeight = 22;
	this.Text1_17.lineWidth = 364;
	this.Text1_17.setTransform(83.1,2666.5);

	this.Text1_18 = new cjs.Text("Reconocimientos", "bold 18px 'Arial'");
	this.Text1_18.name = "Text1_18";
	this.Text1_18.lineHeight = 22;
	this.Text1_18.lineWidth = 364;
	this.Text1_18.setTransform(0,3424.7);

	this.instance_4 = new lib.Mapadebits20();
	this.instance_4.setTransform(83.1,2690.6,0.861,0.861);

	this.instance_5 = new lib.Mapadebits19();
	this.instance_5.setTransform(83.1,3251.9,1.18,1.18);

	this.instance_6 = new lib.Mapadebits18();
	this.instance_6.setTransform(347.7,3476,0.712,0.712);

	this.Text1_19 = new cjs.Text("Líder TECNOACADEMIA", "bold 18px 'Arial'");
	this.Text1_19.name = "Text1_19";
	this.Text1_19.lineHeight = 22;
	this.Text1_19.lineWidth = 315;
	this.Text1_19.setTransform(45,924.5);

	this.Text1_20 = new cjs.Text("Líder de semilleros de investigación", "bold 18px 'Arial'");
	this.Text1_20.name = "Text1_20";
	this.Text1_20.lineHeight = 22;
	this.Text1_20.lineWidth = 315;
	this.Text1_20.setTransform(45,1019.9);

	this.Text1_21 = new cjs.Text("Líder grupo de investigación", "bold 18px 'Arial'");
	this.Text1_21.name = "Text1_21";
	this.Text1_21.lineHeight = 22;
	this.Text1_21.lineWidth = 315;
	this.Text1_21.setTransform(45,972.7);

	this.Text1_22 = new cjs.Text("Líder SENNOVA", "bold 18px 'Arial'");
	this.Text1_22.name = "Text1_22";
	this.Text1_22.lineHeight = 22;
	this.Text1_22.lineWidth = 315;
	this.Text1_22.setTransform(45,876.5);

	this.Text1_23 = new cjs.Text("Proceso de inscripción de ponencia en sala", "bold 18px 'Arial'", "#0033FF");
	this.Text1_23.name = "Text1_23";
	this.Text1_23.lineHeight = 22;
	this.Text1_23.lineWidth = 423;
	this.Text1_23.setTransform(52.4,1881.1);

	this.Text1_24 = new cjs.Text("Innovación y desarrollo tecnológico", "bold 18px 'Arial'", "#0033FF");
	this.Text1_24.name = "Text1_24";
	this.Text1_24.lineHeight = 22;
	this.Text1_24.lineWidth = 308;
	this.Text1_24.setTransform(134.2,1454.2);

	this.Text1_25 = new cjs.Text("Investigación aplicada", "bold 18px 'Arial'", "#0033FF");
	this.Text1_25.name = "Text1_25";
	this.Text1_25.lineHeight = 22;
	this.Text1_25.lineWidth = 308;
	this.Text1_25.setTransform(133,1431.1);

	this.Text1_26 = new cjs.Text("Servicios tecnológicos", "bold 18px 'Arial'", "#0033FF");
	this.Text1_26.name = "Text1_26";
	this.Text1_26.lineHeight = 22;
	this.Text1_26.lineWidth = 308;
	this.Text1_26.setTransform(133,1407);

	this.Text1_27 = new cjs.Text("Modernización de ambientes", "bold 18px 'Arial'", "#0033FF");
	this.Text1_27.name = "Text1_27";
	this.Text1_27.lineHeight = 22;
	this.Text1_27.lineWidth = 308;
	this.Text1_27.setTransform(133,1382.9);

	this.Text1_28 = new cjs.Text("Proyectos", "bold 18px 'Arial'", "#0033FF");
	this.Text1_28.name = "Text1_28";
	this.Text1_28.lineHeight = 22;
	this.Text1_28.lineWidth = 248;
	this.Text1_28.setTransform(92.9,1358.8);

	this.Text1_29 = new cjs.Text("Listado integrantes", "bold 18px 'Arial'", "#0033FF");
	this.Text1_29.name = "Text1_29";
	this.Text1_29.lineHeight = 22;
	this.Text1_29.lineWidth = 248;
	this.Text1_29.setTransform(92.9,1334.2);

	this.Text1_30 = new cjs.Text("Proceso de inscripción para presentación de póster", "bold 18px 'Arial'", "#0033FF");
	this.Text1_30.name = "Text1_30";
	this.Text1_30.lineHeight = 22;
	this.Text1_30.lineWidth = 454;
	this.Text1_30.setTransform(51.9,1832.9);

	this.Text1_31 = new cjs.Text("Plantilla para poster", "bold 18px 'Arial'", "#0033FF");
	this.Text1_31.name = "Text1_31";
	this.Text1_31.lineHeight = 22;
	this.Text1_31.lineWidth = 423;
	this.Text1_31.setTransform(100.6,1857);

	this.Text1_32 = new cjs.Text("Cronograma", "bold 18px 'Arial'", "#0033FF");
	this.Text1_32.name = "Text1_32";
	this.Text1_32.lineHeight = 22;
	this.Text1_32.lineWidth = 423;
	this.Text1_32.setTransform(51.9,1808.8);

	this.Text1_33 = new cjs.Text("Convocatoria", "bold 18px 'Arial'", "#0033FF");
	this.Text1_33.name = "Text1_33";
	this.Text1_33.lineHeight = 22;
	this.Text1_33.lineWidth = 563;
	this.Text1_33.setTransform(51.9,1785.7);

	this.Text1_34 = new cjs.Text("Mayo 9: 10º Encuentro local de semilleros de investigación RREDSI", "bold 18px 'Arial'");
	this.Text1_34.name = "Text1_34";
	this.Text1_34.lineHeight = 22;
	this.Text1_34.lineWidth = 584;
	this.Text1_34.setTransform(31.9,1761.6);

	this.Text1_35 = new cjs.Text("Próximos eventos de divulgación científica/Tecnológica (2018)", "bold 18px 'Arial'");
	this.Text1_35.name = "Text1_35";
	this.Text1_35.lineHeight = 22;
	this.Text1_35.lineWidth = 540;
	this.Text1_35.setTransform(0,1721.6);

	this.Text1_36 = new cjs.Text("GPI", "bold 18px 'Arial'", "#339999");
	this.Text1_36.name = "Text1_36";
	this.Text1_36.lineHeight = 22;
	this.Text1_36.lineWidth = 248;
	this.Text1_36.setTransform(53.9,1614.9);

	this.Text1_37 = new cjs.Text("TTICS", "bold 18px 'Arial'", "#339999");
	this.Text1_37.name = "Text1_37";
	this.Text1_37.lineHeight = 22;
	this.Text1_37.lineWidth = 248;
	this.Text1_37.setTransform(53.9,1513.2);

	this.Text1_38 = new cjs.Text("Teleinformatica, desarrollo de sist. de inf. y Telecomunicaciones", "bold 18px 'Arial'");
	this.Text1_38.name = "Text1_38";
	this.Text1_38.lineHeight = 22;
	this.Text1_38.lineWidth = 570;
	this.Text1_38.setTransform(45,772.1);

	this.Text1_39 = new cjs.Text("Tecnificación de la agricultura", "bold 18px 'Arial'");
	this.Text1_39.name = "Text1_39";
	this.Text1_39.lineHeight = 22;
	this.Text1_39.lineWidth = 435;
	this.Text1_39.setTransform(45,748);

	this.Text1_40 = new cjs.Text("Robótica", "bold 18px 'Arial'");
	this.Text1_40.name = "Text1_40";
	this.Text1_40.lineHeight = 22;
	this.Text1_40.lineWidth = 435;
	this.Text1_40.setTransform(45,723.9);

	this.Text1_41 = new cjs.Text("Investigación formativa", "bold 18px 'Arial'");
	this.Text1_41.name = "Text1_41";
	this.Text1_41.lineHeight = 22;
	this.Text1_41.lineWidth = 435;
	this.Text1_41.setTransform(45,699.8);

	this.Text1_42 = new cjs.Text("Diseño y manufactura", "bold 18px 'Arial'");
	this.Text1_42.name = "Text1_42";
	this.Text1_42.lineHeight = 22;
	this.Text1_42.lineWidth = 435;
	this.Text1_42.setTransform(45,675.7);

	this.Text1_43 = new cjs.Text("Desarrollo de Productos con Energías Alternativas", "bold 18px 'Arial'");
	this.Text1_43.name = "Text1_43";
	this.Text1_43.lineHeight = 22;
	this.Text1_43.lineWidth = 435;
	this.Text1_43.setTransform(45,651.6);

	this.Text1_44 = new cjs.Text("Líneas de investigación", "bold 18px 'Arial'");
	this.Text1_44.name = "Text1_44";
	this.Text1_44.lineHeight = 22;
	this.Text1_44.lineWidth = 248;
	this.Text1_44.setTransform(22,627.5);

	this.Text1_45 = new cjs.Text("GroupLAC", "bold 18px 'Arial'", "#0033FF");
	this.Text1_45.name = "Text1_45";
	this.Text1_45.lineHeight = 22;
	this.Text1_45.lineWidth = 248;
	this.Text1_45.setTransform(22,603.4);

	this.instance_7 = new lib.Mapadebits17();
	this.instance_7.setTransform(83.1,2533.1,0.083,0.207);

	this.Text1_46 = new cjs.Text("Presentación SENNOVA", "bold 18px 'Arial'", "#0033FF");
	this.Text1_46.name = "Text1_46";
	this.Text1_46.lineHeight = 22;
	this.Text1_46.lineWidth = 248;
	this.Text1_46.setTransform(309.2,245);

	this.Text1_47 = new cjs.Text("Qué es SENNOVA?", "bold 18px 'Arial'", "#0033FF");
	this.Text1_47.name = "Text1_47";
	this.Text1_47.lineHeight = 22;
	this.Text1_47.lineWidth = 248;
	this.Text1_47.setTransform(53.9,246);

	this.Text1_48 = new cjs.Text("Noviembre", "bold 18px 'Arial'");
	this.Text1_48.name = "Text1_48";
	this.Text1_48.lineHeight = 22;
	this.Text1_48.lineWidth = 364;
	this.Text1_48.setTransform(83.1,2509);

	this.Text1_49 = new cjs.Text("2016", "bold 18px 'Arial'");
	this.Text1_49.name = "Text1_49";
	this.Text1_49.lineHeight = 22;
	this.Text1_49.lineWidth = 364;
	this.Text1_49.setTransform(35.2,2466.9);

	this.Text1_50 = new cjs.Text("Participación en eventos de divulgación científica/Tecnológica", "bold 18px 'Arial'");
	this.Text1_50.name = "Text1_50";
	this.Text1_50.lineHeight = 22;
	this.Text1_50.lineWidth = 537;
	this.Text1_50.setTransform(0,1994);

	this.instance_8 = new lib.Mapadebits14();
	this.instance_8.setTransform(0,309,1.195,1.194);

	this.Text1_51 = new cjs.Text("Grupo de investigación", "bold 18px 'Arial'");
	this.Text1_51.name = "Text1_51";
	this.Text1_51.lineHeight = 22;
	this.Text1_51.lineWidth = 201;
	this.Text1_51.setTransform(209.5,438.2);

	this.instance_9 = new lib.Mapadebits12();
	this.instance_9.setTransform(194.6,479.8,0.225,0.225);

	this.instance_10 = new lib.Mapadebits11();
	this.instance_10.setTransform(73,3465.1,0.363,0.363);

	this.instance_11 = new lib.Mapadebits10();
	this.instance_11.setTransform(0,0,0.838,0.838);

	this.Text1_52 = new cjs.Text("", "bold 18px 'Arial'", "#0033FF");
	this.Text1_52.name = "Text1_52";
	this.Text1_52.lineHeight = 22;
	this.Text1_52.lineWidth = 394;
	this.Text1_52.setTransform(53.9,1268.6);

	this.instance_12 = new lib.Mapadebits9();
	this.instance_12.setTransform(52.2,1268.6,0.336,0.336);

	this.Text1_53 = new cjs.Text("Semilleros de investigación", "bold 18px 'Arial'");
	this.Text1_53.name = "Text1_53";
	this.Text1_53.lineHeight = 22;
	this.Text1_53.lineWidth = 248;
	this.Text1_53.setTransform(16.9,1244.5);

	this.textField_2 = new cjs.Text("", "bold 18px 'Arial'");
	this.textField_2.name = "textField_2";
	this.textField_2.lineHeight = 22;
	this.textField_2.lineWidth = 616;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.textField_2},{t:this.Text1_53},{t:this.instance_12},{t:this.Text1_52},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.Text1_51},{t:this.instance_8},{t:this.Text1_50},{t:this.Text1_49},{t:this.Text1_48},{t:this.Text1_47},{t:this.Text1_46},{t:this.instance_7},{t:this.Text1_45},{t:this.Text1_44},{t:this.Text1_43},{t:this.Text1_42},{t:this.Text1_41},{t:this.Text1_40},{t:this.Text1_39},{t:this.Text1_38},{t:this.Text1_37},{t:this.Text1_36},{t:this.Text1_35},{t:this.Text1_34},{t:this.Text1_33},{t:this.Text1_32},{t:this.Text1_31},{t:this.Text1_30},{t:this.Text1_29},{t:this.Text1_28},{t:this.Text1_27},{t:this.Text1_26},{t:this.Text1_25},{t:this.Text1_24},{t:this.Text1_23},{t:this.Text1_22},{t:this.Text1_21},{t:this.Text1_20},{t:this.Text1_19},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.Text1_18},{t:this.Text1_17},{t:this.Text1_16},{t:this.Text1_15},{t:this.Text1_14},{t:this.Text1_13},{t:this.Text1_12},{t:this.Text1_11},{t:this.Text1_10},{t:this.Text1_9},{t:this.Text1_8},{t:this.Text1_7},{t:this.Text1_6},{t:this.Text1_5},{t:this.Text1_4},{t:this.instance_3},{t:this.Text1_3},{t:this.instance_2},{t:this.Text3_1},{t:this.Text3},{t:this.instance_1},{t:this.Text1_2},{t:this.Text1_1},{t:this.instance},{t:this.Text1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310,1800,620.1,3600.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;