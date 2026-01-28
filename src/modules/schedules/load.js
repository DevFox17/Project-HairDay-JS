// Carregar agendamento do dia
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"

// Seleciona o input de data
const selectDate = document.getElementById("date")
export async function scheduleDay() {
  // Obtém a data do input
  const date = selectDate.value

  // Busca na API os agendamentos para carregar do lado direito da tela
  const dailySchedules = await scheduleFetchByDay({ date })
  console.log(dailySchedules)

  // Renderiza as horas dsponíveis
  hoursLoad( {date} )

  

  // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (from)
}