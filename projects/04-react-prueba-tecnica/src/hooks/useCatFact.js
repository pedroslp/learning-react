import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts.js'

// En los custom hooks siempre hay que evitar devolver la actualizacion del estado
export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  // Efecto para recuperar la cita al cargar la pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
