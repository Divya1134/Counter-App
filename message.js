
// designing of count 
let count = 0;
    document.getElementById('increment').onclick=
    function display(){
        count +=1;
        if(count > 6){
            alert("You have reached max limit to increment")
        }else{
            document.getElementById('count').innerHTML=count
        }
    }
    document.getElementById('decrement').onclick=
    function display(){
        count -=1;
        if(count < 0){
            alert("You have reached max limit to decrement")
        }else{
            document.getElementById('count').innerHTML=count
        }
    }
    document.getElementById('reset').onclick=
    function display(){
        count = 0;
        document.getElementById('count').innerHTML=count
    }   
