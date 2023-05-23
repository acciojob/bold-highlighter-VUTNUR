function highlight() {
    //Write your code here
 let strong_tags= document.getElementsByTagName("strong")
 for (let i = 0; i < strong_tags.length; i++) {
 	strong_tags[i].style.color="green"
 }

}


function return_normal() {
   let strong_tags= document.getElementsByTagName("strong")
 for (let i = 0; i < strong_tags.length; i++) {
 	strong_tags[i].style.color="black"
 }
}

