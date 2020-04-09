// chose .viewport because it was a class
var viewPort = document.querySelector(".viewport")
var mainTag = document.querySelector("main")
var hTag = document.querySelector("h1")

// used all because there are 2 paragraphs
var pTags = document.querySelectorAll("p")

// added [1] becaues I need to be able to select the second element in the array
var sectionTwo = document.querySelectorAll("section")[1]

// used all because there is more than one <a> tag in the body
var aTag = document.querySelectorAll("a")
var imgTag = document.querySelector("img")

// css styling
viewPort.setAttribute("style", "background-color: #eeeddd;")
mainTag.setAttribute("style", "padding: 50px;")
sectionTwo.setAttribute("style", "border: 1px solid red; padding: 8px; text-align: center;")
hTag.setAttribute("style", "text-align: center;")

// used [0] and [1] to change the correct elements in the array. Chose href because we are working with a link.
aTag[0].setAttribute("href", "https://www.google.com/")
aTag[0].setAttribute("target", "_blank")
aTag[1].setAttribute("href", "https://www.nytimes.com/")
aTag[1].setAttribute("target", "_blank")

// chose src because we are working with an image
imgTag.setAttribute("src", "https://wallpaperaccess.com/full/439031.jpg")
imgTag.setAttribute("style", "text-align: center; height: auto; width: 100%;")

// created a for loop to set the same styling to all paragraphs in the body
for (var i = 0; i < pTags.length; i++) {
  pTags[i].setAttribute("style", "font-size: 14px; color: #282828; margin-bottom: 12px;")
}
