import Hero from "../components/home/Hero";
import PartnersBanner from "../components/home/PartnersBanner";
import Map from "../components/home/Map";
import MainInfo from "../components/home/MainInfo";
import Video from "../components/home/Video";
import ServicesCarousel from "../components/home/ServicesCarousel";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
            <PartnersBanner/>
            <Video/>
            <ServicesCarousel/>
            <MainInfo/>
            <Map/>
        </>
    )
}