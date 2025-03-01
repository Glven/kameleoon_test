import {FC, memo, ReactNode} from "react";
import {ITest} from "@/entities/test";
import cls from './TestListItem.module.sass'
import {SiteColor} from "@/entities/site";
import {StatusColor} from "@/entities/status";
import {removeUrlPrefix} from "@/shared/helpers";
interface ITestListItem {
    actionButton: ReactNode
    test: ITest,
    site: string
}
const TestListItemComp:FC<ITestListItem> = ({actionButton, test, site}) => {

    return (
        <div className={`${cls.row} ${cls.test}`}>
            <div className={cls.test__leftPlank} style={{background: SiteColor[removeUrlPrefix(site) as keyof typeof SiteColor]}}></div>
            <p className={cls.test__name}>{test.name}</p>
            <p className={cls.test__type}>{test.type}</p>
            <p className={cls.test__status} style={{color: StatusColor[test.status as keyof typeof StatusColor]}}>{test.status}</p>
            <p className={cls.test__site}>{removeUrlPrefix(site)}</p>
            <p>{actionButton}</p>
        </div>
    )
}

export const TestListItem = memo(TestListItemComp)
