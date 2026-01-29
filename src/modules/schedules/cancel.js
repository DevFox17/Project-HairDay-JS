import { scheduleDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel"
const periods = document.querySelectorAll(".period")


// Gera evento de click para cada lsita (mnhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de click na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtem a li pai do elemento clicado
      const item = event.target.closest("li")

      // Pega o id do agendamento para remover
      const { id } = item.dataset

      // Confirma que o id foi selecionado
      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        // Confirma se o usuário quer cancelar
        if (isConfirm) {
          // Faz a requisição na API pr cancelar
          await scheduleCancel({ id })

          // Recarrega os agendamentos
          scheduleDay()
        }
      }
    }
  })
})