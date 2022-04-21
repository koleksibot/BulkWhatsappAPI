const importBtn = document.querySelector('.import');
const h4 = document.querySelector('#h4');
const show_numbers = document.querySelector('.show_numbers');
const tagTextArea = document.querySelector('#MessageText');
const send = document.querySelector('.send');
const SendingMessage = document.querySelector('.sending');
const showResult = document.querySelector('.show_result');
const sendLog = document.querySelector('.send_log');
const snedMsgBtn = document.querySelector('.sendingBtn');
const finshed = document.querySelector('.Finshed');
const finMsgBtn = document.querySelector('.finMsgMainbtn');
const showLogBtn = document.querySelector('.showLogBtn');
const ProgramLog = document.querySelector('.ProgramLog');
const LogBtn = document.querySelector('.Token4');
const showLogProgram = document.querySelector('.showLogText');
const Token1 = document.querySelector('.Token');
const mainSettings = document.querySelector('.main_token');
const hideSettingsBtn = document.querySelector('.hideSettingsBtn');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const submit = document.querySelector('.submit');
const names = document.querySelector('.names');



// new

function SelectNames(){
  valueTextArea = tagTextArea.value
  tagTextArea.value = 'Hi {{name}}\n\n' + tagTextArea.value + "\n\n{{emoji}}{{emoji}}\n\nTime:\n{{time}}";
  eel.selectName();
}

names.addEventListener('click', SelectNames);

// fin new

document.addEventListener('contextmenu', event => event.preventDefault());

function select(){
    eel.selectFolder();
    console.log("clicked")
}
  
importBtn.addEventListener('click', select);
  
function addText(text){
  h4.innerHTML = 'Whatsapp Numbers (' + text + ')';
}
eel.expose(addText);

function addNumbers(Numbers){
  show_numbers.innerHTML += Numbers +"<br>";

}
eel.expose(addNumbers);

function Message(){
  eel.Get_Message(valueTextArea);
  SendingMessage.style.display = "block";
}

send.addEventListener('click', Message);

function Result(text){
  showResult.innerHTML += text + "<br>";
}

eel.expose(Result);

function Log(number){
  sendLog.innerHTML = 'Send Log (' + number + ')';
}

eel.expose(Log);

function MsgBtn(){
  SendingMessage.style.display = "none";
}

snedMsgBtn.addEventListener('click', MsgBtn);

function finshMsg(){
  finshed.style.display = "block";
}

eel.expose(finshMsg);

function FinBtn(){
  finshed.style.display = "none";
}

finMsgBtn.addEventListener('click', FinBtn);

function startLog(){
  ProgramLog.style.display = 'block';
}

LogBtn.addEventListener('click', startLog);

function finLog(){
  ProgramLog.style.display = 'none';
}

showLogBtn.addEventListener('click', finLog);


function showLogProgramMsg(Msg){
  showLogProgram.innerHTML +=  "<br>" + Msg + "<br>";
}
eel.expose(showLogProgramMsg);

function showSettings(){
  mainSettings.style.display = "block";
}

Token1.addEventListener('click', showSettings);

function hideSettings(){
  mainSettings.style.display = "none";
}

hideSettingsBtn.addEventListener('click', hideSettings);

function getInputOneValue() {
  inputOneValue = input1.value;
  inputTwoValue = input2.value
  eel.getInputValue(inputOneValue, inputTwoValue)
}

submit.addEventListener('click', getInputOneValue);

