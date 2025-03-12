'use client';

import { useRef } from "react";
import { TeamCard } from "@/components/team-card";
import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string);

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function AboutPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Form submission started:', values);
        console.log('Environment variables:', {
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.substring(0, 5) + '...',
        });

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                {
                    from_name: values.name,
                    to_name: "David",
                    from_email: values.email,
                    to_email: "david.chan@u.nus.edu",
                    message: values.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            );

            console.log('EmailJS response:', result);
            form.reset();
            alert("Thank you. I will get back to you as soon as possible.");
        } catch (error: any) {
            console.error('EmailJS error:', {
                message: error.message,
                text: error.text,
                details: error
            });
            alert(`Error sending message: ${error.message || 'Please try again later.'}`);
        }
    }

    return (
        <section className="container py-10 2xl:py-24 px-10 min-h-screen max-w-dvw">
            <div className="border rounded-lg py-12 md:w-3/5 mx-auto">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8">
                    <div className="flex flex-col justify-between">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            About CoconutSplit
                        </h2>
                        <p className="text-md text-justify sm:text-xl text-muted-foreground mt-4 mb-4">
                            CoconutSplit is a Telegram bot designed to simplify expense sharing among friends and groups.
                            Built with user experience in mind, it helps you manage shared expenses, track debts, and settle
                            payments effortlessly. Whether you&apos;re splitting rent, organizing group dinners, or managing
                            travel expenses, CoconutSplit makes the process smooth and hassle-free.
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            The Team
                        </h2>

                        <div className="flex flex-col items-center lg:items-stretch lg:flex-row justify-center 2xl:gap-18 gap-6 mt-8 2xl:mt-16 ">
                            <TeamCard
                                name="David Chan"
                                role="Backend Developer"
                                image="/david.jpg"
                                github="https://github.com/davidchanwz"
                                linkedin="https://www.linkedin.com/in/davidchanwz/"
                                description="I love coconut."
                            />
                            <TeamCard
                                name="Aayush Sharma"
                                role="README Writer"
                                image="/aayush.jpg"
                                github="https://github.com/ahhyush"
                                linkedin="https://www.linkedin.com/in/aayush-sharma-329321208/"
                                description="I really love coconut."
                            />
                            <TeamCard
                                name="Jensen Huang"
                                role="DevOps Engineer"
                                image="/jensen.jpg"
                                github="https://github.com/jensenhuangyankai"
                                linkedin="https://www.linkedin.com/in/jensenhyk/"
                                description="I really really love coconut."
                            />
                            <TeamCard
                                name="Benjamin Koh"
                                role="Backend Developer"
                                image="/ben.jpg"
                                github="https://github.com/Ben926"
                                linkedin="https://www.linkedin.com/in/benjaminkoh926/"
                                description="I really really really love coconut."
                            />
                            {/* Add more team members as needed */}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text mt-4">
                            Contact Us
                        </h2>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="form-label">Your Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="What's your name?" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-destructive" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="form-label">Your Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="What's your email address?" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-destructive" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="form-label">Your Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="What do you want to say?"
                                                    className="resize-none"
                                                    rows={7}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-destructive" />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={form.formState.isSubmitting}>
                                    {form.formState.isSubmitting ? "Sending..." : "Send"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}
