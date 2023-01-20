import { NextPage } from "next";
import Header from "../components/Header";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const editorServiceSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

const Services: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: errors,
  } = useForm({
    resolver: zodResolver(editorServiceSchema),
  });
  //const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <form
        className="mt-[15vh] flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl mb-8">Service Contact Form</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`w-[30vw] p-3 rounded-md ${"border-gray-300"}`}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`w-[30vw] p-3 rounded-md ${"border-gray-300"}`}
          />
        </div>
      </form>
    </div>
  );
};

export default Services;
