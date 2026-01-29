import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"
import {scheduleNew  } from "./schedule-new.js"

export async function scheduleFetchByDay({ date }) {
  try {
    // Buscando/Fazendo a requisição dos dados na API
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Converte para JSON
    const data = await response.json()

    // Filtra os agendamentos pelo dia selecionado
    const dalySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day")
    )

    return dalySchedules

  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
  }
}

