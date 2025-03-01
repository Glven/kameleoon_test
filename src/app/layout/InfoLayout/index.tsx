import cls from './InfoLayout.module.sass'
import {FC} from "react";
import {Outlet} from "react-router-dom";
import {BackButton} from "@/features/BackButton";

export const InfoLayout:FC = () => {
    return (
        <section className={cls.info}>
            <div className={cls.info__content}>
                <div className="container">
                    <Outlet/>
                </div>
            </div>
            <div className={cls.info__footer}>
                <div className="container">
                    <BackButton/>
                </div>
            </div>
        </section>
    )
}
