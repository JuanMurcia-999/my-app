import { useTrapsContext } from "../../../contexts/TrapsContext";

export default function Message() {
    const { message } = useTrapsContext();

    // Formatear el mensaje reemplazando \n por <br />
    const formattedMessage = message ? message.replace(/\n/g, '<br />') : '';

    return (
        <div className=" w-[40%] rounded-lg ml-[50px] mt-[60px] p-[100px]  bg-slate-200 whitespace-nowrap bg-slate-100w-[98%] text-xl font-semibold dark:text-white dark:bg-slate-800" 
             dangerouslySetInnerHTML={{ __html: formattedMessage }} 
        />
    );
}
