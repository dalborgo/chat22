/*
	Avatar Chat 1.0.0
*/

/*
	Configure Global Variables
*/

var globalRooms = ["lobby"];
var sessionData = [];
var c = 0;
var el = $("body");
var sprite = "ss1";
var selectedAvatar = "male.png";
var audio = null;
var allowInput = false;
var myName = null;
var luiName = null;
var allowMove = true;
var pd = false;
var hd = false;
var dentro = false;

var sfx_newMessage = document.createElement('audio');
var sfx_click = document.createElement('audio');
var pd2 = document.createElement('audio');
var ness = document.createElement('audio');
var mad = document.createElement('audio');
var se = document.createElement('audio');
var db = document.createElement('audio');
var dc = document.createElement('audio');
var dp = document.createElement('audio');
var vaff = document.createElement('audio');
var cana = document.createElement('audio');
var vaffd = document.createElement('audio');
var mp = document.createElement('audio');
var asp = document.createElement('audio');
var orco = document.createElement('audio');
var dcm = document.createElement('audio');
var orcom = document.createElement('audio');
var sch = document.createElement('audio');
var dc3 = document.createElement('audio');
var simp = document.createElement('audio');
var cazzo = document.createElement('audio');
var mona = document.createElement('audio');
var dpd = document.createElement('audio');
var oh = document.createElement('audio');
var pm = document.createElement('audio');
var pim = document.createElement('audio');
var foca = document.createElement('audio');
var mano2 = document.createElement('audio');
var mano = document.createElement('audio');
var topl = document.createElement('audio');
var melone = document.createElement('audio');



sfx_newMessage.setAttribute('src', 'static/audio/sfx_newMessage.mp3');
sfx_click.setAttribute('src', 'static/audio/sfx_click.mp3');
pd2.setAttribute('src', 'static/audio/pd.mp3');
ness.setAttribute('src', 'static/audio/ness.mp3');
mad.setAttribute('src', 'static/audio/mad.mp3');
se.setAttribute('src', 'static/audio/se.mp3');
db.setAttribute('src', 'static/audio/db.mp3');
dc.setAttribute('src', 'static/audio/dc.mp3');
dp.setAttribute('src', 'static/audio/dp.mp3');
vaff.setAttribute('src', 'static/audio/vaff.mp3');
cana.setAttribute('src', 'static/audio/cana.mp3');
vaffd.setAttribute('src', 'static/audio/vaffad.mp3');
mp.setAttribute('src', 'static/audio/mp.mp3');
asp.setAttribute('src', 'static/audio/asp.mp3');
orco.setAttribute('src', 'static/audio/orco.mp3');
dcm.setAttribute('src', 'static/audio/dcm.mp3');
orcom.setAttribute('src', 'static/audio/orcom.mp3');
sch.setAttribute('src', 'static/audio/sch.mp3');
dc3.setAttribute('src', 'static/audio/dc3.mp3');
simp.setAttribute('src', 'static/audio/simpatia.mp3');
mona.setAttribute('src', 'static/audio/mona.mp3');
oh.setAttribute('src', 'static/audio/oh.mp3');
pm.setAttribute('src', 'static/audio/pm.mp3');
cazzo.setAttribute('src', 'static/audio/cazzo.mp3');
dpd.setAttribute('src', 'static/audio/dedio.mp3');
pim.setAttribute('src', 'static/audio/pim.mp3');
foca.setAttribute('src', 'static/audio/foca.mp3');
mano2.setAttribute('src', 'static/audio/mano2.mp3');
mano.setAttribute('src', 'static/audio/mano.mp3');
topl.setAttribute('src', 'static/audio/top.mp3');
melone.setAttribute('src', 'static/audio/melone.mp3');
gener = new Array();
gener["dc"]=dc;
gener["pm"]=pm;
gener["simpatia"]=simp;
gener["mona"]=mona;
gener["oh"]=oh;
gener["cazzo"]=cazzo;
gener["dedio"]=dpd;
gener["orco"]=orco;
gener["asp"]=asp;
gener["pd"]=pd2;
gener["ness"]=ness;
gener["se"]=se;
gener["dp"]=dp;
gener["db"]=db;
gener["cana"]=cana;
gener["madonna"]=mad;
gener["vaffa"]=vaff;
gener["vaffd"]=vaffd;
gener["orca"]=orcom;
gener["sch"]=sch;
gener["dc3"]=dc3;
gener["dcm"]=dcm;


/*
	Sprite Variables
*/

var body = "ss1/male.png";

/*
	Additional Configs
*/

sessionData[c] = {};

/*
	Define Functions
*/







$( "#log" ).click(function() {
	if (pd)
	{
		pd = false;
		$( "#popdown" ).slideUp( "fast", function() {});
	}
	else
	{
		pd = true;
		$( "#popdown" ).slideDown( "fast", function() {});
	}
});

$( "#hd" ).click(function() {
	if (hd)
	{
		hd = false;
		$( "#help" ).fadeOut( "fast", function() {});
	}
	else
	{
		hd = true;
		$( "#help" ).fadeIn( "fast", function() {});
	}
});

$( "#sendchat" ).click(function() {
	submitChat($("#chatbar").val());
});

$(document).keypress(function(e) {
	if(e.which == 13) {
		submitChat($("#chatbar").val());
	}
});
$(document).keypress(function(e) {
	if(e.which == 13) {
		if(!dentro)
			$('#loginButton').click();
	}
});

function submitChat(chatMsg)
{
	if (allowInput)
	{
		var finalMsg = chatMsg.replace(/(<([^>]+)>)/ig, '');
		if ($.trim(finalMsg) != "" && $.trim(finalMsg) != null)
		{
			var limitLen = finalMsg.toLowerCase(finalMsg.substring(0, 40));

			$("#mybubble").css('z-index', 6000);
			$("#mybubble").html(limitLen).removeClass("red");
			$("#mybubble").show();

			$.doTimeout( 'closeBubble' );
			$.doTimeout( 'closeBubble', 5000, function(){
				$("#mybubble").fadeOut("slow");
			});

			$("#chatbar").val("");

			$.ajax({
				type: 'POST',
				url: siteURL + '/core/ac.chat.php',
				data: {token: myToken, chat: limitLen},
				success:function(response)
				{
					// done
				}
			});

			$("#popdown").prepend("<div class=\"message\"><div class=\"submitter sme\">[TU]</div><div class=\"msg\">" + limitLen + "</div>").removeClass("red");
            var arr = limitLen.split(" ");
            gos(arr, myName);
        }
	}
}


function gos(arr, cosa){
    if(cosa=="pisinman"){
        gener["pim"]=pim;
        gener["foca"]=foca;
        gener["mano"]=mano;
        gener["mano2"]=mano2;
        gener["top"]=topl;
        gener["melone"]=melone;
    }else {
        gener["pim"] = undefined;
        gener["foca"]=undefined;
        gener["mano"]=undefined;
        gener["mano2"]=undefined;
        gener["top"]=undefined;
        gener["melone"]=undefined;
    }
    trova=false;
    i=0;
    j=0;
	primo=-1;
    for (var obj in arr) {
        if(gener[arr[j++]]){
            if(primo==-1)
			    primo=j-1;
            gener[arr[j-1]].addEventListener('ended', function () {
				i=primo++;
                if (gener[arr[++i]])
                    gener[arr[i]].play();
                this.removeEventListener('ended',arguments.callee,false);
            });
            trova=true;
        }
    }
    if(gener[arr[primo]])
        gener[arr[primo]].play();
    if(trova)
        sfx_newMessage.play();
}
chat_poll = function()
{
	if (allowInput)
	{
		$.ajax({
			url: siteURL + '/core/ac.retrieveChat.php',
			cache: false,
			success: function(html)
			{
				if (html != 0)
				{
					events = html.split ( "/" );
					$.each(events, function(k, v)
					{
						chat = v.split( "|" );

						if ($("#"+ $.trim($.trim(chat[0])) + "_chat").length)
						{
							$("#"+ $.trim($.trim(chat[0])) + "_chat").css('z-index', 6000);
							$("#"+ $.trim(chat[0]) + "_chat").html($.trim(chat[1]).toLowerCase()).removeClass("red");
							$("#"+ $.trim(chat[0]) + "_chat").show();

							$.doTimeout( 'closeBubble_'+$.trim(chat[0])+'' );
							$.doTimeout( 'closeBubble_'+$.trim(chat[0])+'', 5000, function(){
								$("#"+ $.trim(chat[0]) + "_chat").fadeOut("slow");
							});
                            luiName=$( "#" + $.trim(chat[0]) ).attr( "cname" );
							$("#popdown").prepend("<div class=\"message\"><div class=\"submitter\">[" + $( "#" + $.trim(chat[0]) ).attr( "cname" ) + "]</div><div class=\"msg\">" + $.trim(chat[1]) + "</div>").removeClass("red");
                            var arr = $.trim(chat[1]).split(" ");
							gos(arr,luiName);
						}
					});
				}
			}
		});
	}
};

events_poll = function()
{
	if (allowInput)
	{
		$.ajax({
			url: siteURL + '/core/ac.poll.php',
			cache: false,
			success: function(html)
			{
				if (html == 3) // Remove Local Client
				{
					allowInput = false;
					
					$("#disconnect").fadeIn("fast");
					$("#dimmer").fadeIn("fast");
					$("#popdown").fadeOut("Slow");
					pd = false;
				}
				else
				{
					events = html.split ( "/" );
					$.each(events, function(k, v)
					{
						tv = v.split( "|" );
					
						switch(tv[1])
						{
							case "1": // Move avatars
							{
								gt = tv[2].split( "," );
								
								if ($('#'+ $.trim(tv[0]) +'').length)
								{
									var offset = $('#'+ $.trim(tv[0]) +'').offset();
									var parentOffset = $('#'+ $.trim(tv[0]) +'').parent().offset();
									
									if (gt[0] == offset.left && gt[1] == offset.top)
									{
										// don't move
									}
									else
									{
										if (gt[0] > offset.left - parentOffset.left)
										{
											$( "#"+ $.trim(tv[0]) +"" ).removeClass( "normal left" );
											$( "#"+ $.trim(tv[0]) +"" ).addClass( "right" );
											$( "#"+ $.trim(tv[0]) +"" ).css('background-image', 'url(static/sprites/' + sprite + '/'+ $.trim(tv[4]) +')');
										}
										else
										{
											$( "#"+ $.trim(tv[0]) +"" ).removeClass( "normal right" );
											$( "#"+ $.trim(tv[0]) +"" ).addClass( "left" );		
											$( "#"+ $.trim(tv[0]) +"" ).css('background-image', 'url(static/sprites/' + sprite + '/'+ $.trim(tv[4]) +')');
										}
										
										$("#"+$.trim(tv[0])+"").offset({ top: gt[1], left: gt[0]});
									}
									
									$("#username_"+$.trim(tv[0])+"").val($.trim(tv[3]));
								}
								
								break;
							}
							
							case "2": // Remove avatars
							{
								if ($('#'+ $.trim(tv[0]) +'').length)
								{
									$("#"+ $.trim(tv[0]) + "").remove();
								}
								
								break;
							}
						}
					});	
				}
			},
		});
	}
};

users_poll = function()
{
	if (allowInput)
	{
		$.ajax({
			url: siteURL + '/core/ac.online.php',
			cache: false,
			success: function(response)
			{
				if ($.trim(response) != "0")
				{
					avatars = response.split ( "," );
					$.each(avatars, function(k, v)
					{
						tv = v.split( "|" );
						
						if (!$('#'+ $.trim(tv[1]) +'').length)
						{
							if (typeof tv[2] !== 'undefined')
							{
								$('<div id="'+ $.trim(tv[1]) +'" cName="' + $.trim(tv[0]) + '" class="avatar normal" style="top:'+tv[3]+'px; left:'+tv[2]+'px;"></div>').appendTo('#gameRoom');
								$( "#"+ $.trim(tv[1]) +"" ).css('background-image', 'url(static/sprites/' + sprite + '/'+ $.trim(tv[4]) +')');
								$('<div id="username_' + $.trim(tv[0]) + '" class="username">' + $.trim(tv[0]) + '</div>').appendTo('#'+ $.trim(tv[1]) +'');
								$('<div id="' + $.trim(tv[1]) + '_chat" class="bubble"></div>').appendTo('#'+ $.trim(tv[1]) +'');
								
								$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", "#" + tv[1] + "", function(e)
								{ 
									$(this).removeClass( "right left" );
									$(this).addClass( "normal" );
								});
							}
						}
					});
				}
			}
		});
	}
};

function loadRoom(roomID)
{
	if (globalRooms.indexOf(roomID) != -1)
	{
		$.ajax({
			url: 'static/rooms/' + roomID + '/config.xml',
			type: "GET",
			dataType: "xml",
			success: function (config) 
			{
				/*
					Main Room Data
				*/
				$(config).find('mainroom').each(function () 
				{
					var roomData = $(this).text().split ( "|" );
					$('<map class="map" name="map" style="cursor:pointer;"><area shape="poly" coords="' + roomData[1] + '"></map>').appendTo('#containerWorld');
					$('<div id="gameRoom"></div>').appendTo('#containerWorld');
					$('<img src="' + roomData[0] + '" usemap="#map">').appendTo('#gameRoom');
				});
	
				/*
					Defaults Config
				*/
				$(config).find('defaults').each(function () 
				{
					var localConfig = $(this).text().split ( "|" );
					sessionData[c]["startX"] = localConfig[0];
					sessionData[c]["startY"] = localConfig[1];
				});
				
				console.log(sessionData[c]["startY"]);
				
				/*
					Create default player
				*/
				$('<div id="myAvatar" class="avatar normal" style="top:' + sessionData[c]["startX"] + 'px; left:' + sessionData[c]["startY"] + 'px;"></div>').appendTo('#gameRoom');
				$( "#myAvatar" ).css('background-image', 'url(static/sprites/' + sprite + '/' + selectedAvatar + ')');
				$('<div class="username orange">' + myName + '</div>').appendTo('#myAvatar');
				$('<div id="mybubble" class="bubble"></div>').appendTo('#myAvatar');
				
				allowInput = true;
				$("#chatbar").focus();
				return 1;
			 }
		});
		
		$.ajax({
			url: siteURL + '/core/ac.online.php',
			cache: false,
			success: function(response)
			{
				avatars = response.split ( "," );
				$.each(avatars, function(k, v)
				{
					tr = v.split( "|" );
					
					if (typeof tr[1] !== 'undefined')
					{
						$('<div id="'+ $.trim(tr[1]) +'" cName="' + $.trim(tr[0]) + '" class="avatar normal" style="top:'+tr[3]+'px; left:'+tr[2]+'px;"></div>').appendTo('#gameRoom');
						$( "#"+ $.trim(tr[1]) +"" ).css('background-image', 'url(static/sprites/' + sprite + '/'+ $.trim(tr[4]) +')');
						$('<div id="username_' + $.trim(tr[0]) + '" class="username">' + $.trim(tr[0]) + '</div>').appendTo('#'+ $.trim(tr[1]) +'');
						$('<div id="' + $.trim(tr[1]) + '_chat" class="bubble" ></div>').appendTo('#'+ $.trim(tr[1]) +'');
						
						$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", "#" + tr[1] + "", function(e)
						{ 
							$(this).removeClass( "right left" );
							$(this).addClass( "normal" );
						});
					}
				});
			}
		});
	}
	
	return 0;
}	

/*
	Configure Login
*/

$( "#loginButton" ).click(function() 
{
	var username = $("#loginInput").val();
    //$("#loginInput").unbind( "click" );
    dentro=true;
	if ($.trim(username) != null && $.trim(username) != "")
	{
		$.ajax({
			type: 'POST',
			url: siteURL + '/core/ac.login.php',
			data: {uname: username, sprite: selectedAvatar},
			success:function(response)
			{
				res = $.trim(response);
				switch(res)
				{
					case "1":
					{
						$("#loginWorld").hide();
						$("#containerWorld").show();
						$("#hud").show();
						$("#uibar").show();
						
						loadRoom("lobby");
						users_poll();
						myName = username; 

						$("#popdown").prepend("<div class=\"message\"><div class=\"submitter system\">[SISTEMA]</div><div class=\"msg\">" + welcomeMSG + "</div>");
						
						sfx_click.play();
						
						if (autolog == 1)
						{
							pd = true;
							$( "#popdown" ).slideDown( "fast", function() {});
						}
						
						break;
					}
				}	
			}
		});		
	}
});

function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

/*
	Configure Worlds
*/

$(function() 
{
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	 window.location.href = 'documents/mobile.html';
	}
	
	$('body').on('click', '.map area', function(e)
	{
		if (allowInput && allowMove)
		{
			allowMove = false;
			var offset = $('#myAvatar').offset();
			var parentOffset = $(this).parent().offset();
			
			var posx = 0; 
			var posy = 0; 
			
			if (!e) 
			{
				e = window.event; 
				
				if (e.pageX || e.pageY)
				{ 
					posx = e.pageX - 30; 
					posy = e.pageY - 80; 
				} 
			}
			else if (e.clientX || e.clientY)
			{ 
				posx = e.clientX + document.body.scrollLeft 
				+ document.documentElement.scrollLeft - 30; 
				posy = e.clientY + document.body.scrollTop 
				+ document.documentElement.scrollTop - 80; 
			}
			
			if (posx > offset.left - parentOffset.left)
			{
				$( "#myAvatar" ).removeClass( "normal left" );
				$( "#myAvatar" ).addClass( "right" );
				$( "#myAvatar" ).css('background-image', 'url(static/sprites/' + sprite + '/' + selectedAvatar + ')');
			}
			else
			{
				$( "#myAvatar" ).removeClass( "normal right" );
				$( "#myAvatar" ).addClass( "left" );		
				$( "#myAvatar" ).css('background-image', 'url(static/sprites/' + sprite + '/' + selectedAvatar + ')');
			}
			
			$("#myAvatar").offset({ top: posy, left: posx});
			
			$.ajax({
				type: 'POST',
				url: siteURL + '/core/ac.walk.php',
				data: {xpos: posx, ypos: posy, token: myToken},
				success:function(response)
				{
					// done
				}
			});
            $("#chatbar").focus();
			sfx_click.play();
		}
	});
	
	/*
		To run when a transition ends
	*/
	$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", "#myAvatar", function(e)
	{
		$( this ).removeClass( "right left" );
		$( this ).addClass( "normal" );
		
		$( "#myAvatar" ).css('background-image', 'url(static/sprites/' + sprite + '/' + selectedAvatar + ')');
		allowMove = true;
	});
	
	$(window).bind("beforeunload", function() 
	{ 
		if (allowInput)
		{
			$.ajax({
				type: 'POST',
				url: siteURL + '/core/ac.quit.php',
				data: {token: myToken},
				success:function(response)
				{
					// done
				}
			});		
		}
	})
	
	/*
		Avatar Selection
	*/
	
	$( ".sel_avatar" ).click(function() 
	{
		$( ".sel_avatar" ).each(function() 
		{
			$( this ).addClass( "gray" );
		});
		
		$( this ).removeClass( "gray" );
		
		selectedAvatar = $(this).attr("id");
	});
	
	/*
		Polls
	*/
	
	var event_poll = setInterval(events_poll, 3000);
	var user_poll = setInterval(users_poll, 6000);
	var chats_poll = setInterval(chat_poll, 2000);
});
