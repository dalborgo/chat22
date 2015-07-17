<!DOCTYPE HTML>
<html>
<head>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="static/css/static.css" />
	<link rel="stylesheet" type="text/css" href="static/css/sprites.css" />
</head>
<body>
	<div id="dimmer"></div>
	<div id="modalWorld">
		<div id="disconnect">
			<div id="disconnect_header">Connessione Persa</div>
			<div id="disconnect_content">
				Sei stato disconnesso dalla chat (30 minuti di inattivit&agrave;)<br />
				Per favore <a href="index.php">clicca qui</a> per ritornare all pagina iniziale.
			</div>
		</div>
		<div id="help">
			<div id="help_header">MyChat</div>
			<div id="help_content" style="text-align:center;">
				<b>Marco Dal Borgo<b> per <span style="color:red"><b>PokerStrategy.com</b></span><br />
				<img src="http://chat-dalborgo.rhcloud.com/static/img/logocon2.png">
			</div>
		</div>
		<div id="popdown">
			<!-- Chat Log -->
		</div>
	</div>
	<div id="loginWorld">
		<div id="avatar_chooser">
			<div id="male.png" class="sel_avatar" style="background:url('static/sprites/ss1/male.png') no-repeat;"></div>
			<div id="male_2.png" class="sel_avatar gray" style="background:url('static/sprites/ss1/male_2.png') no-repeat;"></div>
			<div id="female.png" class="sel_avatar gray" style="background:url('static/sprites/ss1/female.png') no-repeat;"></div>
			<div id="female_2.png" class="sel_avatar gray" style="background:url('static/sprites/ss1/female_2.png') no-repeat;"></div>
		</div>
		<div id="loginInfo">
			<input type="text" id="loginInput" placeholder="Scegli un nickname" maxlength="15" value="<?php echo rand ( 0 , 10000 ) ?>">
			<div id="loginButton">Entra</div>
		</div>
	</div>
	<div id="containerWorld"></div>
	<div id="hud">
		<input type="text" id="chatbar" maxlength="50">
		<div id="sendchat">Chatta</div>
		
		<div id="uibar">
			<img src="static/img/log.png" id="log" title="Chat Log">
			<img src="static/img/help.png" id="hd" title="Help">
		</div>
	</div>
</body>
<!-- Required Javascript -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script><?php jsConfig(); ?></script>
<script src="client/doTimeout.js"></script>
<script src="client/hangout.js"></script>
</html>