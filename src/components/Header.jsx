const Header = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center gap-4 mt-2">
                <div className="flex flex-col ml-10">
                    <p className="text-4xl font-semibold text-fuchsia-700">
                        Family Wellness
                    </p>
                    <p className="text-2xl font-thin text-gray-400">
                        Massage Therapy
                    </p>
                </div>
                <div className="w-full">
                    <ul className="flex w-full bg-gray-400 text-white font-semibold hover:cursor-pointer">
                        <li className="p-2 w-[20%] items-center justify-center flex hover:bg-fuchsia-700">HOME</li>
                        <li className="p-2 w-[20%] items-center justify-center flex hover:bg-fuchsia-700">ABOUT</li>
                        <li className="p-2 w-[20%] items-center justify-center flex hover:bg-fuchsia-700">SERVICES</li>
                        <li className="p-2 w-[20%] items-center justify-center flex hover:bg-fuchsia-700">FAQ</li>
                        <li className="p-2 w-[20%] items-center justify-center flex hover:bg-fuchsia-700">CONTACT</li>
                    </ul>
                </div>
            </div>        
        </>
    )
}
export default Header;