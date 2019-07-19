function userEnter() {
	var userName = document.getElementById("textuser").value;
	document.getElementById("namedisplay").innerHTML = userName;
	$(document).ready(function () {
		$("#username").hide()
		$("#gamestart").show()
		$("#unicornSo").hide()
		$("#unicornSo").show(1200)
		$("#firstq").fadeIn(2000)
	});
}
let deaths = 0;
function wrongans() {
	var uni = document.getElementById("unicornLife").value;
	var takeaway = Math.round(Math.random() * (31 - 10)) + 10;
	var uni1 = uni -= takeaway;
	document.getElementById("unicornLife").value = uni1;
	document.getElementById("unicornSo").innerHTML = uni + " ";
	document.getElementById("unilife").innerHTML = " -" + takeaway;
	var userName = document.getElementById("textuser").value;
	if (uni <= 0) {
		$(document).ready(function () {
			$("#username").show();
			$("#gamestart").hide();
			$("#unicornSo").hide();
			$("#unicornSo").hide();
			$("#firstq").hide();
			$("#secondq").hide();
			$("#thirdq").hide();
			$("#fourthq").hide();
			$("#fifthq").hide();
			$("#enddiv").hide();
		});
		document.getElementById("textuser").value = userName;
		var uni = document.getElementById("unicornLife").value = 100;
		document.getElementById("unilife").innerHTML = "";
		alert("You killed the unicorns! TRY AGAIN!" + Image(src));
		deaths += 1;
		document.getElementById("deathsc").innerHTML = " " + deaths;
	}
}
function correct1() {
	$(document).ready(function () {
		$("#firstq").hide();
		$("#secondq").fadeIn(2000);
	});
}
function correct2() {
	$(document).ready(function () {
		$("#secondq").hide();
		$("#thirdq").fadeIn(2000)
	});
}
function correct3() {
	$(document).ready(function () {
		$("#thirdq").hide();
		$("#fourthq").fadeIn(2000);
	},
		function correct4() {
			$(document).ready(function () {
				$("#fourthq").hide();
				$("#fifthq").fadeIn(2000);
			});
		},
		function correct5() {
			$(document).ready(function () {
				$("#fifthq").hide();
				$("#enddiv").fadeIn(2000);	}}
		var userName = document.getElementById("textuser").value;
			$(document).getElementById("deathse") = alert("CONGRATS You like unicorns" +(userName)+" YOU MADE IT WITH ONLY "+ [deathse] + "DEATH(S)!" 