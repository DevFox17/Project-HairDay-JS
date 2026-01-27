import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Previne o comportamento padrão de carregar a página
  event.preventDefault()

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim()

    if (!name) {
      return alert("Informe o nome do cliente!")
    }


    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    // Recupera o horário selecionado
    if (!hourSelected) {
      return alert("Selecione a hora")
    }

    // Recuperar somente a hora
    const hour = Number(hourSelected.innerText.split(":")[0])

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gera um ID
    const id = new Date().getTime()

    console.log({
      id,
      name,
      when,
    })
  } catch (error) {
    alert("não foi possível realizar o agendamento")
  }
}