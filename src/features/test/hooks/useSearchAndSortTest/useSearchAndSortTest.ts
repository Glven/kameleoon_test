import {ITest, ITestSort} from "@/entities/test";
import {useMemo, useState} from "react";
import {useDebounce} from "@/shared/hooks";
import {StatusMessage} from "@/entities/status";
import {ISiteObj} from "@/entities/site";
import {removeUrlPrefix} from "@/shared/helpers";

const statusOrder: string[] = [
    StatusMessage.ONLINE,
    StatusMessage.PAUSED,
    StatusMessage.STOPPED,
    StatusMessage.DRAFT
]
export const useSearchAndSortTest = (tests: ITest[], siteObj: ISiteObj|null) => {

    const [searchParam, setSearchParam] = useState<string>('');
    const [delayedSearchParam, setDelayedSearchParam] = useState<string>('');
    const [sortKeys, setSortKeys] = useState<ITestSort[]>([]);


    const handleSearchParamChange = (value: string) => {
        setSearchParam(value);
        debouncedSearchParam(value);
    };

    const handleResetParam = () => {
        setSearchParam('');
        setDelayedSearchParam('');
    };

    const debouncedSearchParam = useDebounce((value: string) => {
        setDelayedSearchParam(value);
    }, 500);

    const filteredAndSortedTests = useMemo(() => {
        let result = tests;

        if (delayedSearchParam.trim()) {
            result = result
                .filter(t =>
                    t.name.toLowerCase().includes(delayedSearchParam.toLowerCase())
                );
        }

        if (siteObj) {
            sortKeys.forEach(({ key, order }) => {
                result.sort((a, b) => {
                    let valA = key === "siteId" ? removeUrlPrefix(siteObj[a.siteId])  || "" : a[key];
                    let valB = key === "siteId" ? removeUrlPrefix(siteObj[b.siteId])  || "" : b[key];

                    if (key === "status") {
                        const indexA = statusOrder.indexOf(a.status);
                        const indexB = statusOrder.indexOf(b.status);
                        return order === "asc" ? indexA - indexB : indexB - indexA;
                    }

                    return order === "asc"
                        ? String(valA).localeCompare(String(valB))
                        : String(valB).localeCompare(String(valA));
                });
            });
        }

        return result;
    }, [delayedSearchParam, tests, sortKeys, siteObj])


    const handleSortChange = (key: keyof ITest) => {
        setSortKeys(prevKeys => {
            const existing = prevKeys.find(k => k.key === key);
            if (existing) {
                if (existing.order === "asc") return prevKeys.map(k => k.key === key ? { key, order: "desc" } : k);
                return prevKeys.filter(k => k.key !== key);
            }
            return [...prevKeys, { key, order: "asc" }];
        });
    };


    return {
        handleSearchParamChange,
        filteredAndSortedTests,
        handleResetParam,
        searchParam,
        sortKeys,
        handleSortChange
    }
}
