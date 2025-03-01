import {FC, Suspense} from "react";
import {SearchTestInput, useFetchTest, useSearchAndSortTest} from "@/features/test";
import cls from './MainPage.module.sass'
import {TestList, TestListEmptyAsync} from "@/widgets/test";
import {useFetchSite} from "@/features/site";
import {Loading} from "@/shared/ui";

const MainPage:FC = () => {

    const {sitesObj} = useFetchSite();

    const {
        tests,
        isLoading
    } = useFetchTest();
    const {
        handleSearchParamChange,
        filteredAndSortedTests,
        handleResetParam,
        searchParam,
        sortKeys,
        handleSortChange
    } = useSearchAndSortTest(tests, sitesObj)

    const isEmptyTests = () => !isLoading && filteredAndSortedTests.length === 0

    return (
        <div className={cls.test}>
            <h1 className={`title ${cls.test__title}`}>Dashboard</h1>
            <SearchTestInput
                searchText={searchParam}
                handleSearch={handleSearchParamChange}
                className={cls.test__input}
                testCount={filteredAndSortedTests.length}
            />
            {!isEmptyTests() ?
                <TestList
                    isLoading={isLoading}
                    tests={filteredAndSortedTests}
                    siteObj={sitesObj}
                    sortObj={{
                        sortKeys,
                        handleSortChange
                    }}
                /> :
                <Suspense
                    fallback={<Loading mini/>}
                    children={<TestListEmptyAsync handleReset={handleResetParam}/>}
                />
            }
        </div>
    )
}

export default MainPage
