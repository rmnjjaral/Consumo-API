
let pageNum = 0
let windowDebounce 

//format data
function formatCharacter( character ){

    const formattedCharacter = {
        image: character.img,
        name: character.name,
        nickname: character.nickname,
        id: character.char_id
    }
    return formattedCharacter

}

//display on screen

function createCharacter ( character ){

    const model = document.querySelector(".character.model")
    const newCharacter = model.cloneNode(true)
    newCharacter.classList.remove("model")

    const name = newCharacter.querySelector(".name")
    const nickname = newCharacter.querySelector(".nickname")
    const image = newCharacter.querySelector(".image img")

    name.innerHTML = character.name
    nickname.innerHTML = character.nickname

    image.setAttribute("src", character.image)
    image.setAttribute("alt", character.name)

    newCharacter.setAttribute("data-id", character.id)
    
    return newCharacter 

}

//interaction setup

function setupInteraction(element){

    element.addEventListener( "click", function(event) {

        const el = event.target

        console.log( el.getAttribute("data-id") )
    })

}



function displayCharacter( character ){

    const container = document.querySelector("#characters")

    const newCharacter = createCharacter(character)

    setupInteraction( newCharacter )

    container.append( newCharacter )

}


function displayCharacters( characters ){

    const formattedCharacters = characters.map( formatCharacter )

    formattedCharacters.forEach( displayCharacter )

}


function loadMore(){

    getData ({
        endpoint: "characters", 
        pageNum,
        elementsPerPage: 5,
        displayFunction: displayCharacters
    })

    pageNum++
    console.log("load more", pageNum)
}

function setupPagination(){

    const btn = document.querySelector("#nextpage")
    btn.addEventListener("click", loadMore)

}

function windowScroll(){

    if(! windowDebounce) {

    windowDebounce = setTimeout( function() {

        const container = document.querySelector("#characters")

        console.log("container.", container.clientHeight)
        console.log("window h", window.innerHeight)
        console.log("scroll ycontainer.", window.scrollY)
    
        if ( window.innerHeight + window.scrollY >= container.clientHeight ) {
            loadMore()
        }

        windowDebounce = null

    }, 300)

 }
}

function setupInfiniteScroll(){
    window.addEventListener("scroll", windowScroll)
}

setupInfiniteScroll()

setupPagination()

loadMore()

console.log("characters")