"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        description: "This is the best application I've used!"
    },
    {
        name: "John",
        avatar: "J",
        title: "UI/UX Designer",
        description: "I use it a lot in my work."
    },
    {
        name: "Ross",
        avatar: "R",
        title: "Software Especialist",
        description: "Great AI models!"
    },
    {
        name: "Rachel",
        avatar: "R",
        title: "Web Developer",
        description: "This tool is perfect!"
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <Avatar className="h-8 w-8 text-black/50 ">
                                    <AvatarFallback>
                                        {item.avatar}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}