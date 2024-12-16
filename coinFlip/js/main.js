document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const res = await fetch(`/api?q=flip`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#flip").textContent = data.flip

  const img = document.querySelector('#coinImg');
  img.src = data.imgSrc;
}