/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.  This is not required for your grade on this
 * assignment, but it'll allow you to have the full experience of the site
 * as we've implemented it so far.
 */

var twitNew = document.querySelectorAll(".twit")
var new_modal = document.getElementById("create-twit-button")
var background = document.getElementById("modal-backdrop")
var twit = document.getElementById("create-twit-modal")
var search = document.getElementById("navbar-search-input").value
var button = document.getElementById("navbar-search-button")
var searchReal = document.getElementById("navbar-search-input")

var cancel_button = document.getElementsByClassName("modal-cancel-button")[0]
var accept_button = document.getElementsByClassName("modal-accept-button")[0]
var close_button = document.getElementsByClassName("modal-close-button")[0]
var new_container = document.getElementsByClassName("twit-container")[0]

searchReal.addEventListener('input', function () {
    //twitContent = document.getElementsByClassName("twit-content").value
    update()
})

button.addEventListener("click", function () {
    //twitContent = document.getElementsByClassName("twit-content").value
    update()
})

function update(){
    console.log("Goat")
    twitContent = document.getElementsByClassName("twit-content").value
    for(i = 0; i < twitNew.length; i++){
        if (twitNew[i].textContent.toLowerCase().includes(searchReal.value.toLowerCase()) == false){
            console.log("hello")
            twitNew[i].classList.add("hidden")
        }
        else{
            twitNew[i].classList.remove("hidden")
        }   
    }
}

new_modal.onclick = function(){
    twit.style.display = "block"
    background.style.display ="block"
}

background.onclick = function(){
    twit.style.display = "block"
    background.style.display ="block"
    
}

cancel_button.onclick = function(){
    twit.style.display = "none"
    background.style.display ="none"
    document.getElementById("twit-text-input").value = ""
    document.getElementById("twit-attribution-input").value = ""
}

close_button.onclick = function(){
    twit.style.display = "none"
    background.style.display = "none"
    document.getElementById("twit-text-input").value = ""
    document.getElementById("twit-attribution-input").value = ""
}

accept_button.onclick = function(){
    var text_input = document.getElementById("twit-text-input").value

    var author_input = document.getElementById("twit-attribution-input").value
    
    if(text_input == false || author_input == false){
        alert("Please make sure all text is filled in")
        console.log("We up in here")
        text_input = document.getElementById("twit-text-input").value

        author_input = document.getElementById("twit-attribution-input").value
    }

    else{
        create_twit(text_input, author_input)
    }

    //create_twit(text_input, author_input)

    twit.style.display = "none"
    background.style.display = "none"

    document.getElementById("twit-text-input").value = ""
    document.getElementById("twit-attribution-input").value = ""
}

function create_twit (text_input, author_input){
    console.log("Testing AEL")

    var new_container = document.getElementsByClassName("twit-container")[0]

    var new_twit = document.createElement("article")
    new_twit.classList.add("twit")
        
    var new_icon = document.createElement("div")
    new_icon.classList.add("twit-icon")

    var new_i = document.createElement('i')
    new_i.classList.add("fas", "fa-bullhorn")

    var new_content = document.createElement("div")
    new_content.classList.add("twit-content")

    var new_text = document.createElement("p")
    new_text.classList.add("twit-text")

    var new_author = document.createElement("p")
    new_author.classList.add("twit-author")

    var new_author_highlight = document.createElement("a")
    new_author_highlight.setAttribute("href", "#")

    new_text.textContent = text_input
    new_author.textContent = author_input

    //appending a
    new_author.appendChild(new_author_highlight)

    //appending second div
    new_content.appendChild(new_text)
    
    new_content.appendChild(new_author)
    //new_author.appendChild(new_author_highlight)
    //new_content.appendChild(new_text)new_content.appendChild(new_text)

    //appending first div
    new_icon.appendChild(new_i)

    //appending first and second divs
    new_twit.appendChild(new_icon)
    new_twit.appendChild(new_content)

    //append twits to container
    new_container.appendChild(new_twit)

    twit.style.display = "none"
    background.style.display = "none"

}


button.onclick = function(){
    //console.log("hello, world")
    var textInput = document.getElementById("twit-text-input").value

    var authorInput = document.getElementById("twit-attribution-input").value

    var newContainer = document.getElementsByClassName("twit-container")[0]

    let x = document.getElementsByClassName("twit-container")
    for(i = 0; i < twitNew.length; i++){
        //twit[i]...
        console.log("hello, world")
        if(textInput.toLowerCase().includes(search.toLowerCase())|| authorInput.toLowerCase().includes(search.toLowerCase())
        ){
            //create_twit(textInput, authorInput)
        }
    }
}


alert('JS successfully loaded.');
