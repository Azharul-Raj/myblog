import Image from "next/image";
import Link from "next/link";
import img from './assets/azharul_raj .jpg'

const Header = () => {
    return (
        <header className="flex items-center justify-between mx-10 my-5">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image className="rounded-full" height={80} width={50} alt="logo" src={img}/>
                </Link>
                <h1 className="text-2xl font-bold">RAJ'S BLOG</h1>
            </div>
            <div className="rounded-full items-center bg-gray-900 text-white px-5 py-3 font-semibold">
                <Link href='/'>Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;