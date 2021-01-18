var a=document.getElementById("big");
function readUrl(input){
if(input.files){
    var reader=new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload=(b)=>{
        a.src=b.target.result;
    }
}
}