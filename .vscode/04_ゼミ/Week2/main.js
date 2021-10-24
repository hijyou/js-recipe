const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const rmbutton = document.getElementById("rm-button")
const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function() {
  console.log(memoinput.value) //コンソールに表示
  const card = document.createElement("div") //カードを新規作成
  card.textContent = memoinput.value //カードの値を書き換え
  memocontainer.append(card)

  const removebotton = document.createElement("button")

  memocontainer.append(card)
  card.append(removebotton)

  removebotton.innerHTML = "削除"
  removebotton.setAttribute("onclick", "pushButton()")
  //card.appendChild(removebotton)

  memoinput.value = null

  removebotton.onclick = function() {
    card.textContent = ""
    removebotton.remove()
    card.remove()
  }
}
