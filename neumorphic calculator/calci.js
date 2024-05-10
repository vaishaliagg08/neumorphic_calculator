const themetoggle = document.getElementById('themetoggle');


const storedtheme = localStorage.getItem('theme')
if(storedtheme == 'Dark'){
    document.documentElement.style.setProperty('--bg-color' ,'#1A120B');
    document.documentElement.style.setProperty('--text-color','#E5E5CB');
    document.documentElement.style.setProperty('--keypad-bg-color','#1A120B');
    document.documentElement.style.setProperty('--keypad-bg-color2','#3C2A21');
     themetoggle.checked=true; //to  move the toggle right to dark 
}
else{
    document.documentElement.style.setProperty('--bg-color' ,'#F1EAFF');
    document.documentElement.style.setProperty('--text-color' ,'#D67BFF');
    document.documentElement.style.setProperty('--keypad-bg-color' ,'#F1EAFF');
    document.documentElement.style.setProperty('--keypad-bg-color2' ,'#D0A2F7');

}

themetoggle.addEventListener('change' , function(){

    if(this.checked){
        document.documentElement.style.setProperty('--bg-color' ,'#1A120B');
        document.documentElement.style.setProperty('--text-color','#E5E5CB');
        document.documentElement.style.setProperty('--keypad-bg-color','#1A120B');
        document.documentElement.style.setProperty('--keypad-bg-color2','#3C2A21');
        localStorage.setItem('theme' ,'Dark')
    }

    else{
        document.documentElement.style.setProperty('--bg-color' ,'#F1EAFF');
        document.documentElement.style.setProperty('--text-color' ,'#D67BFF');
        document.documentElement.style.setProperty('--keypad-bg-color' ,'#F1EAFF');
        document.documentElement.style.setProperty('--keypad-bg-color2' ,'#D0A2F7');
        localStorage.setItem('theme' ,'light')

    }
})

let result = document.getElementById("result");
function appendtoresult(value){
    result.value+= value;
}
function backspace(){
    if(result.value == 'ERROR')
    {
        result.value = '';
    }
    result.value = result.value.slice(0,-1);
}
function clearresult(){
    result.value ='';
}
function calculate(){
    try{
        if(result.value=='')
        {
            result.value = '0';
        }
        result.value = eval(result.value)
    }
    catch(e){
        result.value = 'ERROR'
    }
}