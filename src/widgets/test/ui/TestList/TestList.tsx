import {FC} from "react";
import {ITest, ITestSort, TestListItem} from "@/entities/test";
import {Loading} from "@/shared/ui";
import cls from './TestList.module.sass'
import {ISiteObj} from "@/entities/site";
import {
    TestListFilterName,
    TestListFilterSite,
    TestListFilterStatus,
    TestListFilterType,
    TestListItemButton
} from "@/features/test";
interface ITestList {
    tests: ITest[]
    isLoading: boolean
    siteObj: ISiteObj|null
    sortObj: {
        sortKeys: ITestSort[]
        handleSortChange: (key: keyof ITest) => void
    }
}
export const TestList:FC<ITestList> = (
    {
        tests,
        isLoading,
        siteObj,
        sortObj
    }) => {

    if (isLoading) return <Loading mini/>

    if (!siteObj) return;

    const getTestButton = (test: ITest) => {
        return (
            <TestListItemButton test={test}/>
        )
    }

    return (
        <div className={cls.table}>
            <div className={cls.table__head}>
                <div><TestListFilterName sortObj={sortObj}/></div>
                <div><TestListFilterType sortObj={sortObj}/></div>
                <div><TestListFilterStatus sortObj={sortObj}/></div>
                <div><TestListFilterSite sortObj={sortObj}/></div>
                <div></div>
            </div>
            {tests.map(t =>
                <TestListItem
                    key={t.id}
                    actionButton={getTestButton(t)}
                    test={t}
                    site={siteObj[t.siteId]}
                />
            )}
        </div>
    )
}
