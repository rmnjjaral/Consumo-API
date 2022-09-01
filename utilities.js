const apiUrl = "https://breakingbadapi.com/api/"

//obtain data

function getData ( endpoint, displayFunction ){

 //send request to API 
 const request = fetch (apiUrl + endpoint)
 
 //CALLBACK HELL
 request.then( function( response ){

    response.json().then( function( data ){

        displayFunction(data)

    })

 })

}