( function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "../widgets/datepicker" ], factory )
	} else {
		factory( jQuery.datepicker )
	}
}( function( datepicker ) {
	datepicker.regional[ "pt-BR" ] = {
		closeText: "Fechar",
		prevText: "&#x3C;Anterior",
		nextText: "Próximo&#x3E;",
		currentText: "Hoje",
		monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
		"Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
		monthNamesShort: [ "Jan","Fev","Mar","Abr","Mai","Jun",
		"Jul","Ago","Set","Out","Nov","Dez" ],
		dayNames: [
			"Domingo",
			"Segunda-feira",
			"Terça-feira",
			"Quarta-feira",
			"Quinta-feira",
			"Sexta-feira",
			"Sábado"
		],
		dayNamesShort: [ "Dom","Seg","Ter","Qua","Qui","Sex","Sáb" ],
		dayNamesMin: [ "Dom","Seg","Ter","Qua","Qui","Sex","Sáb" ],
		weekHeader: "Sm",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional[ "pt-BR" ] );

	return datepicker.regional[ "pt-BR" ]
	} 
))
