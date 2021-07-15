prediction = "";

Webcam.set({
    width: 350,
    height: 260,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Rka54KmRR/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "The prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    utterThis.rate = 1;
    synth.speak(utterThis)
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_gesture_name").innerHTML = results[0].label;
      prediction = results[0].label;
      speak();
      if(results[0].label == "thumbs_up")
      {
          document.getElementById("update_emoji").innerHTML = "&#128077;";
      }
      if(results[0].label == "thumbs_down")
      {
          document.getElementById("update_emoji").innerHTML = "&#128078;";
      }
      if(results[0].label == "palm")
      {
          document.getElementById("update_emoji").innerHTML = "&#9995;";
      }
      if(results[0].label == "raised_fist")
      {
          document.getElementById("update_emoji").innerHTML = "&#9994;";
      }
      if(results[0].label == "amazing")
      {
          document.getElementById("update_emoji").innerHTML = "&#128076;";
      }
      if(results[0].label == "sign_of_the_horns")
      {
          document.getElementById("update_emoji").innerHTML = "&#129304;";
      }
      if(results[0].label == "up")
      {
          document.getElementById("update_emoji").innerHTML = "&#128070;";
      }
      if(results[0].label == "down")
      {
          document.getElementById("update_emoji").innerHTML = "&#128071;";
      }
      if(results[0].label == "left")
      {
          document.getElementById("update_emoji").innerHTML = "&#128072;";
      }
      if(results[0].label == "right")
      {
          document.getElementById("update_emoji").innerHTML = "&#128073;";
      }
    }
  }
  