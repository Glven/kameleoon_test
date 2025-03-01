import {useEffect, useState} from "react";
import axios from "axios";
import {ITest} from "@/entities/test";

export const useFetchTest = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [tests, setTests] = useState<ITest[]>([]);

    const fetchTests = async () => {

        setIsLoading(true);

        try {
            const {data} = await axios.get<ITest[]>('http://localhost:3100/tests');

            setTests(data);
        } catch {
            console.error('Ошибка получения данных');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchTests()
    }, [])

    return {
        tests,
        isLoading
    }

}
