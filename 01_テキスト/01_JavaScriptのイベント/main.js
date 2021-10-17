const button = document.getElementById("button") //ボタンを定義

const alertMessage = function() {
  //関数
  alert("クリックしたね")
}

button.onclick = alertMessage() //ボタンを押すとアラートが出る

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue
