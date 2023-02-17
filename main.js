var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();

function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
   
    var content= event.results[0][0].transcript;
    console.log(content);

    if(content=="selfie"){
        speak();
    }
    
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
Webcam.attach("#camera");
setTimeout (function(){
    img_id= "selfie1";
    takesnapshot();
    speak_data = "Taking you photo in 10 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},5000);

setTimeout (function(){
    img_id= "selfie2";
    takesnapshot();
    speak_data = "Taking you photo in 15 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},10000);

setTimeout (function(){
    img_id= "selfie3";
    takesnapshot();
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},15000);
}

camera=document.getElementById("camera");

Webcam.set({
    width:360, height:250,
    image_format:"png",
    png_quality:90
});

function takesnapshot(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            
            document.getElementById("result1").innerHTML="<img id='selfie1' src='"+data_uri+"'>";

        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML="<img id='selfie2' src='"+data_uri+"'>";
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML="<img id='selfie3' src='"+data_uri+"'>";
        }
    });
}


