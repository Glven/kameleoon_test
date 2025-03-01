import {createBrowserRouter} from "react-router-dom";
import {ErrorFallback} from "@/widgets/ErrorFallback";
import {AppLayout} from "@/app/layout/AppLayout";
import {FINALIZE_PAGE, MAIN_PAGE, RESULT_PAGE} from "@/shared/config/path.ts";
import {Suspense} from "react";
import {Loading} from "@/shared/ui";
import {MainPageAsync} from "@/pages/Main";
import {PageNotFoundAsync} from "@/pages/PageNotFound";
import {InfoLayout} from "@/app/layout/InfoLayout";
import {ResultPageAsync} from "@/pages/Result";
import {FinalizePageAsync} from "@/pages/Finalize";

export const routerConfig = () => {
    return createBrowserRouter([
        {
            path: MAIN_PAGE,
            errorElement: <ErrorFallback/>,
            children: [
                {
                    element: <AppLayout/>,
                    children: [
                        {
                            index: true,
                            element: <Suspense fallback={<Loading/>} children={<MainPageAsync/>}/>
                        }
                    ]
                },
                {
                    element: <InfoLayout/>,
                    children: [
                        {
                            path: FINALIZE_PAGE,
                            element: <Suspense fallback={<Loading/>} children={<FinalizePageAsync/>}/>
                        },
                        {
                            path: RESULT_PAGE,
                            element: <Suspense fallback={<Loading/>} children={<ResultPageAsync/>}/>
                        }
                    ]
                }
            ]
        },
        {
            path: '*',
            element: <Suspense fallback={<Loading/>} children={<PageNotFoundAsync/>} />
        }
    ], {
        basename: MAIN_PAGE
    })
}
