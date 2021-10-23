const form = document.getElementById("chainForm")

const input = document.getElementById("chainInput")

const chainLogHtml = document.getElementById("chainLog")

let chainLog = []
let wordLog = []



function inputSubmitEvent(event) {
    event.preventDefault();
    const value = input.value


    if (wordLog.indexOf(value) === -1) {
        input.value = ""
        chainLog.push(`${value}`)
        wordLog.push(`${value}`)
        chainLogFunction()

        //중복값 채크
        //만약 중복되지 않았다면 여기 코드 실행

    } else {
        input.value = ""
        input.placeholder = "!!이미 사용된 단어입니다!!"
        function changePlaceholder() {input.placeholder = "이곳에 단어를 입력하세요"}
        setTimeout(changePlaceholder, 1000)
        //만약 중복되었다면 여기 코드 실행
    }
    
    


    
}


function chainLogFunction() {
    if (chainLog[0] !== undefined) {
        chainLogHtml.innerText = `${chainLog[0]}`
    }

    if (chainLog[1] !== undefined) {
        chainLogHtml.innerText = `${chainLog[0]} => ${chainLog[1]}`
    }

    if (chainLog[2] !== undefined) {
        chainLogHtml.innerText = `${chainLog[0]} => ${chainLog[1]} => ${chainLog[2]}`
    }

    if (chainLog[3] !== undefined) {
        chainLogHtml.innerText = `${chainLog[0]} => ${chainLog[1]} => ${chainLog[2]} => ${chainLog[3]}`
    }

    if (chainLog[4] !== undefined) {
        chainLogHtml.innerText = `${chainLog[0]} => ${chainLog[1]} => ${chainLog[2]} => ${chainLog[3]} => ${chainLog[4]}`
    }

    if (chainLog[5] !== undefined) {
        chainLogHtml.innerText = `${chainLog[0]} => ${chainLog[1]} => ${chainLog[2]} => ${chainLog[3]} => ${chainLog[4]} => ${chainLog[5]}`
    }

    if (chainLog[6] !== undefined) {
        chainLogHtml.innerText = `${chainLog[0]} => ${chainLog[1]} => ${chainLog[2]} => ${chainLog[3]} => ${chainLog[4]} => ${chainLog[5]} =>${chainLog[6]}`
    }

    if (chainLog[7] !== undefined) {
        chainLogHtml.innerText = `${chainLog[0]} => ${chainLog[1]} => ${chainLog[2]} => ${chainLog[3]} => ${chainLog[4]} => ${chainLog[5]} =>${chainLog[6]} => ${chainLog[7]}`
    }


    if (chainLog.length >= 8) {
        chainLog[0] = chainLog[1]
        chainLog[1] = chainLog[2]
        chainLog[2] = chainLog[3]
        chainLog[3] = chainLog[4]
        chainLog[4] = chainLog[5]
        chainLog[5] = chainLog[6]
        chainLog[6] = chainLog[7]
        chainLog.length = 7
    }
    
    //끝말잇기 유저한테 보여지는 기록
}

form.addEventListener("submit", inputSubmitEvent)

