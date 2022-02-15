function reflesh(bool=false){

    const stop = () =>{
        window.stop();
    }

    if(bool){
        window.location.reload();
        setTimeout(stop, 5000);

    }
}

export default reflesh