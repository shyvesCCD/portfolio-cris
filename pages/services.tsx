import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import BOTTLE from "../public/BOTTLE.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Toast from "../components/Toaster";
import { parseCookies } from "nookies";

const ServicePage: NextPage = () => {
    const { theme } = useTheme();
    const cookies = parseCookies();

    const content = {
        es: {
            first: "Por favor ingrese su nombre",
            second: "Por favor ingrese su correo electrónico",
            third: "Por favor, introduce una dirección de correo electrónico válida",
            fourth: "Por favor ingrese su apellido",
            fifth: "Por favor ingrese un masaje",
            sixth: "Cuéntame sobre tu proyecto y recibe un enlace a mi calendario.",
            seventh: "¡Reserva una charla!",
            eighth: "Mientras tanto, echa un vistazo a mi sala de edición.",
            noneth: "Entre em contato",
            tenth: "Nombre",
            eleventh: "Apellido",
            twelfth: "Email",
            thirteenth: "Teléfono",
            category: "Categoría",
            message: "Mesaje",
            submit: "Enviar",
            project: "Cuéntame sobre tu proyecto",
            fiction: "Ficción",
            advertising: "Publicidad",
            socialmedia: "Redes Sociales",
            learning: "Aprendizaje",
            documentary: "Documental",
        },
        en: {
            first: "Please enter your name",
            second: "Please enter your email ",
            third: "Please enter a valid email address",
            fourth: "Please enter your last name",
            fifth: "Please enter a message",
            sixth: "Tell me about your project and receive a link to my calendar.",
            seventh: "Book a chat!",
            eighth: "Meanwhile, peek into my editing room.",
            noneth: "Contact Us",
            tenth: "Name",
            eleventh: "LastName",
            twelfth: "Email",
            thirteenth: "Phone",
            category: "Category",
            message: "Message",
            submit: "Submit",
            project: "Tell me about your project",
            fiction: "Fiction",
            advertising: "Advertising",
            socialmedia: "Social Media",
            learning: "Learning",
            documentary: "Documentary",
        },
        "pt-BR": {
            first: "Por favor, insira seu nome",
            second: "Por favor, insira seu email",
            third: "Por favor, insira um email válido",
            fourth: "Por favor, insira seu sobrenome",
            fifth: "Por favor, insira sua mensagem",
            sixth: "Me fale do seu projeto e receba um link para o meu calendário.",
            seventh: "Reserve uma conversa!",
            eighth: "Enquanto isso, dê uma espiada na minha sala de edição.",
            noneth: "Entre em contato",
            tenth: "Nome",
            eleventh: "Sobrenome",
            twelfth: "Email",
            thirteenth: "Telefone",
            category: "Categoria",
            message: "Message",
            submit: "Enviar",
            project: "Conte-me sobre o seu projeto",
            fiction: "Ficção",
            advertising: "Anúncio",
            socialmedia: "Rede Social",
            learning: "Aprendizado",
            documentary: "Documentário",
        },
        "ko-KR": {
            first: "당신의 이름을 입력 해주세요",
            second: "이메일을 입력하세요",
            third: "유효한 이메일 주소를 입력하세요",
            fourth: "당신의 성을 입력하세요",
            fifth: "메시지를 입력하세요",
            sixth: "귀하의 프로젝트에 대해 알려주고 내 일정에 대한 링크를 받으십시오.",
            seventh: "채팅을 예약하세요!",
            eighth: "한편, 내 편집실을 들여다보세요.",
            noneth: "문의하기",
            tenth: "이름",
            eleventh: "성",
            twelfth: "이메일",
            thirteenth: "핸드폰",
            category: "범주",
            message: "메시지",
            submit: "제출하다",
            project: "당신의 프로젝트에 대해 말해주세요",
            fiction: "소설",
            advertising: "광고하는",
            socialmedia: "소셜 미디어",
            learning: "학습",
            documentary: "기록한 것",
        },
    };

    const currentContent = content[cookies.locale as keyof typeof content];

    const schema = z.object({
        name: z.string().min(1, { message: currentContent?.first }),
        lastName: z.string().min(1, { message: currentContent?.fourth }),
        email: z
            .string()
            .min(1, { message: currentContent?.second })
            .email({ message: currentContent?.third }),
        phone: z.string(),
        category: z.enum([
            "fiction",
            "documentary",
            "advertising",
            "learning",
            "social-media",
        ]),
        message: z.string().min(10, { message: currentContent?.fifth }),
    });

    type ValidationSchema = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ValidationSchema>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
        try {
            await axios.post("https://portfolio-cris.vercel.app/api/mailer", {
                name: data.name,
                lastName: data.lastName,
                email: data.email,
                message: data.message,
                category: data.category,
                language: cookies.locale,
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="h-screen w-full flex flex-col">
            <Header />
            <div className="h-[85vh] mt-[15vh] grid grid-cols-1 lg:grid-cols-3 ">
                <div className="flex flex-col items-center justify-center mx-10">
                    <div className="">
                        <div className="p-6">
                            <h2 className="text-3xl font-medium text-center mb-8">
                                {currentContent?.seventh}
                            </h2>
                            <p className="text-center text-2xl mb-10">
                                {currentContent?.sixth}
                            </p>
                            {theme == "light" ? (
                                <Image
                                    src={BOTTLE}
                                    alt="Profile picture"
                                    objectFit="contain"
                                    height={400}
                                />
                            ) : (
                                <Image
                                    className="invert"
                                    src={BOTTLE}
                                    alt="Profile picture"
                                    objectFit="contain"
                                    height={400}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Second column */}
                <div className="">
                    <div className="">
                        <div className="p-6 overflow-auto">
                            <h2 className="text-3xl font-medium mb-8 text-center">
                                {currentContent?.noneth}
                            </h2>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium "
                                    >
                                        {currentContent?.tenth}
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight border rounded appearance-none"
                                        id="firstName"
                                        type="text"
                                        placeholder={currentContent?.tenth}
                                        {...register("name")}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium "
                                    >
                                        {currentContent?.eleventh}
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight border rounded appearance-none"
                                        id="firstName"
                                        type="text"
                                        placeholder={currentContent?.eleventh}
                                        {...register("lastName")}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium "
                                    >
                                        {currentContent?.twelfth}
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight border rounded appearance-none"
                                        id="email"
                                        type="email"
                                        placeholder={currentContent?.twelfth}
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium "
                                    >
                                        {currentContent?.thirteenth}
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight border rounded appearance-none"
                                        id="phone"
                                        type="phone"
                                        placeholder={currentContent?.thirteenth}
                                        {...register("phone")}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="text-sm font-medium"
                                    >
                                        {currentContent?.category}
                                    </label>
                                    <select
                                        id="category"
                                        {...register("category")}
                                        className="px-3 py-2 w-full rounded"
                                    >
                                        <option value="fiction">
                                            {currentContent?.fiction}
                                        </option>
                                        <option value="advertising">
                                            {currentContent?.advertising}
                                        </option>
                                        <option value="social-media">
                                            {currentContent?.socialmedia}
                                        </option>
                                        <option value="learning">
                                            {currentContent?.learning}
                                        </option>
                                        <option value="documentary">
                                            {currentContent?.documentary}
                                        </option>
                                    </select>
                                    {errors.category && (
                                        <p className="text-red-500">
                                            {errors.category.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium "
                                    >
                                        {currentContent?.message}
                                    </label>
                                    <textarea
                                        className="w-full px-3 py-2 h-20 text-sm leading-tight border rounded appearance-none"
                                        id="message"
                                        placeholder={currentContent?.project}
                                        {...register("message")}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>
                                <>
                                    {errors.message ? (
                                        <>
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bg-white text-black rounded-md border-white hover:bg-zinc-200"
                                            >
                                                {currentContent?.submit}
                                            </button>
                                        </>
                                    ) : (
                                        <Toast
                                            theme
                                            text={currentContent?.submit}
                                        />
                                    )}
                                </>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Third column */}
                <div className="flex flex-col">
                    <div className="">
                        <div className="p-6">
                            <div className="flex justify-center items-center mb-14">
                                <div className="relative lg:h-0 mt-[8vh] max-w-full w-full pb-aspect mx-10">
                                    <iframe
                                        src="https://www.youtube.com/embed/jfKfPfyJRdk"
                                        className="absolute top-0 left-0 w-full h-full mx-auto "
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <p className="mt-4 text-center text-3xl">
                                {currentContent?.eighth}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
