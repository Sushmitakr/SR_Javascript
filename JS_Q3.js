
<!DOCTYPE html>
<html>
<body>
<h2>Javascript dash between even digits</h2>
<p id="demo"></p>
<script type="text/Javascript">
	var number = "025468";
	var str = number.toString();
	var res = [str[0]];

	for(let x=1; x<str.length;x++){
		if((str[x-1]%2 == 0) && (str[x]%2 == 0))
		{
			res.push('-', str[x]);
		}
		else
		{
			res.push(str[x]);
		}
	}

	document.getElementById.innerHTML = res.join('');

</script>
</body>
</html>





