"use client"
import { usePostUsers } from "@/src/api/useContact";
import { Container } from "@/src/components/container"
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form"
import { motion } from "framer-motion";

type FormValues = {
  name: string;
  lastname: string
  company: string;
  phone: string;
  address: string
  email: string
  message_subject: string,
  message: string
};

export const Contact = () => {
  const { handleSubmit, register, watch, setValue } = useForm<FormValues>({
    defaultValues: { name: '', lastname: '', company: '', phone: '', address: '', email: '', message_subject: '', message: '' }
  })
  const { mutate: postContact } = usePostUsers()
  const t = useTranslations()
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");

    if (!input.startsWith("998") && input.length > 0) {
      input = "998" + input;
    }

    if (input.length > 12) input = input.slice(0, 12);

    let formatted = "";
    if (input.length > 0) formatted = "+" + input.substring(0, 3);
    if (input.length > 3) formatted += " (" + input.substring(3, 5);
    if (input.length >= 5) formatted += ")";
    if (input.length > 5) formatted += " " + input.substring(5, 8);
    if (input.length > 8) formatted += " " + input.substring(8, 10);
    if (input.length > 10) formatted += " " + input.substring(10, 12);

    setValue("phone", formatted.trim());
  };

  const onSubmit = (data: FormValues) => {
    const cleanedPhone = "+" + data.phone.replace(/\D/g, "");
    const payload = {
      name: data.name.trim(),
      lastname: data.lastname.trim(),
      phone: cleanedPhone,
      company: data.company,
      address: data.address,
      email: data.email,
      message_subject: data.message_subject,
      message: data.message
    };
    postContact(payload, {
      onSuccess: () => {
        alert("Xabar muvaffaqiyatli yuborildi")
      },
      onError: (error: any) => {
        alert("Xabar yuborishda xatolik yuz berdi: " + error.message)
      }
    })
  }

  return (
    <Container className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="border rounded-[30px] w-[675px] shadow-[2px_2px_6px_2px_#0000000D] py-[25px] px-5 md:py-8.75 md:px-12.5 mt-7.5 md:mt-12.5"
      >
        <h3 className="font-semibold text-[26px] md:text-[40px] text-mainColor flex justify-center">{t("contact_us")}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.75 md:gap-5 pt-10 md:pt-12.5">
          <div className="flex flex-col md:flex-row gap-3.75">
            <Input {...register("name", { required: "Ism kiritilishi majburiy" })} type="text" placeholder={t("contact_name")} className={`rounded-[15px] md:rounded-[20px] h-9.5 md:h-14 px-4 placeholder:text-[12px] md:placeholder:text-base placeholder:leading-6 ${!watch("name") ? "border" : "border-selectBorderColor text-selectBorderColor"}`} />
            <Input {...register("lastname", { required: "Familiya kiritilishi majburiy" })} type="text" placeholder={t("contact_last_name")} className={`rounded-[15px] md:rounded-[20px] h-9.5 md:h-14 px-4 placeholder:text-[12px] md:placeholder:text-base placeholder:leading-6 ${!watch("lastname") ? "border" : "border-selectBorderColor text-selectBorderColor"}`} />
          </div>
          <Input {...register("email", { required: "Email kiritilishi majburiy" })} type="email" placeholder={t("contact_email")} className={`rounded-[15px] md:rounded-[20px] h-9.5 md:h-14 px-4 placeholder:text-[12px] md:placeholder:text-base placeholder:leading-6 ${!watch("email") ? "border" : "border-selectBorderColor text-selectBorderColor "}`} />
          <Input {...register("phone", { required: "Phone kiritilishi majburiy" })} onChange={handlePhoneChange} type="tel" placeholder={t("contact_phone")} className={`rounded-[15px] md:rounded-[20px] h-9.5 md:h-14 px-4 placeholder:text-[12px] md:placeholder:text-base placeholder:leading-6 ${!watch("phone") ? "border" : "border-selectBorderColor text-selectBorderColor"}`} />
          <Input {...register("company", { required: "Kompaniya nomi kiritilishi majburiy" })} type="text" placeholder={t("contact_company_name")} className={`rounded-[15px] md:rounded-[20px] h-9.5 md:h-14 px-4 placeholder:text-[12px] md:placeholder:text-base placeholder:leading-6 ${!watch("company") ? "border" : "border-selectBorderColor text-selectBorderColor"}`} />
          <Textarea {...register("message", { required: "Tavsif kiritilishi majburiy" })} className={`placeholder:text-[12px] md:placeholder:text-base placeholder:leading-6 py-4 px-4 rounded-[15px] md:rounded-[20px] h-21 md:h-[105px] ${!watch("message") ? "border" : "border-selectBorderColor text-selectBorderColor"}`} placeholder={t("contact_message")} />
          <Button type="submit" className="font-semibold cursor-pointer text-base text-white bg-mainColor hover:bg-mainColor h-11.25 rounded-[15px] md:rounded-[15px] mt-[25px] md:mt-7.5">{t("contact_submit")}</Button>
        </form>
      </motion.div>

    </Container>
  )
}

export default Contact