---
layout: default
---
<dl>
<script src="//code.jquery.com/jquery-1.4.3.min.js"></script>
<script src="{{site.url}}/Experiments/Clicker/script.js"></script>

<br>
<!-- Clicker -->
<div>
	<!-- Click Text -->
		<h1>Your click amount is: </h1>
	<!-- Click Amount -->
		<input type="text" disabled="true" name="TextBox" id="TextBox" value="0" />
		<br>
	<!-- Click Button -->
		<h1> 
			<a class="button" id='AddButton' href="#">Click</a>
		</h1>
</div>

<br>

<!-- Upgrade -->
<div>
	<!-- Upgrade Cost Text -->
		<h2>
			<a id = "text1">Cost per upgrade: </a> 
			<!-- Upgrade Cost Amount -->		
				<input type="text" disabled="true" name="TextBox3" id="TextBox3" value="10" />
		</h2>
	<!-- Upgrade Amount Per Click Text -->
		<h2>
			<a id = "text2">Clicks per click:</a>
			<!-- Upgrade Amount Per Click Amount -->
				<input type="text" disabled="true" name="TextBox2" id="TextBox2" value="1" />
		</h2>


<!-- Upgrade Button -->
	<h1>
		<a class="button"  id='AddClick' value="+" href="#"><i class="fa fa-plus">UPGRADE</i></a>
	</h1>

</div>
<br>

<!-- Change Upgrade (Currently useless) -->
<div>
	<!-- Change Upgrade Text -->
		<a id = "upgadetxt"> error </a> 
		<br>
	<!-- Change Upgrade Button -->
		<a class="button"  id='upgrade' href="#" >UPGRADE SWAPPER</a> 
		<br>
	<!-- Change Upgrade Name Text -->
		<a id = "upgadename"> error </a>
		
</div>
<br>

<!-- Script interface with script.js -->
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