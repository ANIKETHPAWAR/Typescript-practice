function Delaycall(Fn:() => void){
    setTimeout(Fn,10000)
}

function log(){
    console.log("hi there")
}

Delaycall(log)