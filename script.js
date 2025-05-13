function getFormvalue(e) {
    //Write your code here
    e.preventDefault();
	const form=document.getElementById("form1");
	const formdata=new FormData(form);
	let arr=[];
	for(let [key,value] of formdata.entries())
	{
		arr.push(value);
	}
	alert(arr[0]+" "+arr[1]);
}