<!-- Montako päivää jäljellä? -->
function daysLeft(date, month, year)
{
	var expire = new Date(year, month - 1, date);
	var today = new Date();
	
	return Math.floor((expire.valueOf() - today.valueOf()) / (24 * 60 * 60 * 1000) + 1);					
}

<!-- Ilmoita kuinka monta päivää on jäljellä ilmoittautumisaikaan - tai totea, ettei enää onnaa. -->
function checkDate(date, month, year, acceptMore)
{
	var left = daysLeft(date, month, year);					
			
	return ((left >= 0) && (acceptMore == true)) ? " (vielä " + (left + 1) + " päivää)" : " (tapahtuma on jo täynnä!)";
}

<!-- Nykyinen päivämäärä -->
function date()
{
	var today = new Date();
	var weekday = new Array(7);
			
	weekday[0] = "Su";
	weekday[1] = "Ma";
	weekday[2] = "Ti";
	weekday[3] = "Ke";
	weekday[4] = "To";
	weekday[5] = "Pe";
	weekday[6] = "La";
			
	return weekday[today.getDay()] + " " + today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
}

<!-- Piilota tai näytä elementti (state ='none'/'block') -->
function display(id, state)
{
	document.getElementById(id).style.display = state;
}

<!-- Provide autorefresh functionality -->
function timedRefresh(timeoutPeriod) {
	setTimeout("window.location.reload(true);", timeoutPeriod*1000);
}
