import {FC} from "react";
import cls from './TestListEmpty.module.sass'
interface ITestListEmpty {
    handleReset: () => void
}
const TestListEmpty:FC<ITestListEmpty> = ({handleReset}) => {
    return (
        <div className={cls.empty}>
            <div className={cls.empty__wrapper}>
                <h2 className={cls.empty__title}>
                    Your search did not match any results.
                </h2>
                <button
                    className={`btn btn--primary ${cls.empty__btn}`}
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default TestListEmpty
