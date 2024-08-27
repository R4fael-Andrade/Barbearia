import Horarios from "../../utilites/horarios";
import { Button } from "./style";


type Props = {
  time: Horarios,
  children: Horarios;

}
const TimeButton = ({time, children} : Props ) => {

  return (
    <>
    <Button>
      {children}
    </Button>
    </>
  )
}

export default TimeButton;