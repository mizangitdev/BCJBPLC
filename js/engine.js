if (window.top != window.self) 
	{ 
		document.write("<style>.hidebanner {display: none}</style>");
	}



var en="eZ";
var t="bangla";
var aH=false;
var aA=aY;
function co()
{
	for(var dX in aA)
		{
			var as=document.getElementById(dX);
			if(as.type=="button")
				{as.value=aA[dX];}
			else
				{as.innerHTML=aA[dX];}
		}
	};
	function ax(lang)
	{var as;
		if(lang==1)
			{
				aA=cH;as=document.getElementById("cI");
				as.innerHTML="English";
				as=document.getElementById("cR");
				as.innerHTML="<a href=\"javascript:ax(2);\">.....</a>";
			}
		else if(lang==2)
			{
				aA=aY;
				as=document.getElementById("cI");
				as.innerHTML="<a href=\"javascript:ax(1);\">English</a>";
				as=document.getElementById("cR");
				as.innerHTML=".....";
			}
			co();
	};
	function ak(eO)
	{
		if(eO==1)
			{cA("aN");
			cw("ct");
			cA("cq");
			aH=true;}
		else
			{cw("aN");
			cw("cq");
			cA("ct");
			aH=false;}
	};
	function A()
	{
		var g=document.getElementsByName('M');
		var bK=document.getElementById("aN");
		if(o==aG||al==true)g[0].checked=true;
		else if(o>2) g[o-2].checked=true;
		if(o==cx)bK.innerHTML=af("bangla");
		else if(o==by)bK.innerHTML=af("unijoy");
		else if(o==cz)bK.innerHTML=af("probhat");
		else if(o==aT)bK.innerHTML=af("somewherein");
		else if(o==ap)bK.innerHTML=af("avro");
		else if(o==at)bK.innerHTML=af("bornosoft");
		if(o==aG||al==true)cw("aN");
		else if(aH==true){cA("aN");
		av(document.getElementById("CharacteMapTable"),aB,aj);
	}
};
function dH()
{
	var g=document.getElementsByName('O');
	if(t=="bangla"){g[0].checked=true;}
	else if(t=="somewherein"){g[1].checked=true;}
	else if(t=="boisakhi"){g[2].checked=true;}
	else if(t=="bangsee"){g[3].checked=true;}
	else if(t=="bornosoft"){g[4].checked=true;}
	else if(t=="phonetic"){g[5].checked=true;}
	else if(t=="htmlsafehex"){g[6].checked=true;}
	else if(t=="htmlsafedec"){g[7].checked=true;}
};
function I(event)
{
	var g=document.getElementsByName('M');
	for(var ae=0;ae<g.length;ae++)
		{
			if(g[ae].checked){al=false;
			if(ae)o=ae+2;else o=ae+1; A();
			var cV=document.getElementById(en);cV.focus();
			break;
		}
	}
};
function ck(ec)
{
	var w=document.getElementById(ec).value;w=cM(t,w);
	ag(document.getElementById(en),w);
};
function cB(ec)
{
	var w=document.getElementById(en).value;w=cX(t,w);
	ag(document.getElementById(ec),w);
};
function dh(eN)
{
	var ee=document.getElementById(eN);
	ee.value="";ee.focus();
};
function aL()
{
	var g=document.getElementsByName('O');
	var J=document.getElementById('bm');
	if(t=="bangla"){J.style.fontFamily="SutonnyMJ";
	J.style.width=400;g[0].checked=true;
}
else if(t=="somewherein")
	{
		J.style.fontFamily="SushreeMJ";
		J.style.width=400;g[1].checked=true;}
		else if(t=="boisakhi")
			{
				J.style.fontFamily="Boishakhi";
				J.style.width=400;g[2].checked=true;
			}else if(t=="bangsee")
			{
				J.style.fontFamily="Bangsee Alpona";
				J.style.width=400;g[3].checked=true;
			}else if(t=="bornosoft")
			{
				J.style.fontFamily="Falgun";
				J.style.width=400;g[4].checked=true;
			}else if(t=="phonetic")
			{
				J.style.fontFamily="Times New Roman"
				;J.style.width=400;g[5].checked=true;
			}else if(t=="htmlsafehex"||t=="htmlsafedec")
			{
				J.style.fontFamily="Times New Roman";
				J.style.width=400;g[6].checked=true;
			}
		};
		function P(event)
		{
			var g=document.getElementsByName('O');
			for(var ae=0;ae<g.length;ae++)
				{
					if(g[ae].checked)
					{
						if(ae==0)t="bangla";
						else if(ae==1)t="somewherein";
						else if(ae==2)t="boisakhi";
						else if(ae==3)t="bangsee";
						else if(ae==4)t="bornosoft";
						else if(ae==5)t="phonetic";
						else if(ae==6)t="htmlsafehex";
						else if(ae==7)t="htmlsafedec";
						break;
					}
				}
				aL();
			};
			function dG()
			{
				var cp=90;
				if(aA==cH)aq(L+"language","english",cp,"/","");
				if(aA==aY)aq(L+"language","bangla",cp,"/","");
				aq(L+"layout",o,cp,"/","");
				aq(L+"converter",t,cp,"/","");
				aq(L+"showhelp",aH,cp,"/","");
			};
			function dE()
			{
				var ez=aw(L+"language");
				if(ez=="english")ax(1);
				else ax(2);o=aw(L+"layout");
				if(o==null)o=2;t=aw(L+"converter");
				if(t==null)t="bangla";
				var eC=aw(L+"showhelp");
				if(eC=="true")ak(1);
				else ak(2);
			};
			function eE()
			{
				aI(L+"language","/","");
				aI(L+"layout","/","");
				aI(L+"converter","/","");
				aI(L+"showhelp","/","");};
				function dZ()
				{
					dE();A();aL();
					var cV=document.getElementById(en);
					var bU=document.getElementById("dD");
					if(eJ){bU.innerHTML="If you can't see Bangla, please download Unicode Bangla Font <a href=fonts/SutonnyBanglaOMJ.ttf>from here</a>.";
					cV.style.fontFamily="SutonnyBanglaOMJ";
				}
				else
					{
						bU.innerHTML="If you can't see Bangla, please download Unicode Bangla Font <a href=fonts/SutonnyBanglaOMJ.ttf>from here</a>.";
						cV.style.fontFamily="SutonnyBanglaOMJ";
					}
					cV.style.width=400;
					var J=document.getElementById('bm');
					J.style.width=400;
					di();
				};
			function dk(){dG();} 



function clearContent(idtxt) 
{ 
	var elem = document.getElementById(idtxt); 	
	elem.value = ''; 	
	elem.focus(); 
} 
function insertContent(field, text) 
{ 	
	if (document.selection) 	
		{ 		
			field.focus(); 		
			sel = document.selection.createRange(); 		
			sel.text = text; 		
			sel.collapse(true); 		
			sel.select(); 	
		} 	
		else if (field.selectionStart || field.selectionStart == '0') 	
			{ 		
				var startPos = field.selectionStart; 		
				var endPos = field.selectionEnd; 		
				var scrollTop = field.scrollTop; 		
				startPos = (startPos == -1 ? field.value.length : startPos ); 		
				field.value = field.value.substring(0, startPos) + text + field.value.substring(endPos, field.value.length); 		
				field.focus(); 		
				field.selectionStart = startPos + text.length; 		
				field.selectionEnd = startPos + text.length; 		
				field.scrollTop = scrollTop; 	
			} 	
		else 	
		{ 		
			var scrollTop = field.scrollTop; 		
			field.value += value; 		
			field.focus(); 		
			field.scrollTop = scrollTop; 	
		} 
}
