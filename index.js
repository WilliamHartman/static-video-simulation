let toggleVideo = false;

function randomVid(){
    if(!toggleVideo){
        document.getElementById('toggleVideo').style.display = "none"
        toggleVideo = true;
    }else{
        document.getElementById('toggleVideo').style.display = "block"
        toggleVideo = false;
    }
}