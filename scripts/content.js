const audio = document.getElementById("remote-media")
console.log("[BBB-Slider] Well Hello there!")
console.log(audio)
if (audio == null || audio == undefined) console.log("Error, this page has no audio!")
audio.setAttribute("controls","true")
audio.style.position = "absolute"
audio.style.bottom = "5px"
audio.style.right = "10rem"