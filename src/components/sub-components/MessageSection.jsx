const MessageSection = () => {
    return (
        <>
            <div className="w-full bg-fuchsia-800 flex flex-col justify-center items-center p-4 text-white gap-6">
                <p className="text-[30px]">
                    Think Health. Think Message.
                </p>
                <p className="text-sm w-[60%] text-center">
                    We are open to do health checkup on regular basis. Feel your self in the good hands we serve with best hands. Please feel free to give us a ping
                </p>
                <div className="flex gap-4 w-[40%] justify-center hover:cursor-pointer">
                    <button className="border border-solid border-white w-[45%] p-2 hover:bg-fuchsia-900 ">
                        <p>LEARN MORE ABOUT US</p>
                    </button>
                    <button className="border border-solid border-white w-[45%] p-2 hover:bg-fuchsia-900">
                        <p>CONTACT US TODAY</p>
                    </button>
                </div>
            </div>
        
        </>
    )
}
export default MessageSection;