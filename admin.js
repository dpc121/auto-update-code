
let scripts = [];
let kill = true;

function login(){
  if(pass.value==="ADMIN123"){
    panel.style.display="block";
  } else alert("Wrong password");
}

function toggleKill(){
  kill = !kill;
  killEl = { global: kill };
  document.getElementById("kill").textContent = JSON.stringify(killEl,null,2);
}

function gen(){
  const lic = {
    token: Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2),
    device: null,
    active: true
  };
  document.getElementById("license").textContent = JSON.stringify(lic,null,2);
}

async function addScript(){
  const name = sname.value;
  const code = scode.value;
  if(!name||!code){alert("Fill all");return}
  const enc = await encrypt(code,"MASTER_SECRET");
  scripts.push({name,iv:enc.iv,payload:enc.payload});
  document.getElementById("scripts").textContent = JSON.stringify(scripts,null,2);
  scode.value="";
}
