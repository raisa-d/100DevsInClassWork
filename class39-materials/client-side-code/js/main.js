document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const characterName = document.querySelector('input').value
    try{
        const response = await fetch(`https://the-100-names-api.onrender.com/api/${characterName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#name').innerText = data[0]['name']
        document.querySelector('#clan').innerText = data[0]['clanAffiliation'].join(', ');
        document.querySelector('#alias').innerText = data[0]['aliases'].join(', ');

    }catch(error){
        console.log(error)
    }
}