import cls from './TestListFilterButtons.module.sass'
import {FC} from "react";
import {ITest, ITestSort} from "@/entities/test";
import {TestListFilterButtonIcon} from './TestListFilterButtonIcon.tsx';
interface ITestListFilterButtons {
    sortObj: {
        sortKeys: ITestSort[]
        handleSortChange: (key: keyof ITest) => void
    }
}

const getSortIcon = (key: keyof ITest, sortKeys: { key: keyof ITest; order: "asc" | "desc" }[]) => {
    const sortItem = sortKeys.find((item) => item.key === key);
    if (!sortItem) return "";
    if (sortItem.order === "asc") {
        return <span>
            <TestListFilterButtonIcon/>
        </span>
    }

    return <span className={cls.desc}>
        <TestListFilterButtonIcon/>
    </span>
};

export const TestListFilterName:FC<ITestListFilterButtons> = ({sortObj}) => {

    const {
        sortKeys,
        handleSortChange: handleClick
    } = sortObj;

    return (
        <button
            onClick={() => handleClick('name')}
            className={`${cls.btn}`}
        >
            name {getSortIcon('name', sortKeys)}
        </button>
    )
}

export const TestListFilterType:FC<ITestListFilterButtons> = ({sortObj}) => {

    const {
        sortKeys,
        handleSortChange: handleClick
    } = sortObj;

    return (
        <button
            onClick={() => handleClick('type')}
            className={`${cls.btn}`}
        >
            type {getSortIcon('type', sortKeys)}
        </button>
    )
}

export const TestListFilterStatus:FC<ITestListFilterButtons> = ({sortObj}) => {

    const {
        sortKeys,
        handleSortChange: handleClick
    } = sortObj;

    return (
        <button
            onClick={() => handleClick('status')}
            className={`${cls.btn}`}
        >
            status {getSortIcon('status', sortKeys)}
        </button>
    )
}

export const TestListFilterSite:FC<ITestListFilterButtons> = ({sortObj}) => {

    const {
        sortKeys,
        handleSortChange: handleClick
    } = sortObj;

    return (
        <button
            onClick={() => handleClick('siteId')}
            className={`${cls.btn}`}
        >
            site {getSortIcon('siteId', sortKeys)}
        </button>
    )
}

