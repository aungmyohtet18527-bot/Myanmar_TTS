const textInput = document.getElementById('text');
const speakBtn = document.getElementById('speakBtn');
const stopBtn = document.getElementById('stopBtn');
const downloadBtn = document.getElementById('downloadBtn');

let currentAudioBlob = null;

speakBtn.addEventListener('click', async ()=>{

const text = textInput.value.trim();

if(!text){
 alert('စာသား ထည့်ပါ');
 return;
}

// FREE API EXAMPLE
const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=my&client=tw-ob`;

const audio = document.getElementById('audioPlayer');
audio.src = url;
audio.play();

const response = await fetch(url);
const blob = await response.blob();
currentAudioBlob = blob;
});

stopBtn.addEventListener('click', ()=>{
window.speechSynthesis.cancel();
document.getElementById('audioPlayer').pause();
});

downloadBtn.addEventListener('click', ()=>{
if(!currentAudioBlob){
 alert('အသံကို အရင် Generate လုပ်ပါ');
 return;
}

const link = document.createElement('a');
link.href = URL.createObjectURL(currentAudioBlob);
link.download = 'myanmar-voice.mp3';
link.click();
});
