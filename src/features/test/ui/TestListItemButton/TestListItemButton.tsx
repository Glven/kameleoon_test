import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ITest} from "@/entities/test";
import {StatusMessage} from "@/entities/status";
interface ITestListItemButton {
    test: ITest
}
export const TestListItemButton:FC<ITestListItemButton> = ({test}) => {

    const {status, id} = test

    const navigate = useNavigate()

    const handleClick = () => {

        if (status === StatusMessage.DRAFT) {
            navigate(`/finalize/${id}`);
            return;
        }

        navigate(`/results/${id}`);

    }

    const getButtonText = () => {

        return status === StatusMessage.DRAFT ? 'Finalize' : 'Results';

    }

    return (
        <button
            onClick={handleClick}
            className={`btn ${status === StatusMessage.DRAFT ? 'btn--draft' : 'btn--primary'}`}
        >
            {getButtonText()}
        </button>
    )
}
