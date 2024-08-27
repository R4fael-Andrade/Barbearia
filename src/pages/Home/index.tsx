import TimeButton from "../../components/time-button/time-button";
import { HeaderContainer, Header, Title, Descricao, FormContainer,
     DataWrapper, TimeWrapper } from "./style";
import Horarios from "../../utilites/horarios";

const Home = () => {
    return (
        <HeaderContainer>
            <Header>
                <Title>Agende um atendimento</Title>
                <Descricao>Selecione data, horário e informe o nome para criar o agendamento</Descricao>
            </Header>
            <FormContainer>
                <DataWrapper>
                <fieldset>Data</fieldset>
                <input type="date"/>
                </DataWrapper>

                <TimeWrapper>
                    <fieldset>Horários</fieldset>
                    <label>Manhã</label>
                    <div>
                    <TimeButton time={Horarios.NineAM}>{Horarios.NineAM}</TimeButton>
                    <TimeButton time={Horarios.TenAM}>{Horarios.TenAM}</TimeButton>
                    <TimeButton time={Horarios.ElevenAM}>{Horarios.ElevenAM}</TimeButton>
                    <TimeButton time={Horarios.TwelveAM}>{Horarios.TwelveAM}</TimeButton>
                    </div>

                </TimeWrapper>
                <TimeWrapper>

                    <label>Tarde</label>
                    <div>
                    <TimeButton time={Horarios.NineAM}>{Horarios.NineAM}</TimeButton>
                    <TimeButton time={Horarios.TenAM}>{Horarios.TenAM}</TimeButton>
                    <TimeButton time={Horarios.ElevenAM}>{Horarios.ElevenAM}</TimeButton>
                    <TimeButton time={Horarios.TwelveAM}>{Horarios.TwelveAM}</TimeButton>
                    </div>

                </TimeWrapper>

                <TimeWrapper>
                    
                    <label>Noite</label>
                    <div>
                    <TimeButton time={Horarios.NineAM}>{Horarios.NineAM}</TimeButton>
                    <TimeButton time={Horarios.TenAM}>{Horarios.TenAM}</TimeButton>
                    <TimeButton time={Horarios.ElevenAM}>{Horarios.ElevenAM}</TimeButton>
                    <TimeButton time={Horarios.TwelveAM}>{Horarios.TwelveAM}</TimeButton>
                    </div>

                </TimeWrapper>
            </FormContainer>
        </HeaderContainer>
    )
}

export default Home
