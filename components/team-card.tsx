import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

interface TeamCardProps {
    name: string
    role: string
    image: string
    github?: string
    linkedin?: string
    description: string
}

export function TeamCard({
    name,
    role,
    image,
    github,
    linkedin,
    description,
}: TeamCardProps) {
    return (
        <div className="flex flex-col items-center max-w-[250px]">
            <div className="relative w-32 h-32 mb-4">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="rounded-full object-cover"
                />
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-muted-foreground">{role}</p>
            <p className="text-sm text-center mt-2 text-muted-foreground">{description}</p>
            <div className="flex gap-4 mt-4">
                {github && (
                    <Link href={github} target="_blank" className="hover:text-primary">
                        <Github className="h-5 w-5" />
                    </Link>
                )}
                {linkedin && (
                    <Link href={linkedin} target="_blank" className="hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                )}
            </div>
        </div>
    )
}
