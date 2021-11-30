

function esconder(id) {
    let display = document.getElementById(id).style.display;
    if(display == "none" || display == "")
    document.getElementById(id).style.display = 'block';
    else
        document.getElementById(id).style.display = 'none';
}
function trocar(a,b){

    let display = document.getElementById(a).style.display;

    if(display == "none"  )
    document.getElementById(b).setAttribute("class", "demoClass1");
    else
    document.getElementById(b).setAttribute("class", "demoClass2");
    
   
    
}