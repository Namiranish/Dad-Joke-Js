const btn = document.getElementById('btn')
const display = document.querySelector('#joke')


async function getJoke(){

    let apiUrl = 'https://api.api-ninjas.com/v1/dadjokes'
    
    let header = {
        headers:{
            'X-Api-Key':'3LTl8wEySXfK+mHPXEuZUQ==XAnXoUxjbWCf3tOI'
        }
    }
    try{
    //1. fetch the response object
    let response = await fetch(apiUrl,header);
    //2.convert the response object to json(java script object notation)
    let result = await response.json();

    // console.log(result);
    
    display.innerText = `${result[0].joke} 😆`
    }
    catch(error){
        display.innerText = 'Error occured';
    }


}


btn.addEventListener('click', getJoke)

