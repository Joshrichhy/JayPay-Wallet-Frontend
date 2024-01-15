import TopNav from "./TopNav";
import MainSection from "./MainSection";
import BottomStaticNav from "./BottomStaticNav";
import OurService from "./OurService";

const LandingPage = () => {
    return(
        <div className="LandingPage">
            <TopNav/>
            <MainSection/>
            <BottomStaticNav/>
            <OurService/>
        </div>

    )
}

export default LandingPage