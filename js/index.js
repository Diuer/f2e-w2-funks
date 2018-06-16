var showResult=document.getElementById("show-result");
var showResultNum=document.getElementById("show-result-num");
var showResultDetail=document.getElementById("show-result-detail");
var btnSubmit=document.getElementById("btn-submit");
var conditionFree=document.getElementById("checkbox-free");
var conditionAllDay=document.getElementById("checkbox-allday");
var atlocation=document.getElementById("atlocation");
var result="";
var str;
var arrA=[];

function init(){
	const oReq = new XMLHttpRequest();
	oReq.onload = reqListener;
	oReq.onerror = reqError;
	oReq.open('GET', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=268', true);
	oReq.send(null);
}

function render(){
	str="";
	var contNum=0;

	if(atlocation.options[atlocation.selectedIndex].text==="全部"){
		if(conditionFree.checked){
			if(conditionAllDay.checked){
				for(var i=0;i<arrA.length;i++){
					if(arrA[i].Ticketinfo===conditionFree.value && arrA[i].Opentime===conditionAllDay.value){
						str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
						contNum++;
					}
				}
			}else{
				for(var i=0;i<arrA.length;i++){
					if(arrA[i].Ticketinfo===conditionFree.value){
						str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
						contNum++;
					}
				}
			}
		}else{
			if(conditionAllDay.checked){
				for(var i=0;i<arrA.length;i++){
					if(arrA[i].Opentime===conditionAllDay.value){
						str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
						contNum++;
					}
				}
			}else{
				for(var i=0;i<arrA.length;i++){
					str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
					contNum++;
				}
			}
		}
	}else{
		if(conditionFree.checked){
			if(conditionAllDay.checked){
				for(var i=0;i<arrA.length;i++){
					if(arrA[i].Zone===atlocation.options[atlocation.selectedIndex].text && arrA[i].Ticketinfo===conditionFree.value && arrA[i].Opentime===conditionAllDay.value){
						str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
						contNum++;
					}
				}
			}else{
				for(var i=0;i<arrA.length;i++){
					if(arrA[i].Zone===atlocation.options[atlocation.selectedIndex].text && arrA[i].Ticketinfo===conditionFree.value){
						str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
						contNum++;
					}
				}
			}
		}else{
			if(conditionAllDay.checked){
				for(var i=0;i<arrA.length;i++){
					if(arrA[i].Zone===atlocation.options[atlocation.selectedIndex].text && arrA[i].Opentime===conditionAllDay.value){
						str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
						contNum++;
					}
				}
			}else{
				for(var i=0;i<arrA.length;i++){
					if(arrA[i].Zone===atlocation.options[atlocation.selectedIndex].text){
						str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
						contNum++;
					}
				}
			}
		}
	}
	showResultNum.innerHTML="Showing <p>"+contNum+"</p> results by…";
	showResult.innerHTML=str;
}
function reqListener() {
	const data = JSON.parse(this.responseText);
	str="";
	showResultNum.innerHTML="處理中，請稍後";
	for(var i=0;i<data.result.records.length;i++){
		arrA[i]=data.result.records[i];
		str+="<div class='content'><div class='image'><img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"'></div><div class='firstLine'><p class='contentName'>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='secondLine'><p class='contentDescription'>"+arrA[i].Toldescribe+"</p></div><div class='thirdLine'><p class='contentOpenTime'>"+arrA[i].Opentime+"</p></div><div class='todetail' onclick='showdetail("+i+")'><i class='fas fa-search'></i></div></div>";
	}
	showResultNum.innerHTML="Showing <p>"+data.result.records.length+"</p> results by…";
	showResult.innerHTML=str;
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
	showResultDetail.innerHTML="<img src='"+arrA[i].Picture1+"' alt='"+arrA[i].Picdescribe1+"' width='900px'><div class='contentName'><p>"+arrA[i].Name+"</p><p class='contentTicket'>"+arrA[i].Ticketinfo+"</p></div><div class='contentAddress'><p>"+arrA[i].Add+"</p></div><div class='contentTotalDescription'><p>"+arrA[i].Toldescribe+"</p></div><div class='contentOpenTime'><p>"+arrA[i].Opentime+"</p></div><div class='contentTelephone'><p>"+arrA[i].Tel+"</p></div><div class='contentWebsite'><a href='"+arrA[i].Website+"'>官方網頁</a></div><div class='contentToBack'><input type='button' value='回上一頁' onclick='showtotal()'></div>";
}

atlocation.addEventListener('click',function(){
	render();
	showResultDetail.style.display="none";
	showResult.style.display = "block";
	showResultNum.style.display="block";
},false);

conditionFree.addEventListener('click',function(){
	render();
	showResultDetail.style.display="none";
	showResult.style.display = "block";
	showResultNum.style.display="block";
},false);

conditionAllDay.addEventListener('click',function(){
	render();
	showResultDetail.style.display="none";
	showResult.style.display = "block";
	showResultNum.style.display="block";
},false);

init();