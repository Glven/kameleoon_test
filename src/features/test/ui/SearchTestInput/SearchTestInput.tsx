import {FC, memo} from "react";
import cls from './SearchTestInput.module.sass'
import {LoopIcon} from './LoopIcon.tsx'
interface ISearchTestInput {
    handleSearch: (value: string) => void
    className?: string
    testCount: number
    searchText: string
}
const SearchTestInputComp:FC<ISearchTestInput> = (
    {
        handleSearch,
        className,
        testCount = 0,
        searchText
    }) => {
    return (
        <div className={`${cls.input} ${className}`}>
            <span className={cls.input__icon}>
                <LoopIcon/>
            </span>
            <input
                className={cls.input__field}
                placeholder={'What test are you looking for?'}
                value={searchText}
                onChange={e => handleSearch(e.target.value)}
            />
            <span className={cls.input__count}>
                {testCount} tests
            </span>
        </div>
    )
}

export const SearchTestInput = memo(SearchTestInputComp);
