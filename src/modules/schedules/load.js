// Carregar agendamento do dia

import {hoursLoad} from "../form/hours-load.js"

// Seleciona o input de data
const selectDate = document.getElementById("date")
export function schedulesDay() {
  // Obtém a data do input
  const date = selectDate.value

  // Renderiza as horas dsponíveis
  hoursLoad( {date} )

  // Busca na API os agendamentos para carregar do lado direito da tela

  // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (from)
}