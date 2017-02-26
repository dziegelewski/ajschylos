/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});



// Main function

$(function () {

	var user = {};
	var toDelete = [];
	var logged = false;
	var ajaxIsWorking = false;

	// -------------------
	//

	var appInitialize = function () {
		db('------------- APP STARTED ')

		// Try to log automatically
		if ($.cookie('nick')) {
			database.tryToLogIn($.cookie('nick'), $.cookie('pass'))
		} else {
			viewTo('begin')
		}
		$.scrollTo(0);


		var bindEvents = function () {
			// Log In


			$('#log-submit').click(function (e) {
				e.preventDefault()
				if (ajaxIsWorking) return false;
				loginForm.submit()
			})
			
			// Register
			$('#reg-submit').click(function (e) {
				if (ajaxIsWorking) return false;
				e.preventDefault();
				regForm.submit();
			})
			// Additionals
			$('#add-submit').click(function (e) {
				if (ajaxIsWorking) return false;
				e.preventDefault();
				addForm.submit();
			})
			$('#add-return').click(function (e) {
				if (ajaxIsWorking) return false;
				e.preventDefault();
				addForm.return();
			})
			$('#new-submit').click(function (e) {
				if (ajaxIsWorking) return false;
				e.preventDefault();
				newForm.submit();
			})

			$('#new-selfdelete').click(function (e) {
				if (ajaxIsWorking) return false;
				e.preventDefault();
				toDelete = [user.id];
				description("Usuwanie", "Czy na pewno usunąć konto w serwisie?")
					viewTo('ensure');
			})

			$('#new-return').click(function (e) {
				if (ajaxIsWorking) return false;
				e.preventDefault();
				newForm.return();
			})

			$('#toTheTop').click(function () {
				$.scrollTo($('h1'), 200);
			});

			$('#toTheBottom').click(function () {
				$.scrollTo($('#bottomAnchor'), 200);
			});


			$('#btn-logout').click(function (e) {
				if (ajaxIsWorking) return false;
				loggedOut();
			})

			$('#btn-add').click(function (e) {
				if (ajaxIsWorking) return false;
				if (user.admin) {
					addOrEditUser('add');
				}
			})

			$('#btn-selfedit').click(function (e) {
				if (ajaxIsWorking) return false;
					var selector = ($('tr[data-user-id="' + user.id + '"]'))
					addOrEditUser(selector, true);
			})

			$('#btn-delete').click(function (e) {
				if (ajaxIsWorking) return false;
					viewTo('ensure');

					description("Usuwanie", "Czy na pewno usunąć poniższych użytkowników?")
					var usersToDeleteInfo = "";
					for (var i=0; i<toDelete.length; i++) {
						var nick = $('tr[data-user-id="' + toDelete[i] + '"]').attr('data-user-nick')
						usersToDeleteInfo += nick + "<br />"
					}
					$('p#usersToDelete').html(usersToDeleteInfo);
			})

			$('#ensure-yes').click(function (e) {
				if (ajaxIsWorking) return false;
				e.preventDefault()
				database.tryToDelete(toDelete)
			})

			$('#ensure-no').click(function (e) {
				if (ajaxIsWorking) return false;
				e.preventDefault()
				loggedIn();
			})

			// Ajax effects
			$(document).ajaxStart(function() {
				ajaxIsWorking = true;
			  	$('body').addClass('waiting');
			});

			$(document).ajaxStop(function() {
				ajaxIsWorking = false;
				$('body').removeClass('waiting');
			});

			// Session expiration
			$('body').click(function (e) {
				setSessionTimer();
			})
		}

		bindEvents();
	}


	// ------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------
	// Forms

	var Form = function (selector, shortSelector) {
		this.selector = $('form.' + selector)
		this.shortSelector = shortSelector;

		this.clearInputs = function () {
			this.selector.find("input:not([type='submit'])").val("")
		}
		
		this.clearErrors = function () {
			this.selector.find('.error').text("").removeClass('visible')
		}

		this.error = function (message, errorType) {
			this.flag = false;
			errorType = errorType || "";
			if (errorType.length) {
				errorType = ".error-" + errorType;
			}
			var selector = this.selector.find('.error' + errorType)
			selector.text(message).removeClass('visible')
			setTimeout(function () {
				selector.text(message).addClass('visible')	
			}, 10)
		}

		this.newUserValidation = function (obligatoryNewPassword) {

			this.flag = true;
			this.clearErrors()
			this.nick = $('#' + this.shortSelector + '-nick').val()
			this.email = $('#' + this.shortSelector + '-email').val()
			this.pass = $('#' + this.shortSelector + '-pass').val()
			this.pass2 = $('#' + this.shortSelector + '-pass2').val()
		
			// Nick validation
			if (!this.nick.length) {
				this.error('Proszę wprowadzić nazwę użytkownika', 'nick')
			} else if (this.nick.length < 3 || this.nick.length > 20) {
				this.error("Nazwa użytkownika powinna liczyć od 3 do 20 znaków", "nick")
			}
			
			// Email vaildation
			if (!validateEmail(this.email)) {
				this.error('Proszę wprowadzić poprawny adres e-mail', 'email')
				$('#reg-email').val("")
			}
			
			// Password validation
			if (obligatoryNewPassword || (this.pass.length || this.pass2.length)) {
				// Start validation
				$('#' + this.shortSelector + '-pass').val("")
				$('#' + this.shortSelector + '-pass2').val("")
				if (!this.pass.length || !this.pass2.length) {
					this.error('Proszę wprowadzić poprawne hasło w obu polach.', 'pass')
				} else if (this.pass.length < 7) {
					this.error('Hasło musi liczyć co najmniej 7 znaków.', 'pass')

				} else if (this.pass !== this.pass2) {
					this.error('Podane hasła nie są identyczne.', 'pass')
				}
			}
		}

		this.additionalInfoValidation = function () {

			this.name = $('#' + this.shortSelector + '-name').val();
			this.surname = $('#' + this.shortSelector + '-surname').val();
			this.address = $('#' + this.shortSelector + '-address').val();

			if (this.name.length * this.surname.length * this.address.length === 0) {
			this.error("Należy wypełnić wszystkie pola.", 'rest')
			} 
		}
	};


// -------------------------------------
// -------------------------------------

	var loginForm = new Form('login')
	loginForm.submit = function () {
			this.nick = $('#log-nick').val()
			this.pass = $('#log-pass').val()

			this.clearErrors();
			this.clearInputs()

			if (!this.nick.length) {
				this.error('Proszę wprowadzić nazwę użytkownika.')
			} else if (!this.pass.length) {
				this.error('Proszę wprowadzić hasło.')
			} else {
				database.tryToLogIn(this.nick, this.pass)
			}
	}


	var regForm = new Form ('register', 'reg')
	regForm.submit = function () {
		this.flag = true;
		this.newUserValidation('reg');

		if (this.flag) {
			database.tryToRegister(this.nick, this.pass, this.email)
		}

	}

	var addForm = new Form ('additional', 'add')
	addForm.return = function () {
		this.clearErrors();
		clearAllInputs()
		deleteCookies();
		viewTo('begin')
		description("Witaj.", "Proszę zarejestrować się lub zalogować do systemu.")

	}
	addForm.submit = function () {
		this.flag = true;
		this.clearErrors();
		this.additionalInfoValidation()
		if (this.flag) {
			database.tryToAddInfo(this.name, this.surname, this.address);
		}
	}

	var newForm = new Form ('newUser', 'new');
	newForm.submit = function () {
		this.flag = true;

		this.newUserValidation(this.addingNewUser)
		this.additionalInfoValidation()
		if (this.flag) {
			database.tryToUpdate()
		}
	}
	newForm.return = function () {
		this.clearErrors();
		clearAllInputs()
		loggedIn();
	}
	newForm.enableInputs = function (bool) {
		$('#new-nick').prop("disabled", !bool);
		$('#new-pass').prop("disabled", !bool);
		$('#new-pass2').prop("disabled", !bool);
	}



// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// DATABASE

var database = {

	tryToUpdate: function () {

		var data = {
			id: newForm.id,
			nick: newForm.nick,
			oldNick: newForm.oldNick,
			name: newForm.name,
			surname: newForm.surname,
			email: newForm.email,
			address: newForm.address,
			pass: newForm.pass,
		};

		if (newForm.addingNewUser) {
			data.newUser = true;
			db('------------- NEW USER BY ADMIN ')
		} else {
			db('------------- UPDATE ')

		}

		$.ajax({
			type: "POST",
			url: 'php/update.php',
			dataType: 'json',
			data: data,
			cache: false,

			
			success: function (output) {
				db('database updating success')
				db(output['log'])

				if (!phpNickValidationError(output, newForm)) {
					db('no validation error')
					if ((output.hasOwnProperty('success'))) {
						db('successfully added or updated user')
						if (data.id === user.id) {
							deleteCookies()
						}
						if (data.newUser) {
							loggedIn('last')
						} else {
							loggedIn(data.id)
						}
						// If user edits himself/herself, dont bother about cookies
					} else {
						db('failed while adding or updating user')
					}
				} else {
					db('validation error occured')
				}
			},
			
			error: function (msg) {
				db('database updating error')
				console.log(msg)
			},

		})


	},

	tryToDelete: function (toDelete) {
		db('------------- DELETE USERS ')
		db("Users to delete:")
		console.log(toDelete)

		$.ajax({
			type: 'POST',
			url: "php/remove.php",
			dataType: 'json',
			data: {toDelete: toDelete},

			success:function (output) {
				db('database deleting success')
				db('Output log: ' + output['log'])
				if (toDelete[0] == user.id) {
					loggedOut("selfdelete")
				} else {
					loggedIn();
				}
			},

			error: function (msg) {
				db('databse deleting error')
				console.log(msg)
			}
		})
	},

	tryToAddInfo: function (name, surname, address) {
		db('------------- ADDITIONAL INFO ')

		$.ajax({
			type: 'POST',
			url: "php/add.php",
			dataType: "json",
			data: {
				id: user.id,
				name: name,
				surname: surname,
				address: address,
			},

			success: function (output) {
				db('Output log:' + output['log'])
				db('database additional info success')
				if (output['success'] === true) {
				db('Succes -> log in')
					user.name = name;
					user.surname = surname;
					user.address = address;
				db("Now we know everything about user:")
				console.log(user)
					loggedIn();
				} else {
				db('An error occured')
					addForm.error("Wystąpił błąd.")
				}
			},

			error: function (msg) {
				db('database additional info error')
				console.log(msg)
			}
		})
	},

	tryToRegister: function (nick, pass, email) {
		db('------------- REGISTER ')

		$.ajax({
			type: "POST",
			url: "php/register.php",
			dataType: "json",
			data: {
				nick: nick,
				pass: pass,
				email: email,
			},

			success: function (output) {
				db('database register success')
				db("Output log: " + output['log']);

				if (!phpNickValidationError(output, regForm)) {
					db('No errors, try to log in as ' + nick + ' ' + pass)
					database.tryToLogIn(nick, pass)
				}
			},

			error: function (msg) {
				db('database register error')
				console.log(msg)
			},
		})
	},


	tryToLogIn: function (nick, pass) {
		db('------------- LOGGING ')

		var data = {
			nick: nick,
			pass: pass
		}

		 $.ajax({
			type: "GET",
			url: "php/login.php",
			dataType: "json",
			cache: false,
			data: data,

			complete: function() {
			},

			success: function(output) {
				db('databse logging in success')
				db('Output log:' + output['log'])
					console.log(resources)

				if (output.hasOwnProperty('userData')) {
					db('There IS such user in database!')
					$.cookie('nick', nick)
					$.cookie('pass', pass)

					var resources = output['userData']
					
					user.id = resources['id']
					user.nick = resources['nick']
					user.email = resources['email']
					user.admin = Number(resources['admin'])
					user.name = resources['name']
					user.surname = resources['surname']
					user.address = resources['address']
					
					db("Now we know about user: ")
					console.log(user)
					if (user.name === "") {
						db("This is only basic information. Adding rest of them.")
						registered()
					} else {
						db('So all info is present.')

						loggedIn()
						
					}

				} else {
				db('Sadly there is NO such user in database...')
				
					viewTo('begin')
						loginForm.error('Nieprawidłowe login lub hasło.')
				}
			},

			error: function (msg) {
				db('database logging in error')
				console.log(msg)
			},

		})
	}, 

	tryToPrintDatabase: function (modified) {
		db('------------- PRINT TABLE ')

		$.ajax({
			type: "POST",
			url: "php/printDatabase.php",
			dataType: "json",
			

			success: function (json) {
				db('printing success')
				var allUsers = json['howMany'] -1;
				var displayedUsers = json['numRows'] -1;
				// description("Witaj, " + user.nick + ".", "Wyświetlanie " + displayedUsers + " z " + allUsers + " użytkowników w bazie danych.")
				description("Witaj, " + user.nick + ".", "W bazie danych znajduje się " + allUsers + " użytkowników.")
				var tableBody = $('table#usersTable').find('tbody');
				tableBody.html("");
				if (user.admin) {
					tableBody.addClass('admin')
				} else {
					tableBody.removeClass('admin')

				}

				for (var i=0; i<displayedUsers+1; i++) {
					var jsrow = json[i];
					var htmlrow = '<tr data-user-id="' + jsrow[0] + '" '
					htmlrow += 'data-user-nick="' + jsrow[1] + '">'
	
					htmlrow += '<td>'
					htmlrow += '<div><form><label><input type="checkbox"></label></form></div>'
					if (user.admin) {
						htmlrow += '<div  class="gear"><div></div></div>'
					}
					htmlrow += '</td>';
					
					htmlrow += '<td>' + i + '</td>';
					htmlrow += '<td>' + jsrow[1] + '</td>';
					htmlrow += '<td>' + jsrow[2] + '</td>';
					htmlrow += '<td>' + jsrow[3] + '</td>';
					htmlrow += '<td>' + jsrow[4] + '</td>';
					htmlrow += '<td>' + jsrow[6] + '</td>';
					htmlrow += '</tr>';
					tableBody.append(htmlrow)
				}

				tableBody.find('[data-user-id="' + user.id +'"]').addClass('me');
				if (!user.admin) {
					$('table td:first-child, th:first-child').hide()
				} else {
					$('table td:first-child, th:first-child').show()
				}

				// New bindings
				$('.gear').on('click', function (e) {
					var selector = $(this).closest('tr')
					addOrEditUser(selector);
				})

				toDelete = [];
				$('td form :checkbox').change(function() {
					var id = $(this).closest('tr').attr('data-user-id')
					if (this.checked) {
						toDelete.push(id);
					} else {
						var findElement = toDelete.indexOf(id)
						toDelete.splice(findElement);
					}
					if (toDelete.length) {
						$('#btn-delete').prop("disabled", false)
					} else {
						$('#btn-delete').prop("disabled", true)

					}
				})

				if (modified) {
					if (modified === "last") {
						var modifiedRow = $('tr:last-child')
					} else {
						var modifiedRow = $('tr[data-user-id="' + modified + '"]')
					}
					modifiedRow.addClass('modified');
					$.scrollTo(modifiedRow, 0);

				}
			},

			error: function (msg) {
				db('printing error')
				console.log(msg)
			}
		})
	}

}


	var sessionTimeLeft;
	setInterval(function () {
		if (logged) {
			sessionTimeLeft --;
			if (sessionTimeLeft < 0) {
			loggedOut("expire")
			}
		}
	}, 1000)

	function setSessionTimer () {
		sessionTimeLeft = 15 * 60;
	}

	function loggedIn (modified) {
		logged = true;
		setSessionTimer();
		clearAllInputs();
		if (user.admin) {
			$('.fixedMenu .adminOption').show()
			$('.fixedMenu .userOption').hide()
		} else {
			$('.fixedMenu .adminOption').hide()
			$('.fixedMenu .userOption').show()

		}
		viewTo('logged')
		database.tryToPrintDatabase(modified)
	}

	function loggedOut (option) {
		db('------------- LOGGED OUT ')
		logged = false;
		user = {};
		clearAllInputs()

		deleteCookies();
		clearAllInputs();
		viewTo('begin')
		if (!option) {
			description("", "Nastąpiło wylogowanie. Można zalogować się ponownie.")
		} else if (option === "expire") {
			description("", "Sesja wygasła. Proszę zalogować się ponownie.")
		} else if (option === "selfdelete") {
			description("", "Konto zostało usunięte z serwisu.")
		}
	}

	function clearAllInputs () {
		$('input:not([type="submit"])').val("");
	}

	function registered () {
		addForm.clearInputs();
		viewTo('additional')
		description("Witamy w serwisie.", "Aby przejść dalej, należy uzupełnić pozostałe informacje.")
	}

	function addOrEditUser (a, selfedit) {
		newForm.clearInputs();
		newForm.clearErrors();

		
		var selfdeleteButton = $('#new-selfdelete')
		selfdeleteButton.show();
		if (selfedit && !user.admin) {
			selfdeleteButton.prop("disabled", false)
		} else {
			selfdeleteButton.prop("disabled", true)
			if (!selfedit) {
			selfdeleteButton.hide();
			}
		}

		newForm.enableInputs(true);

		$('#new-pass').prop("disabled", false)
		$('#new-pass2').prop("disabled", false)

		if (a === "add") {
			newForm.addingNewUser = true;
		description("Nowy użytkownik", "Wprowadź dane nowego użytkownika.")
		$('#new-pass').prop("placeholder", "Hasło")
		} else {
			newForm.id = a.attr('data-user-id');
			newForm.oldNick = a.attr('data-user-nick');
			newForm.addingNewUser = false;
			if (a.hasClass('me') && user.admin) {
				newForm.enableInputs(false)
			}

		$('#new-pass').prop("placeholder", "Nowe hasło (opcjonalnie)")


		var selector = a.find('td')
		var paste = function (nr) {
			return selector.eq(nr).text()
		}
		
		newForm.oldNick = paste(2);
		$('#new-nick').val(paste(2))
		$('#new-name').val(paste(3))
		$('#new-surname').val(paste(4))
		$('#new-address').val(paste(5))
		$('#new-email').val(paste(6))

		
		description("Edycja użytkownika " + paste(2), "Wprowadź nowe dane użytkownika.")
		}

		viewTo('newUser');
	}


	function deleteCookies() {
		$.removeCookie('nick')
		$.removeCookie('pass')
	}

	function viewTo (view) {
		$('.container').attr('data-view', view)
	}

	function description (header, txt) {
		$('h2').text(header).next().text(txt)
	}

	function phpNickValidationError(output, form) {
		if (output === "not-unique-error")  {
			db('Not-unique error')
			form.error("Użytkownik o podanej nazwie już istnieje", 'nick')
			return true;
		} else if (output === "not-allnum-error") {
			db('Not-allnum error')
			form.error("Nazwa użytkownika może zawierać tylko litery bez polskich znaków oraz cyfry.", 'nick')
			return true;
		}
		return false;
	}


	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

	// debugging console
	function db (text) {
		var d = new Date();
		console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "------" +text);
	}


	appInitialize();


})