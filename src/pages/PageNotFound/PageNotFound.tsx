import {FC} from "react";
import cls from './PageNotFound.module.sass'
import {useNavigate} from "react-router-dom";
import {MAIN_PAGE} from "@/shared/config/path.ts";
const PageNotFound:FC = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(MAIN_PAGE)
    }

    return (
        <section className={cls.page}>
            <div className={cls.page__wrapper}>
                <img className={cls.page__img} src="https://cdn-icons-png.flaticon.com/512/755/755014.png" alt="photo"/>
                <h1 className={cls.page__title}>404. Страница не найдена</h1>
                <button onClick={handleClick} className={`btn btn--primary ${cls.page__btn}`}>На главную</button>
            </div>
        </section>
    )
}

export default PageNotFound
