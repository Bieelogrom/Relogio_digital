import { useEffect, useState } from 'react'
import styled from 'styled-components'

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Relogio = styled.div`
  width: 50%;
  height: 38%;
  background: none;
  border-radius: 10px;
  display: flex;
`

const Valor = styled.div`
  height: 100%;
  width: 50%;
  border: #C874D9 4px dotted;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  color: #FFF8F0;
`

function App() {

  const [data, setData] = useState(new Date());

  const [horas, setHoras] = useState(data.getHours());
  const [minutos, setMinutos] = useState(data.getMinutes());
  const [segundos, setSegundos] = useState(data.getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      const novaData = new Date()
      setData(novaData);
      setHoras(novaData.getHours());
      setMinutos(novaData.getMinutes());
      setSegundos(novaData.getSeconds());
    }, 1000);

    return () => clearInterval(interval)
  }, [])





  return (
    <MainWrapper>
      <Relogio>
        <Valor>
            {horas}
        </Valor>
        <Valor>
          {minutos}
        </Valor>
        <Valor>
          {segundos}
        </Valor>
      </Relogio>
    </MainWrapper>
  )
}

export default App
