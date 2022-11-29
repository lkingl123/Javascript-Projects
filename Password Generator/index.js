let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefdgijklmnopqrstuvwxyz1234567890?:_!)(/)ˇ%|<>≤≤`@#$~^&*{}°^ėę€ż[]¨';ł’‘ßą‚–"

let output1 = document.getElementById("output-1")
let output2 = document.getElementById("output-2")
var passwordLength =  document.getElementById("password-length")
let outputArray = [output1, output2]

passwordLength.value = 8

function randomArrayElement() {
    let randomIndex = Math.floor(Math.random() * charset.length)
    return charset[randomIndex]
}


function passwordCompile() {
    let password = ""
    for (let i = 0; i < passwordLength.value; i++) {
        password += randomArrayElement()
    }
        return password
        
    }


function passwordGenerate() {
    for (let i = 0; i < outputArray.length; i++) {
        outputArray[i].value = ""
        outputArray[i].value += passwordCompile()
    }
}

function copyToClipboardOne() {

    var copyText = document.getElementById("output-1")
        copyText.select()
        copyText.setSelectionRange(0, 999)
        document.execCommand("copy")
        alert("copied")
      }
  

  function copyToClipboardTwo() {

    var copyText = document.getElementById("output-2")
        copyText.select()
        copyText.setSelectionRange(0, 999)
        document.execCommand("copy")
        alert("copied")
      }