---
layout: default
---
<dl>
<script src="{{site.url}}/Experiments/Clicker/script.js"></script>

<h1>Your click amount is:<input type="text" disabled="true" name="TextBox" id="TextBox" value="0" /></h1>
<h1> <a class="button"  id='AddButton' value="+" href="#"><i class="fa fa-plus"></i></a></h1>

	<br>

 <h1> <a id = "upgadetxt"> error </a> <a class="button"  id='upgrade' value="+" href="#"><i class="fa fa-plus"></i></a>
 	<a id = "upgadename"> error </a></h1>

	<br>

	<h4> <a id = "text1">Cost per upgrade: </a> <input type="text" disabled="true" name="TextBox3" id="TextBox3" value="10" /></h4>
<h2><a id = "text2">Clicks per click: </a><input type="text" disabled="true" name="TextBox2" id="TextBox2" value="1" /></h2>

<h1> <a class="button"  id='AddClick' value="+" href="#"><i class="fa fa-plus"></i></a></h1>
<script>
    $(document).ready(function(){
        $('#AddButton').click( function() {
        add( getamountClick(0) );
            $('#TextBox').val(getamount());
        });
    });
</script>

<script>
    $(document).ready(function(){
        $('#upgrade').click( function() {
        	nextUpgrade();
        	document.getElementById("upgadetxt").innerHTML = getUpgradetxt();
			document.getElementById("upgadename").innerHTML =  getUpgradeName();
        	document.getElementById("text1").innerHTML= getText1();
        	document.getElementById("text2").innerHTML= getText2();
        	$('#TextBox3').val(getClickCost(getUpgrade()));
            $('#TextBox2').val(getamountClick(getUpgrade()));
    		});
     });
</script>

<script> 
	 document.getElementById("upgadetxt").innerHTML = getUpgradetxt();
			document.getElementById("upgadename").innerHTML =  getUpgradeName();
        	document.getElementById("text1").innerHTML= getText1();
        	document.getElementById("text2").innerHTML= getText2();
        	$('#TextBox3').val(getClickCost(getUpgrade()));
            $('#TextBox2').val(getamountClick(getUpgrade()));
</script>

 <script>
    $(document).ready(function(){
        $('#AddClick').click( function() {
        	//alert(getUpgrade());
        	if(getUpgrade()==0){

        	if(getamount() >= getClickCost(0)){
        		add(-getClickCost(0));
        	addClick(1);
        	setClickCost(getClickCost(0) - (getClickCost(0) / 4) + (getClickCost(0) / 2));
        }
        	$('#TextBox').val(getamount());
        	$('#TextBox3').val(getClickCost(getUpgrade()));
        }
            $('#TextBox2').val(getamountClick(getUpgrade()));
        });
    });
</script>

</dl>