var showResult=document.getElementById("show-result");
var showResultNum=document.getElementById("show-result-num");
var showResultDetail=document.getElementById("show-result-detail");
var btnSubmit=document.getElementById("btn-submit");
var conditionFree=document.getElementById("checkbox-free");
var conditionAllDay=document.getElementById("checkbox-allday");
var atlocation=document.getElementById("atlocation");
var str;
var arrA=[]; //copy requests' data
var arrB=[]; //filter's data
var arrbranch=[];//for branch

function init(){
	const oReq = new XMLHttpRequest();
	oReq.onload = reqListener;
	oReq.onerror = reqError;
	oReq.open('GET', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=268', true);
	oReq.send(null);
}
function render(){
	showResult.innerHTML="";
	str="";
	arrB=arrA.filter(filterItem);
	for(var i=0;i<arrB.length;i++){
		str+="<div class='content' onclick='showdetail("+i+")'><div class='image'><img src='"+arrB[i].Picture1+"' alt='"+arrB[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrB[i].Name+"</p><p class='contentTicket'>"+arrB[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrB[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrB[i].Opentime+"</p></div></div>";
	}
	showResult.innerHTML=str;
	showResultNum.innerHTML="<i class='fa fa-quote-right' aria-hidden='true'></i> Showing <p>"+arrB.length+"</p> results by…";
}
function filterItem(arr){
	if(atlocation.options[atlocation.selectedIndex].text==="全部"){
		if(conditionFree.checked){
			if(conditionAllDay.checked){
				return (arr.Ticketinfo===conditionFree.value) && (arr.Opentime===conditionAllDay.value);
			}else{
				return arr.Ticketinfo===conditionFree.value;
			}
		}else{
			if(conditionAllDay.checked){
				return arr.Opentime===conditionAllDay.value;
			}else{
				return arr;
			}
		}
	}else{
		if(conditionFree.checked){
			if(conditionAllDay.checked){
				return arr.Zone===atlocation.options[atlocation.selectedIndex].text && arr.Ticketinfo===conditionFree.value && arr.Opentime===conditionAllDay.value;
			}else{
				return arr.Zone===atlocation.options[atlocation.selectedIndex].text && arr.Ticketinfo===conditionFree.value;
			}
		}else{
			if(conditionAllDay.checked){
				return arr.Zone===atlocation.options[atlocation.selectedIndex].text && arr.Opentime===conditionAllDay.value;
			}else{
				return arr.Zone===atlocation.options[atlocation.selectedIndex].text;
			}
		}
	}
}
function reqListener() {
	const data = JSON.parse(this.responseText);
	showResultNum.innerHTML="處理中，請稍後";
	// alert(Math.floor(data.result.records.length/50));
	for(var j=0;i<Math.floor(data.result.records.length/50);j++){
		alert(Math.floor(data.result.records.length/50));
		var pagesa=document.createElement('a');
		pagesa.setAttribute('href','#');
		pagesa.innerHTML=j;
		document.querySelector(".pagesbtn").appendChild(pagesa);
	}
	for(var i=0;i<data.result.records.length;i++){
		arrA[i]=data.result.records[i];
		arrB[i]=data.result.records[i];
	    divcontent=document.createElement('div');
	    divcontent.setAttribute('class','content');
	    divcontent.setAttribute('onclick','showdetail('+i+')');

	    var divimg = document.createElement('div');
		divimg.setAttribute('class','image');
		var img=document.createElement('img');
		img.setAttribute('src',arrA[i].Picture1);
		divimg.appendChild(img);
		divcontent.appendChild(divimg);

		var divfirst=document.createElement('div');
		divfirst.setAttribute('class','firstLine');
		var firstp1=document.createElement('p');
		firstp1.setAttribute('class','contentName');
		firstp1.innerHTML=arrA[i].Name;
		var firstp2=document.createElement('p');
		firstp2.setAttribute('class','contentTicket');
		firstp2.innerHTML=arrA[i].Ticketinfo;
		divfirst.appendChild(firstp1);
		divfirst.appendChild(firstp2);
		divcontent.appendChild(divfirst);

		var divsecond=document.createElement('div');
		divsecond.setAttribute('class','secondLine');
		var secondp=document.createElement('p');
		secondp.setAttribute('class','contentDescription');
		secondp.innerHTML=arrA[i].Toldescribe;
		divsecond.appendChild(secondp);
		divcontent.appendChild(divsecond);

		var divthird=document.createElement('div');
		divthird.setAttribute('class','thirdLine');
		var thirdp=document.createElement('p');
		thirdp.setAttribute('class','contentOpenTime');
		thirdp.innerHTML=arrA[i].Opentime;
		divthird.appendChild(thirdp);
		divcontent.appendChild(divthird);
		showResult.appendChild(divcontent);
	}
	showResultNum.innerHTML="<i class='fa fa-quote-right' aria-hidden='true'></i> Showing <p>"+arrA.length+"</p> results by…";
}
function reqError(err) {
	console.log('Fetch Error :-S', err);
}

function showtotal(){
	showResultDetail.style.display="none";
	showResult.style.display = "block";
	showResultNum.style.display="block";
}
function showdetail(i){
	showResult.style.display="none";
	showResultNum.style.display="none";
	showResultDetail.style.display = "block";
	showResultDetail.innerHTML="<img src='"+arrB[i].Picture1+"' alt='"+arrB[i].Picdescribe1+"' width='900px'><div class='contentName'><p>"+arrB[i].Name+"</p></div><div class='contentTicket'><p>"+arrB[i].Ticketinfo+"</p></div><div class='contentAddress'><p>"+arrB[i].Add+"</p></div><div class='contentTotalDescription'><p>"+arrB[i].Toldescribe+"</p></div><div class='contentOpenTime'><i class='fa fa-clock-o' aria-hidden='true'></i><p>"+arrB[i].Opentime+"</p></div><div class='contentTelephone'><i class='fa fa-phone' aria-hidden='true'></i><p>"+arrB[i].Tel+"</p></div><div class='contentWebsite'><a href='"+arrB[i].Website+"'><i class='fa fa-link' aria-hidden='true'></i>官方網頁</a></div><div class='contentToBack'><input type='button' value='回上一頁' onclick='showtotal()'></div>";
}

atlocation.addEventListener('click',function(){
	showtotal();
	render();
},false);

conditionFree.addEventListener('click',function(){
	showtotal();
	render();
},false);

conditionAllDay.addEventListener('click',function(){
	showtotal();
	render();
},false);

init();
