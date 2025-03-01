import {FC} from "react";
import {useNavigate} from "react-router-dom";
import cls from './BackButton.module.sass'
export const BackButton:FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <button
            className={cls.btn}
            onClick={handleClick}
        >
            <span className={cls.btn__arrow}></span> <span className={cls.btn__text}>Назад</span>
        </button>
    )
}
