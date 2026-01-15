function updates(bm){
	 var str = document.getElementById('bm').value; 	 
	 var res = str.replace(/  /g, " ");
	 var res = res.replace(/šÔ/g, "š‘");	
	 var res = res.replace(/ ‡/g, " †");
	 var res = res.replace(/¯Õ/g, "¯’v");
	 var res = res.replace(/ÓQ/g, "”Q");
	 var res = res.replace(/¯—/g, "¯Í");
	 var res = res.replace(/¯-/g, "¯Í");
	 var res = res.replace(/š—/g, "šÍ");
	 var res = res.replace(/š-/g, "šÍ");
	 var res = res.replace(/Ê/g, "Ð");
	 var res = res.replace(/¯'/g, "¯’");
	 var res = res.replace(/`ª“/g, "`ªæ");
	 var res = res.replace(/y/g, "z");
	 var res = res.replace(/«/g, "Ö");
	 var res = res.replace(/“/g, "æ");
	 var res = res.replace(/ ‰/g, " ˆ");
	 var res = res.replace(/~/g, "‚");	 	 
	 document.getElementById('bm').value = res;
	 alert('Bijoy Complex Font Fixing Successful.');
}
function update(eZ){
	 var str = document.getElementById('eZ').value;
	 var res = str.replace(/š‘/g, "ন্তু");	
	 var res = res.replace(/র্যাব/g, "র‌্যাব"); var res = res.replace(/র্যাবে/g, "র‌্যাবে");
	 var res = res.replace(/¯’া/g, "স্থা");
	 var res = res.replace(/”েছ/g, "চ্ছে");
	 var res = res.replace(/¯’/g, "স্থ");
	 var res = res.replace(/র“/g, "রু");
	 var res = res.replace(/¯’্য/g, "স্থ্য");
	 var res = res.replace(/¯্রা/g, "স্রা");
	 var res = res.replace(/¤œা/g, "ম্না");
	 var res = res.replace(/¤œ/g, "ম্ন");
	 var res = res.replace(/ত্র“/g, "ত্রু");
	 var res = res.replace(/তœ/g, "ত্ন");
	 var res = res.replace(/শ^া/g, "শ্বা");
	 var res = res.replace(/Ñ/g, "-"); 
	 document.getElementById('eZ').value = res;
	 alert('Unicode Complex Font Fixing Successful.');
}