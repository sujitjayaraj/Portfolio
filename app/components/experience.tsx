import experience from "@/app/utils/data/experience";
import type { Experience as ExperienceType } from "@/app/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import code from "../assets/code.json";
import AnimationLottie from "./animation-lottie";
import GlowCard from "./glow-card";

export default function Experience() {
    return (
        <div id={"experience"} className={"relative z-50 border-t my-12 lg:my-24 border-[#25213b]"}>
            <Image src={"/section.svg"} alt={"Hero"}
                   width={1572}
                   height={795}
                   className={"absolute top-0 -z-10"}
            />

            <div className={"flex justify-center my-5 lg:py-8"}>
                <div className={"flex items-center"}>
                    <span className={"w-24 h-[2px] bg-[#1a1443]"}></span>
                    <span className={"bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md"}>
                        EXPERIENCE
                    </span>
                    <span className={"w-24 h-[2px] bg-[#1a1443]"}></span>
                </div>
            </div>

            <div className={"py-8"}>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"}>
                    <div className={"flex justify-center items-start"}>
                        <div className={"w-full h-full"}>
                            <AnimationLottie animationData={code} />
                        </div>
                    </div>

                    <div>
                        <div className={"flex flex-col gap-6"}>
                            {
                                experience.map((item: ExperienceType) => (
                                    <GlowCard key={item.id} identifier={`experience-${item.id}`}>
                                        <div className={"p-3 relative"}>
                                            <Image src={"/blur-23.svg"} alt={"Hero"}
                                                   width={1080}
                                                   height={200}
                                                   className={"absolute bottom-0 opacity-80"}
                                            />
                                            <div className={"flex justify-center"}>
                                                <p className={"text-xs sm:text-sm text-[#16f2b3]"}>
                                                    {item.start} - {item.end}
                                                </p>
                                            </div>
                                            <div className={"flex items-center gap-x-8 px-3 py-5"}>
                                                <div className={"text-violet-500 transition-all duration-300 hover:scale-125"}>
                                                    <BsPersonWorkspace size={36} />
                                                </div>
                                                <div>
                                                    <p className={"text-base sm:text-xl mb-2 font-medium"}>
                                                        {item.title}
                                                    </p>
                                                    <p className={"text-sm sm:text-base"}>
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </GlowCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}