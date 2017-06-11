var amount = 0;

var version = "0.01";

//upgrade
var upgrade = 0;
var upgradeLimit = 2;

var CLICK_UPGRADE = 0;

var textName = new Array();
var text1 = new Array();
var text2 = new Array();

var upgradeAmmount = new Array();
var upgradeCost = new Array();

//click upgrade
upgradeAmmount[0] = 1;
upgradeCost[0] = 10;

textName[0] = "More clicks less time";
textName[1] = "idk";

text1[0] = "Your click amount: ";
text2[0] = "Clicks per click: ";

text1[1] = "Your click amount: z";
text2[1] = "Clicks per click: z";

upgradeAmmount[1] = 10;
upgradeCost[1] = 1;

function popup() {
alert("Hello World");
}

function Leversion() {
	return " Version: " + version;
}

function add(a){
	a = Math.round(a+0.01);
	amount += a;
return amount;
}

function getamount(){
	return amount;
}

function addClick(a){
	a = Math.round(a+0.01);
	upgradeAmmount[upgrade] += a;
return upgradeAmmount[upgrade];
}

function getamountClick(upgrade){
	return upgradeAmmount[upgrade];
}

function getClickCost(upgrade){
	return upgradeCost[upgrade];
}

function setClickCost(a){
	a = Math.round(a+0.01);
	upgradeCost[upgrade] = a;
	return upgradeCost[upgrade];
}

function getText1() {
return text1[upgrade];
}

function getText2() {
return text2[upgrade];
}

function nextUpgrade(){
	upgrade++;
	if(upgrade==upgradeLimit)
		upgrade = 0;
}

function getUpgrade(){
	return upgrade;
}

function getUpgradetxt(){
	return "Upgrade: " + upgrade;
}
function getUpgradeName(){
	return textName[upgrade];
}