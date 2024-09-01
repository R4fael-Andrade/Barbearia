import TimeButton from "../../components/time-button/time-button";
import { AsideContainer, Header, Title, Descricao, FormContainer,
     DataWrapper, TimeWrapper, 
     NameWrapper,
     NameContainer,
     UserIcon,
     SendBtn,
     Logo} from "./style";
import Horarios from "../../utilites/horarios";

const Home = () => {
    return (
        <AsideContainer>
            <Logo>
                <p>Barbearia</p>
                <span></span>
            </Logo>
            <Header>
                <Title>Agende um atendimento</Title>
                <Descricao>Selecione data, horário e informe o nome para criar o agendamento</Descricao>
            </Header>
            
            <FormContainer>
                <DataWrapper>
                    Data
                <input type="date"/>
                </DataWrapper>

                <TimeWrapper>
                    Horários
                    <label>Manhã</label>
                    <div>
                    <TimeButton time={Horarios.NineAM}>{Horarios.NineAM}</TimeButton>
                    <TimeButton time={Horarios.TenAM}>{Horarios.TenAM}</TimeButton>
                    <TimeButton time={Horarios.ElevenAM}>{Horarios.ElevenAM}</TimeButton>
                    <TimeButton time={Horarios.TwelveAM}>{Horarios.TwelveAM}</TimeButton>
                    </div>

                    <label>Tarde</label>
                    <div>
                    <TimeButton time={Horarios.OnePM}>{Horarios.OnePM}</TimeButton>
                    <TimeButton time={Horarios.TwoPM}>{Horarios.TwoPM}</TimeButton>
                    <TimeButton time={Horarios.ThreePM}>{Horarios.ThreePM}</TimeButton>
                    <TimeButton time={Horarios.FourPM}>{Horarios.FourPM}</TimeButton>
                    </div>
                    
                    <label>Noite</label>
                    <div>
                    <TimeButton time={Horarios.FivePM}>{Horarios.FivePM}</TimeButton>
                    <TimeButton time={Horarios.SixPM}>{Horarios.SixPM}</TimeButton>
                    <TimeButton time={Horarios.SevenPM}>{Horarios.SevenPM}</TimeButton>

                    </div>
                </TimeWrapper>

                <NameWrapper>
                    Cliente
                    <NameContainer>
                        <UserIcon />
                        <input type="text" placeholder="Informe seu nome" id="name"/>
                    </NameContainer>
                </NameWrapper>

                <SendBtn>AGENDAR</SendBtn>
            </FormContainer>
        </AsideContainer>
    )
}

export default Home
