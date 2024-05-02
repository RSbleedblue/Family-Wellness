import DescriptionSection from "./sub-components/DescriptionSection";
import ImgSection from "./sub-components/ImgSection";
import MessageSection from "./sub-components/MessageSection";

const HeroSection = () => {
    return (
        <>
           <ImgSection/>
           <MessageSection/>
           <DescriptionSection/> 
           <hr className="border border-solid border-gray-300 w-full bg-opacity-25 mt-10"></hr>
        </>
    )
}
export default HeroSection;