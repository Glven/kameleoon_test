import {FC} from "react";
import cls from './Loading.module.sass'
interface ILoading {
    mini?: boolean
}
export const Loading:FC<ILoading> = ({mini}) => {
    return (
        <div className={mini ? cls.loadingMini : cls.loading}>
            <div className={cls.loading__icon}></div>
        </div>
    )
}
