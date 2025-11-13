const bg=document.getElementById('bgMusic');
const playBtn=document.getElementById('playMusicBtn');
const forgiveBtn=document.getElementById('forgiveBtn');
const editBtn=document.getElementById('editBtn');
const apologyText=document.getElementById('apologyText');

function toggleMusic(){
  if(bg.paused){
    bg.play();
    playBtn.textContent='⏸ ปิดเพลง';
    startHearts();
  }else{
    bg.pause();
    playBtn.textContent='▶ เปิดเพลง';
    stopHearts();
  }
}
playBtn.addEventListener('click',toggleMusic);

let heartInterval;
function startHearts(){
  stopHearts();
  heartInterval=setInterval(()=>{
    const h=document.createElement('div');
    h.className='floating-heart';
    h.textContent='❤';
    h.style.left=Math.random()*window.innerWidth+'px';
    h.style.bottom='0';
    h.style.fontSize=(16+Math.random()*30)+'px';
    h.style.color='rgba(255,107,154,'+(0.6+Math.random()*0.4)+')';
    document.body.appendChild(h);
    const dur=4000+Math.random()*2000;
    h.animate([{transform:'translateY(0)'},{transform:`translateY(-${window.innerHeight+100}px)`}],{duration:dur,easing:'linear'}).onfinish=()=>h.remove();
  },300);
}
function stopHearts(){clearInterval(heartInterval);}

setInterval(()=>{
  const p=document.createElement('div');
  p.className='petal';
  p.style.left=Math.random()*window.innerWidth+'px';
  p.style.top='-20px';
  p.style.transform=`rotate(${Math.random()*60-30}deg)`;
  document.body.appendChild(p);
  const dur=8000+Math.random()*4000;
  p.animate([
    {transform:`translateY(0px) rotate(0deg)`,opacity:1},
    {transform:`translateY(${window.innerHeight+50}px) rotate(${Math.random()*360}deg)`,opacity:0.5}
  ],{duration:dur,easing:'linear'}).onfinish=()=>p.remove();
},400);

const cuteMsgs=[
  'รักนะ ❤️','หายงอนเถอะน้าา~','คิดถึงเค้าไหม','กอดหน่อยได้มั้ย~',
  'จะไม่ทำให้เสียใจอีกแล้วนะ','อยู่ด้วยกันนานๆนะ','เค้าขอโทษจริงๆนะ',
  'งอนน้อยๆนะที่รัก','เค้ารักเธอมากน้า','ขอโทษที่ทำให้เสียใจบ่อย'
];
setInterval(()=>{
  const msg=document.createElement('div');
  msg.className='popup-msg';
  msg.textContent=cuteMsgs[Math.floor(Math.random()*cuteMsgs.length)];
  msg.style.left=Math.random()*(window.innerWidth-120)+'px';
  msg.style.top=Math.random()*(window.innerHeight-200)+'px';
  msg.style.zIndex=1;
  document.body.appendChild(msg);
  setTimeout(()=>msg.remove(),3000);
},2500);

forgiveBtn.addEventListener('click',()=>{
  apologyText.innerHTML='ขอบคุณที่ยกโทษให้นะ 💗 เค้าจะไม่ทำให้เสียใจอีกแล้ว คืนดีกันนะครับ 😊';
  for(let i=0;i<20;i++){
    const h=document.createElement('div');
    h.className='floating-heart';
    h.textContent='❤';
    h.style.left=Math.random()*window.innerWidth+'px';
    h.style.bottom='0';
    h.style.fontSize=(20+Math.random()*40)+'px';
    h.style.color='rgba(255,107,154,0.8)';
    document.body.appendChild(h);
    const dur=3000+Math.random()*2000;
    h.animate([{transform:'translateY(0)'},{transform:`translateY(-${window.innerHeight}px)`}],{duration:dur,easing:'ease-out'}).onfinish=()=>h.remove();
  }
});