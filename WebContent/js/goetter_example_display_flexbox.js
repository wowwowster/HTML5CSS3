	jQuery(document)
			.ready(
					function() {
						
						 
	 					  	// Change this value to adjust the amount of blur
							  var BLUR_RADIUS = 100;

							  var canvas = document.querySelector('[data-canvas]');
							  var canvasContext = canvas.getContext('2d');
							  
							  var image = new Image();
							   image.src = "img/220px-LeisureUK.jpg" ;
							  
							  var drawBlur = function() {
							    var w = canvas.width;
							    var h = canvas.height;
							    canvasContext.drawImage(image, 0, 0, w, h);
							    stackBlurCanvasRGBA('heroCanvas', 0, 0, w, h, BLUR_RADIUS);
							  };
							  
							  image.onload = function() {
							    drawBlur();
							  } 
 
						
						

						$("#ip_address").mask('0ZZ.0ZZ.0ZZ.SZZ', {
							translation : {
								'Z' : {
									pattern : /[0-9]/,
									optional : true
								},

								'S' : {
									// Remarque : ci -après, on permet * dans le masque de saisie
									pattern : /[0-9+*]/,
									optional : true
								}
							}
						});

						$("#ip_address_extension").mask('ZZ', {
							translation : {
								'Z' : {
									pattern : /[0-9]/,
									optional : true
								},
							}
						});

						/** si on veut sélectionner le premier bouton radio de la section Filtrage IP
						$('[name="creseau"]').first().prop('checked', true); */
						$('[name="creseau"]').eq(1).prop('checked', true);
						disableEnableFiltrage_IP_Zone();

						$('input:radio[name=creseau]')
								.change(
										function() {
											var myRadioB = $('input[name=creseau]');
											var checkedValueB = myRadioB
													.filter(':checked').val();
											var boolDisableEnable = true;
											if (checkedValueB == "N") {
												if ($('#mySelect')
														.has('option').length > 0) {

													if (confirm("Vous souhaitez désactiver le filtrage d'adresse IP. Toutes les plages d'adresse IP seront supprimées. Confirmez-vous ?")) {
														disableEnableFiltrage_IP_Zone();
													} else {
														$('[name="creseau"]')
																.first()
																.prop(
																		'checked',
																		true);
														boolDisableEnable = false;
													}
												}
											}

											if (boolDisableEnable) {
												disableEnableFiltrage_IP_Zone();
											}

										});

						$('a[href="#addIP"]')
								.click(
										function() {
								 
											$('a[href="#addIP"]').addClass(
													"disabled");
											if (!isValidCIDR(document.forms[0].ip_extension.value)) {
												document.forms[0].ip_extension
														.focus();

											} else {
												if (isvalidipplage(document.forms[0].ipchoice.value)) {
													var ipsSelectSize = parseInt($(
															'#mySelect').attr(
															'size'));
													var x = document
															.getElementById("mySelect");
													var valuesFromSelect = Array(ipsSelectSize);
													var i;
													for (i = 0; i < x.length; i++) {
														valuesFromSelect[i] = x.options[i].text;
													}

												 
													var masqueSousReseau = $(
															"#ip_address_extension")
															.val();
													if (masqueSousReseau == null
															|| masqueSousReseau == "") {
														masqueSousReseau = "32";
													}
													var ipPlage = $(
															"#ip_address")
															.val()
															+ "/"
															+ masqueSousReseau;

													if ($.inArray(ipPlage,
															valuesFromSelect) > -1) {
														alert('valeur en doublon');
													} else {

														$('#mySelect')
																.append(
																		$(
																				'<option>',
																				{
																					value : ipPlage,
																					text : ipPlage
																				}));

														ipsSelectSize = ipsSelectSize + 1;
														$('#mySelect').attr(
																'size',
																ipsSelectSize);
														$("#ip_address")
																.val("");
														$(
																"#ip_address_extension")
																.val("");
													}
													document.forms[0].ipchoice
															.focus();
												}
											}
											$('a[href="#addIP"]').removeClass(
													"disabled");
										});
						
						$("p.tips2 strong")
								.eq(0)
								.html(
										"Nous vous invitons à consulter le détail des coûts de garantie par prêt et par barème.<br>Simulation basée sur la tarification applicable depuis le 1er&nbsp;");

						/* gestion de la touche ENTREE  */

						$('form').bind('keypress', function(e) {
							var code = (e.keyCode ? e.keyCode : e.which);
							if (code == 13) {
								alert('Vous avez saisi la touche ENTREE');
							}
						});
  
					});

	$(document).keyup(function(touche) { // on écoute l'évènement keyup()

		var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés

		if (appui == 13) { // si le code de la touche est égal à 13 (Entrée)
			alert('Vous venez d\'appuyer sur la touche Entrée !'); // on affiche une alerte
		}
	});

	function disableEnableFiltrage_IP_Zone() {
		var myRadio = $('input[name=creseau]');
		var checkedValue = myRadio.filter(':checked').val();
		if (checkedValue == 'N') {
			$('.zone_ip *').attr('disabled', true);
			$('a[href="#addIP"]').addClass("disabled");

			// on vide le select de ses options 
			$('#mySelect').empty();
			$('#mySelect').attr('size', 5);
			//pas sur que ca marche $('#mySelect').attr('width', '100px');
		}

		if (checkedValue == 'Y') {
			$('a[href="#addIP"]').removeClass("disabled");
			$('[name="creseau"]').first().prop('checked', true);
			$('.zone_ip *').attr('disabled', false);

		}
	}

	function isvalidipplage(value) {
		var idx = 0;
		var nbpoint = 0;
		var boubouleen = false;
		while (value.indexOf('.', idx) > -1) {
			var sub = value.substring(idx, value.indexOf('.', idx));
			idx = value.indexOf('.', idx) + 1;
			nbpoint = nbpoint + 1;
			if (sub < 256) {
				boubouleen = true;
			} else {
				alert("Merci de saisir une plage IP contenant quatre blocs séparés par un point et pour laquelle chaque bloc est inférieur ou égal à 255. ");
				boubouleen = false;
				return boubouleen;
			}
		}
		var dernierMasque = value.substring(value.lastIndexOf('.') + 1,
				value.length);
		if (dernierMasque < 256) {
			boubouleen = true;
		} else {
			alert("Merci de saisir une plage IP contenant quatre blocs séparés par un point et pour laquelle chaque bloc est inférieur ou égal à 255. ");
			boubouleen = false;
			return boubouleen;
		}

		if (nbpoint != 3) {
			alert("Merci de saisir une plage IP contenant quatre blocs séparés par un point et pour laquelle chaque bloc est inférieur ou égal à 255. ");
			boubouleen = false;
			return boubouleen;
		}

		return boubouleen;
	}

	function isValidCIDR(value) {

		if (value > -1 && value < 33) {
			return true;
		} else {
			alert("Merci de saisir un masque CIDR correct (valeur entre 0 et 32)");
			return false;
		}
	}

	var entityMap = {
		"&" : "&amp;",
		"<": "&lt;",
		    ">" : "&gt;",
		'"' : '&quot;',
		"'" : '&#39;',
		"/" : '&#x2F;'
	};

	function escapeHtml(string) {
		return String(string).replace(/[&<>"'\/]|[\n]/g, function(s) {
			return entityMap[s];
		});
	}

