//test data 
const fakeData= [
    {
        quote_id: 1,
        quote: "Consectetur veniam sint ex labore.",
        author: "Nombre de autor/a 1"
    },
    {
        quote_id: 2,
        quote: "Officia veniam sit cillum minim irure.",
        author: "Nombre de autor/a 2"
    },
    {
        quote_id: 3,
        quote: "Laboris ad fugiat ipsum sit.",
        author: "Nombre de autor/a 3"
    },
    {
        quote_id: 4,
        quote: "Fugiat veniam proident minim ex dolore eu est enim.",
        author: "Nombre de autor/a 4"
    },
    {
        quote_id: 5,
        quote: "Aliquip est laborum consequat velit sit do fugiat laboris ullamco sunt.",
        author: "Nombre de autor/a 5"
    },

]

//obtain data
function getData ( displayFunction ){

 //send request to API 
 const request = fetch ("https://breakingbadapi.com/api/quotes")

 //CALLBACK HELL
 request.then( function( response ){

    response.json().then( function( data ){

        displayFunction(data)

    })

 })

}


//format data
function formatQuote( quote ){
    const formattedQuote = {
        text: quote.quote,
        author: quote.author,
        id: quote.quote_id
    }
    return formattedQuote
}
//display on screen

function createQuote ( quote ){

    const newQuote = document.createElement("blockquote")

    const text = document.createElement("p")
    const author = document.createElement("p")

    text.classList.add("text")
    author.classList.add("author")

    text.innerHTML = quote.text
    author.innerHTML = quote.author

    newQuote.append ( text )
    newQuote.append ( author )

    newQuote.setAttribute("data-id", quote.id)
    
    return newQuote 

}
function displayQuote( quote ){

    const container = document.querySelector("#information")

    const newQuote = createQuote(quote)

    container.append( newQuote )

    getAndDisplayquotes()

}

function displayQuotes( quotes ){

    const formattedQuotes = quotes.map( formatQuote )

    formattedQuotes.forEach( displayQuote )

}

function getAndDisplayquotes(){
    getData( displayQuotes )
}


//displayQuote( formatQuote(fakeData[4]))
//displayQuotes( fakeData )

getAndDisplayquotes()
console.log("Consumo API")