import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { quotes } from "../Data/Quotes";

export default function Quotes() {
    return (
        <div className="w-full bg-[#F7F9FF]">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={5000}
                transitionTime={600}
                swipeable
                emulateTouch
            >
                {quotes?.map((item, index) => (
                    <div key={index} className="w-full flex flex-row px-[8rem] py-[48px] ">
                        {/* Left: Avatar */}
                        <div className="w-[15%] flex items-center justify-center">
                            <div className="w-full mr-[3rem] p-[32px] object-contain flex items-center justify-center bg-[#FFFFFF] rounded-full quotes-shadow-lg">
                                <img
                                    src={`/Assets/${item.ImageName}`}
                                    alt={item.Person}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Right: Quote */}
                        <div className="w-[85%] flex flex-col items-start text-left">
                            {/* <img src="/Assets/scribble-quote.png" alt="Quote Icon" className="w-[2rem] h-[2rem] object-contain block"/> */}
                            <p className="text-[20px] text-[#1d2744] font-[500] leading-relaxed my-[2rem]">{item.Quote}</p>
                            <h5 className="text-[14px] text-[#35405F] font-semibold">{item.Person}</h5>
                            <h6 className="text-[14px] text-[#35405F]">{item.Designation}</h6>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
