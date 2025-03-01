import axios from "axios";
import {ISite, ISiteObj} from "@/entities/site";
import {useEffect, useState} from "react";

export const useFetchSite = () => {
    const [sitesObj, setSitesObj] = useState<ISiteObj|null>(null)
    const fetchSites = async() => {
        try {
            const {data} = await axios.get<ISite[]>('http://localhost:3100/sites');

            const sitesObj: ISiteObj = {}

            data.forEach(site => {
                sitesObj[site.id.toString()] = site.url
            })

            setSitesObj(sitesObj)

        } catch {
            console.error('Произошла ошибка')
        }
    }


    useEffect(() => {
        fetchSites();
    }, [])

    return {sitesObj}

}
