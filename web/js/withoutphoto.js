let Tags = document.querySelectorAll('.backIcon[data-href]');
let BackIcon = document.querySelectorAll('i[data-href]');
let Back = document.querySelectorAll('h3[data-herf]');
let forwardIcon = document.querySelectorAll('.forwardIcon[data-href]');
let iicon = document.querySelectorAll('.iicons[data-href]');
let h3icon = document.querySelectorAll('.h3Icons[data-href]');
let deleteMsg = document.querySelector('.delete');
let textArea = document.querySelector('#MessageText');

function theClick(n){
    let nTarget = n.target;
    window.location.replace(nTarget.getAttribute('data-href'));
}
  
function Refresh(){
    window.location.reload();
}

for(let i = 0; i < Tags.length; i++){
    let Tag = Tags[i];
    let BackIconTag = BackIcon[i]
    let BackTag = Back[i];
    let forwardIcons = forwardIcon[i];
    let iicons = iicon[i];
    let h3icons = h3icon[i];
    Tag.addEventListener("click", theClick);
    BackIconTag.addEventListener('click', theClick);
    forwardIcons.addEventListener('click', theClick);
    iicons.addEventListener('click', theClick);
    h3icons.addEventListener('click', theClick);
    // BackTag.addEventListener('click', theClick);
}


function RestTextArea(){
    textArea.value = textArea.value.replace(textArea.value, '');
}

deleteMsg.addEventListener("click", RestTextArea);

