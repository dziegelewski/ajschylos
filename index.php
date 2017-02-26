<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>Ajschylos | System rejestracji użytkownika</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css">
	<link rel="Shortcut icon" href="icon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head> 
<body>

<div class="container" id="container">
	<h1>Ajschylos</h1> 

	<div class="dbError">
	<?php
	require_once('php/base.php');
	?>
	</div>
		<h2>Witaj.</h2>
		<p>Proszę zarejestrować się lub zalogować do systemu.</p>
	
	<!-- FORMS -->
<div class="forms">
	<!-- BEGIN -->
	<div class="begin">
		<form class="register">
			<h3><span>Rejestracja</span></h3>
			<p class="error error-nick"></p>
			<input type="text" placeholder="Login" id="reg-nick">
			<p class="error error-email"></p>
			<input type="text" placeholder="Email" id="reg-email"l">

			<p class="error error-pass"></p>
			<input type="password" placeholder="Hasło" id="reg-pass">
			<input type="password" placeholder="Powtórz hasło" id="reg-pass2">

			<input type="submit" value="Zarejestruj" id="reg-submit">
		</form>

		<form class="login">
			<h3><span>Logowanie</span></h3>
			<p class="error"></p>
			<input type="text" placeholder="Login" id="log-nick">
			<input type="password" placeholder="Hasło" id="log-pass">
			<input type="submit" value="Zaloguj" id="log-submit">
		</form>
	</div>
	<!-- BEGIN ENDS-->

	<div class="additional">
		<form class="additional">
			<h3><span>Dodatkowe informacje</span></h3>
			<p class="error error-rest"></p>
			<input type="text" placeholder="Imię" id="add-name">
			<input type="text" placeholder="Nazwisko" id="add-surname">
			<input type="text" placeholder="Adres" id="add-address">
			<input type="submit" value="Prześlij" id="add-submit">
			<input class="return" type="submit" value="Powrót" id="add-return">
		</form>
	</div>

	<div class="newUser">
		<form class="newUser">
			<h3><span>Dane użytkownika</span></h3>
			<p class="error error-nick"></p>
			<input type="text" placeholder="Login" id="new-nick">
			<p class="error error-email"></p>
			<input type="text" placeholder="Email" id="new-email">
			<p class="error error-pass"></p>
			<input type="password" placeholder="Hasło" id="new-pass">
			<input type="password" placeholder="Powtórz hasło" id="new-pass2"">
			<p class="error error-rest"></p>
			<input type="text" placeholder="Imię" id="new-name">
			<input type="text" placeholder="Nazwisko" id="new-surname">
			<input type="text" placeholder="Adres" id="new-address">
			<input type="submit" value="Potwierdź" id="new-submit">
			<input class="return" type="submit" value="Usuń konto" id="new-selfdelete">
			<input class="return" type="submit" value="Anuluj" id="new-return">
		</form>
	</div>

	<div class="ensure">
		<p id="usersToDelete" class="usersToDelete"></p>
		<form class="ensure">
			<input type="submit" value="Tak" id="ensure-yes">
			<input class="return" type="submit" value="Nie" id="ensure-no">
		</form>
	</div>
</div>
	<!-- FORMS END -->
<div class="logged">
	<form>
		<table id="usersTable" class="usersTable">
		<thead>
		<tr>
		<th></th>
		<th>Lp.</th>
		<th>Nazwa</th>
		<th>Imię</th>
		<th>Nazwisko</th>
		<th>Adres</th>
		<th>Email</th>
		</tr>
		</thead>
		<tbody>
		</tbody>
		</table>
		
	</form>
<div class="fixedMenuContainer">
	<div class="fixedMenu">
		<button class="toTheTop" id="toTheTop">
			<div class="arrow"></div>
		</button>
		<button class="toTheBottom" id="toTheBottom">
			<div class="arrow"></div>
		</button>
		<div class='inner'>
			<button class="adminOption" id="btn-add"><span>D</span>odaj użytkownika</button>
			<button class="adminOption" id="btn-delete" disabled ><span>U</span>suń użytkowników</button>	
			<button class="userOption" id="btn-selfedit"><span>E</span>dytuj profil</button>
			<button id="btn-logout"><span>W</span>yloguj się</button>
		</div>
	</div>
</div>
</div>

<a id="bottomAnchor"></a>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<!-- <script src="js/jquery.cookie.js"></script> -->
<!-- <script src="js/jquery.scrollTo.min.js"></script> -->
<script src="js/script.js"></script>
</body>
</html>