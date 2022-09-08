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

//interaction setup

function setupInteraction(element){
    element.addEventListener( "click", function(event) {

        const el = event.target

        console.log( el.getAttribute("data-id") )
    })
}



function displayQuote( quote ){

    const container = document.querySelector("#information")

    const newQuote = createQuote(quote)

    setupInteraction( newQuote )

    container.append( newQuote )

}


function displayQuotes( quotes ){

    const formattedQuotes = quotes.map( formatQuote )

    formattedQuotes.forEach( displayQuote )

}


function getAndDisplayquotes(){
    getData({
        endpoint: "quotes", 
        pageNum: 0,
        elementsPerPage: 5,
        displayFunction: displayQuotes
    } )
}


//displayQuote( formatQuote(fakeData[4]))
//displayQuotes( fakeData )

getAndDisplayquotes()
console.log("Consumo API")