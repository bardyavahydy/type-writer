const textElm = document.getElementById('text')
let setTimeoutTimer = null
let sentences = ["بردیا وحیدی هستم", "برنامه نویس فرانت‌اند", "جونیور"]
let indexGlobal = 0
let index = 0

const startTyping = () =>{
    if(indexGlobal >= sentences.length) indexGlobal = 0
    let sentenceSplit = sentences[indexGlobal].split('')
    contentTextHandler(sentences[indexGlobal], sentenceSplit)
}

const contentTextHandler = (sentence, words) =>{
    let timer = setInterval(() =>{
        textElm.textContent += words[index]
        ++index
        if(sentence === textElm.innerText){
            clearInterval(timer)
            setTimeoutTimer = setTimeout(() => clearContentTextHandler(), 700)
        }
    }, 300)
}

const clearContentTextHandler = () =>{
    let timer = setInterval(() =>{
        index = textElm.textContent.length - 1
        textElm.textContent = textElm.textContent.slice(0, index)
        if(text.innerText === ""){
            clearTimeout(setTimeoutTimer)
            clearInterval(timer)
            ++indexGlobal
            startTyping()
        }
    }, 300)
}

window.addEventListener('load', () => startTyping())