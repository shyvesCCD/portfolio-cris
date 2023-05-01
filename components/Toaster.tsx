import { parseCookies } from "nookies";
import { Toaster, toast } from "sonner";

const Toast = ({ theme, text }: any) => {
    const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
    const cookies = parseCookies();

    const contentEmail = {
        es: "Tu mesaje ha sido enviada!",
        en: "Your email has been sent!",
        "pt-BR": "Seu email foi enviado!",
        "ko-KR": "당신의 이메일이 전송되었습니다!",
    };

    const contentLoading = {
        es: "Cargando...",
        en: "Loading...",
        "pt-BR": "Carregando...",
        "ko-KR": "로드 중...",
    };

    return (
        <div>
            <Toaster theme={theme} />
            <button
                type="submit"
                className="px-4 py-2 bg-white text-black rounded-md border-white hover:bg-zinc-200"
                onClick={() =>
                    toast.promise(promise, {
                        loading:
                            contentLoading[
                                cookies.locale as keyof typeof contentLoading
                            ],
                        success: () => {
                            return contentEmail[
                                cookies.locale as keyof typeof contentEmail
                            ];
                        },
                        error: "Error",
                    })
                }
            >
                {text}
            </button>
        </div>
    );
};

export default Toast;
