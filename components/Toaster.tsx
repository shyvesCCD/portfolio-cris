import { Toaster, toast } from "sonner";

const Toast = ({ theme }: any) => {
    const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div>
            <Toaster theme={theme} />
            <button
                type="submit"
                className="px-4 py-2 bg-white text-black rounded-md border-white hover:bg-zinc-200"
                onClick={() =>
                    toast.promise(promise, {
                        loading: "Loading...",
                        success: () => {
                            return `Seu email foi enviado!`;
                        },
                        error: "Error",
                    })
                }
            >
                Submit
            </button>
        </div>
    );
};

export default Toast;
