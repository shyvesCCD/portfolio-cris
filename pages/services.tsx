import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import BOTTLE from "../public/BOTTLE.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const ServicePage: NextPage = () => {
    const { theme } = useTheme();

    const schema = z.object({
        name: z.string().min(1, { message: "Please enter your name" }),
        lastName: z.string().min(1, { message: "Please enter your last name" }),
        email: z
            .string()
            .min(1, { message: "Please enter your email" })
            .email({ message: "Please enter a valid email address" }),
        phone: z.string(),
        category: z.enum([
            "fiction",
            "documentary",
            "advertising",
            "learning",
            "social-media",
        ]),
        message: z.string().min(10, { message: "Please enter a message" }),
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
                name: `${data.name} ${data.lastName}`,
                email: data.email,
                message: data.message,
                category: data.category,
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
                                Book a chat!
                            </h2>
                            <p className="text-center text-2xl mb-10">
                                Tell me about your project and receive a{" "}
                                <Link href="/services" passHref>
                                    <a className="font-bold">
                                        link to my calendar.
                                    </a>
                                </Link>
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
                                Contact Us
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
                                        Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight border rounded appearance-none"
                                        id="firstName"
                                        type="text"
                                        placeholder="First Name"
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
                                        Last Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight border rounded appearance-none"
                                        id="firstName"
                                        type="text"
                                        placeholder="Last Name"
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
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight border rounded appearance-none"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
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
                                        Phone
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight border rounded appearance-none"
                                        id="phone"
                                        type="phone"
                                        placeholder="Phone"
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
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        {...register("category")}
                                        className="px-3 py-2 w-full rounded"
                                    >
                                        <option value="fiction">Fiction</option>
                                        <option value="advertising">
                                            Advertising
                                        </option>
                                        <option value="social-media">
                                            Social Media
                                        </option>
                                        <option value="learning">
                                            Learning
                                        </option>
                                        <option value="documentary">
                                            Documentary
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
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full px-3 py-2 h-20 text-sm leading-tight border rounded appearance-none"
                                        id="message"
                                        placeholder="Tell me about your project."
                                        {...register("message")}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>
                                {theme == "light" ? (
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-zinc-500 text-white rounded-md hover:bg-zinc-700"
                                    >
                                        Submit
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-white text-black rounded-md border-white hover:bg-zinc-200"
                                    >
                                        Submit
                                    </button>
                                )}
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
                                Meanwhile, peek into my{" "}
                                <strong>editing room.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
