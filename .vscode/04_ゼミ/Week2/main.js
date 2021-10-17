const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const rmbutton = document.getElementById("rm-button")
const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function() {
  console.log(memoinput.value) //コンソールに表示
  const card = document.createElement("div") //カードを新規作成
  card.textContent = memoinput.value //カードの値を書き換え
  const removebotton = document.createElement("button")
  removebotton.innerHTML = "削除"
  document.body.appendChild(removebotton)

  memocontainer.append(card)
  memoinput.value = null
}
