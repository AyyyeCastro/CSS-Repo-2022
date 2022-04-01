var a = document.querySelectorAll(`a`)

// Biography link - Hide all other IDs.
a[0].addEventListener(`click`, function(e){
   bio.classList.remove(`hide`)
   ed.classList.add(`hide`)
   hobbies.classList.add(`hide`)
})

// Eduction Link - Hide all other IDs. 
a[1].addEventListener(`click`, function(e){
   ed.classList.remove(`hide`)
   bio.classList.add(`hide`)
   hobbies.classList.add(`hide`)
})

// hobbies Link - Hide all other IDs. 
a[2].addEventListener(`click`, function(e){
   hobbies.classList.remove(`hide`)
   bio.classList.add(`hide`)
   ed.classList.add(`hide`)
})


/*
**************************************************************************

I couldn't figure out how to get the links to ACTIVELY WORK with the code below. I took a look at the Week 1 
demo and noticed you called the array of links, and referenced the function a different method. I was able to easily get the 
show/hide working that way! Where did I go wrong, in the code below?

************************************************************************** 

var bLink = document.querySelector(`#bio`)
var eLink = document.querySelector(`#ed`)
var hLink = document.querySelector(`#hobbies`)

bLink.addEventListener(`click`, showBio)
function showBio(e)
{
   e.preventDefault()
   e.target.classList.remove(`hide`)
   ed.classList.add(`hide`)
   hobbies.classList.add(`hide`)
}

eLink.addEventListener(`click`, showEd)
function showEd(e)
{
   e.preventDefault()
   e.target.classList.remove(`hide`)
   bio.classList.add(`hide`)
   hobbies.classList.add(`hide`)
}

hLink.addEventListener(`click`, showHob)
function showHob(e)
{
   e.preventDefault()
   e.target.classList.remove(`hide`)
   bio.classList.add(`hide`)
   ed.classList.add(`hide`)
}
*/ 

