"use client"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

const routes = [
    { href: "/features", label: "Features" },
    { href: "/docs", label: "Docs" },
    { href: "/about", label: "About" },

]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 w-full border-b border-muted bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
                    <NavigationMenuItem className="font-bold flex">
                        <Link href="/" className="flex items-center space-x-2">
                            <img src="/logo.png" alt="CoconutSplit Logo" className="h-36 w-36" />
                        </Link>
                    </NavigationMenuItem>

                    {/* Mobile */}
                    <span className="flex md:hidden items-center gap-2">
                        <ModeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="px-2">
                                <Menu className="h-5 w-5" />
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl">
                                        CoconutSplit
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                    {routes.map(({ href, label }) => (
                                        <Link
                                            key={label}
                                            href={href}
                                            onClick={() => setIsOpen(false)}
                                            className={buttonVariants({ variant: "ghost" })}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                    <Link
                                        href="https://t.me/coconutsplit_bot"
                                        className={buttonVariants({ variant: "default" })}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Try on Telegram
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    {/* Desktop */}
                    <nav className="hidden md:flex items-center gap-2">
                        {routes.map(({ href, label }) => (
                            <Link
                                key={label}
                                href={href}
                                className={buttonVariants({ variant: "ghost" })}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-2">
                        <Button variant="secondary" asChild>
                            <Link href="https://t.me/coconutsplit_bot">
                                Try on Telegram
                            </Link>
                        </Button>
                        <ModeToggle />
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
