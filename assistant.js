const btn = document.querySelector("#start-btn");



const recognition = new webkitSpeechRecognition();
recognition.continuos = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

btn.addEventListener("click", () => {
    recognition.start();
});



let utter = new SpeechSynthesisUtterance("Hi,How are you")
utter.onend = () =>{
    recognition.start();
}

recognition.onresult = (e) => {
const transcript = e.results[e.results.length - 1][0].transcript.trim();

//start of giving command
if (transcript === "hello"){
    recognition.stop();
    utter.text = ("Hi sir");
    synth.speak(utter);
}
if (transcript === "hi"){
    recognition.stop();
    utter.text = ("Hi sir");
    synth.speak(utter);
}
if (transcript === "hello Siri"){
    recognition.stop();
    utter.text = ("Hi sir");
    synth.speak(utter);
}
if (transcript === "hi Siri"){
    recognition.stop();
    utter.text = ("Hi sir");
    synth.speak(utter);
}
else if (transcript === "hello how are you" ){
    recognition.stop();
    utter.text = ("Hi sir, I am fine how about you?");
    synth.speak(utter);
}
else if (transcript === "hello Siri how are you" ){
    recognition.stop();
    utter.text = ("Hi sir, I am fine how about you?");
    synth.speak(utter);
}
else if (transcript === "hi how are you" ){
    recognition.stop();
    utter.text = ("Hi sir, I am fine how about you?");
    synth.speak(utter);
}
else if (transcript === "hi Siri how are you" ){
    recognition.stop();
    utter.text = ("Hi sir, I am fine how about you?");
    synth.speak(utter);
}
else if (transcript === "what is your age"){
    recognition.stop();
    utter.text = ("Age is just a number");
    synth.speak(utter);
}
else if (transcript === "Siri what is your age"){
    recognition.stop();
    utter.text = ("I am young like a new born ginger.");
    synth.speak(utter);
}
else if (transcript === "how old are you"){
    recognition.stop();
    utter.text = ("Age is just a number,but I am invented in May 2021.");
    synth.speak(utter);
}
else if (transcript === "how are you"){
    recognition.stop();
    utter.text = ("Oh I am Great sir How about you");
    synth.speak(utter);
}
else if (transcript === "how are you Siri"){
    recognition.stop();
    utter.text = ("Oh I am Great sir How about you");
    synth.speak(utter);
}
else if (transcript === "Siri how are you"){
    recognition.stop();
    utter.text = ("Oh I am Great sir How about you");
    synth.speak(utter);
}
else if (transcript === "I am fine" ){
    recognition.stop();
    utter.text = ("That's great!");
    synth.speak(utter);
}
else if (transcript === "thank you Siri" ){
    recognition.stop();
    utter.text = ("Always welcome Sir");
    synth.speak(utter);
}
else if (transcript === "thank you" ){
    recognition.stop();
    utter.text = ("Always welcome Sir");
    synth.speak(utter);
}
else if (transcript === "bye bye" ){
    recognition.stop();
    utter.text = ("Bye Sir and have a great Day!!");
    synth.speak(utter);
}
else if (transcript === "bye" ){
    recognition.stop();
    utter.text = ("Bye Sir and have a great Day!!");
    synth.speak(utter);
}
else if (transcript === "bye bye Siri" ){
    recognition.stop();
    utter.text = ("Bye Sir and have a great Day!!");
    synth.speak(utter);
}
else if (transcript === "bye Siri" ){
    recognition.stop();
    utter.text = ("Bye Sir and have a great Day!!");
    synth.speak(utter);
}
else if (transcript === "boy" ){
    recognition.stop();
    utter.text = ("Bye Sir and have a great Day!!");
    synth.speak(utter);
}





console.log(transcript);



//end of giving command
}

