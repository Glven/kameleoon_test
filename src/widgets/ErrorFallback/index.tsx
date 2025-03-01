import {FC} from "react";
import cls from './ErrorFallback.module.sass'
import {useNavigate} from "react-router-dom";
import {MAIN_PAGE} from "@/shared/config/path.ts";
export const ErrorFallback:FC = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(MAIN_PAGE)
    }

    return (
        <div className={cls.error}>
            <div className={cls.error__wrapper}>
                <h1 className={cls.error__title}>
                    Произошла непредвиденная ошибка
                </h1>
                <button
                    onClick={handleClick}
                    className={cls.error__btn}
                >
                    Перезагрузить
                </button>
            </div>
        </div>
    )
}
