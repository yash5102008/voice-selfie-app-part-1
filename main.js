function speak(){
    var synth = window.SpeechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new speechSynthesisUtterrance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");