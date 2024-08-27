import {Container, Title, Paragrafo, DateInput, CardAgenda, ImageContainer} from './styles'
import solNascente from '../../assets/icon-nascer-sol.png'
import sol from '../../assets/icon-sol.png'
import lua from '../../assets/icon-lua.png'

const Agenda = () => {
    return (
        <Container>
            <header>
            <div>
            <Title>Sua Agenda</Title>
            <Paragrafo>Consulte os seus cortes de cabelo agendados por dia</Paragrafo>
            </div>
            <DateInput type="date" />
            </header>

            <CardAgenda>
                <header>
                    <ImageContainer style={{display:'flex'}}>
                    <img src={solNascente} alt="Icon Sol" />
                    <p>Manhã</p>
                    </ImageContainer>
                    <p>09h-12h</p>
                </header>
                <div className='card-content'>
                    <span>11:00</span>
                    <p>Rafael Sousa</p>
                </div>
                <div className='card-content'>
                    <span>12:00</span>
                    <p>Rafael Sousa</p>
                </div>
            </CardAgenda>

            <CardAgenda>
                <header>
                    <ImageContainer style={{display:'flex'}}>
                    <img src={sol} alt="Icon Sol" />
                    <p>Tarde</p>
                    </ImageContainer>
                    <p>13h-18h</p>
                </header>
                <div className='card-content'>
                    <span>13:00</span>
                    <p>Rafael Sousa</p>
                </div>
                <div className='card-content'>
                    <span>14:00</span>
                    <p>Rafael Sousa</p>
                </div>
                <div className='card-content'>
                    <span>15:00</span>
                    <p>Rafael Sousa</p>
                </div>
            </CardAgenda>

            <CardAgenda>
                <header>
                    <ImageContainer style={{display:'flex'}}>
                    <img src={lua} alt='Icon Lua' />
                    <p>Manhã</p>
                    </ImageContainer>
                    <p>19h-21h</p>
                </header>
                <div className='card-content'>
                    <span>19:00</span>
                    <p>Rafael Sousa</p>
                </div>
                <div className='card-content'>
                    <span>20:00</span>
                    <p>Rafael Sousa</p>
                </div>
            </CardAgenda>
            
        </Container>
    )
}

export default Agenda