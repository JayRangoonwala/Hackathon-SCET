import { useState } from 'react'
import { Search, User, Calendar, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link } from "react-router-dom"

export default function Navbar({ isLoggedIn = false }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <nav className="bg-[#001F3F] backdrop-blur-[2px] shadow-md sticky top-0 z-50 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
                <div className="flex justify-between h-16 ">
                    {/* Left - Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-neutral-200">Dev750</span>
                    </div>

                    {/* Center - Search (hidden on mobile) */}
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
                        <div className="max-w-lg w-full">
                            <Input type="search" placeholder="Search for the project" className="max-w-full rounded-full bg-white " />
                        </div>
                    </div>

                    {/* Right - Auth buttons or User options */}
                    <div className="flex items-center">
                        {/* Search icon (visible on mobile) */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="sm:hidden"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>

                        {isLoggedIn ? (
                            <>
                                <Button variant="ghost" size="sm" className="hidden sm:flex items-center hover:bg-zinc-100 hover:text-blue-600 transition duration-300 ease-in-out">
                                    <User className="h-5 w-5 mr-2" />
                                    Profile
                                </Button>
                                <Button variant="ghost" size="sm" className="hidden sm:flex items-center ml-2 hover:bg-zinc-100 hover:text-blue-600 transition duration-300 ease-in-out">
                                    <Calendar className="h-5 w-5 mr-2" />
                                    My Events
                                </Button>
                            </>
                        ) : (
                            <>
                                <div className='flex flex-row gap-3 mx-2'>
                                    <Link
                                        to="/user/login"
                                        className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-white text-base border border-white hover:bg-white hover:text-blue-950 transition duration-300 ease-in-out rounded-full"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/user/signup"
                                        className="hidden sm:inline-flex items-center justify-center ml-2 px-4 py-2 bg-white text-black text-base hover:bg-zinc-100 hover:border-blue-950 hover:text-blue-950 transition duration-300 ease-in-out border border-transparent rounded-full"
                                    >
                                        Sign up
                                    </Link>
                                </div>

                            </>
                        )}

                        {/* Mobile menu button */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="sm:hidden ml-2">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-white/80 backdrop-blur-sm">
                                <div className="flex flex-col space-y-4 mt-4">
                                    {isLoggedIn ? (
                                        <>
                                            <Button variant="ghost" className="justify-start hover:bg-zinc-100 hover:text-blue-600 transition duration-300 ease-in-out">
                                                <User className="h-5 w-5 mr-2" />
                                                Profile
                                            </Button>
                                            <Button variant="ghost" className="justify-start hover:bg-zinc-100 hover:text-blue-600 transition duration-300 ease-in-out">
                                                <Calendar className="h-5 w-5 mr-2" />
                                                My Events
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/user/login" className="justify-start hover:bg-zinc-100 hover:text-blue-600 transition duration-300 ease-in-out">
                                                <Button variant="ghost" className="justify-start hover:bg-zinc-100 hover:text-blue-600 transition duration-300 ease-in-out">Log in</Button></Link>
                                            <Link to="/user/signup" ><Button className='justify-start hover:bg-zinc-100 hover:text-blue-600 transition duration-300 ease-in-out'>Sign up</Button></Link>

                                        </>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            {/* Mobile search bar */}
            {isSearchOpen && (
                <div className="sm:hidden p-2">
                    <Input type="search" placeholder="Search..." className="w-full bg-white/50" />
                </div>
            )}
        </nav>
    )
}
