import { withControlRerenders } from "../../hocs/withControlRerenders";
import s from "./rapid-button.module.css";

type TRapidButtonProps = {
    onClick: () => void; 
}

const RapidButton = ({onClick}: TRapidButtonProps) => {
    return (
        <button className={s.button} onClick={() => onClick()}>
            Изменить ширину
        </button>
    );
}

export default withControlRerenders("RapidButton", RapidButton);