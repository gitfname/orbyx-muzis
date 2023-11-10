
import { Button } from "@chakra-ui/react";
import React, { ReactElement, ReactNode, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge"


interface Props {
    text: string;
    showSeeMoreBtn?: boolean;
    showPrevNextBtn?: boolean;
    seeMoreBtnText?: string;
    items: Array<any>;
    renderer(data: any, index: number): ReactNode;
    className?: string;
    slidesPerView: number;
    customDataContainer?: ReactElement;
}

function Section({
    text, seeMoreBtnText = "See All", showSeeMoreBtn = true, items, renderer, className, slidesPerView,
    customDataContainer, showPrevNextBtn = true
}: Props) {

    const sliderRef = useRef<any>(null);

    return (
        <div className={twMerge("w-full", className)}>

            <div className="flex items-center justify-between mb-4">
                <p
                    className="text-2xl font-medium text-white/90"
                >
                    {text}
                </p>

                {
                    showSeeMoreBtn
                        ?
                        <Button
                            bgColor="whiteAlpha.200"
                            _hover={{
                                bgColor: "whiteAlpha.300"
                            }}
                            size="sm"
                            fontSize="xs"
                            color="white"
                            rounded="lg"
                            fontWeight="normal"
                        >
                            {seeMoreBtnText ? seeMoreBtnText : "See More"}
                        </Button>
                        :
                        null
                }

            </div>

            {
                customDataContainer
                    ?
                    React.cloneElement(customDataContainer, {}, items.map((item, index) => renderer(item, index)))
                    :
                    <swiper-container
                        ref={sliderRef}
                        slides-per-view={slidesPerView}
                        space-between="20px"
                        className="border"
                    >
                        {
                            items?.map((item, index) => (
                                <swiper-slide>
                                    {renderer(item, index)}
                                </swiper-slide>
                            ))
                        }
                    </swiper-container>

            }

            {
                showPrevNextBtn
                    ?
                    <div className="flex items-center gap-x-3 ml-auto w-max mt-3">
                        <Button
                            onClick={() => sliderRef.current.swiper.slidePrev()}
                            bgColor="whiteAlpha.300"
                            _hover={{
                                bgColor: "whiteAlpha.400"
                            }}
                            size="sm"
                            padding={0}
                        >
                            <BsChevronLeft className="w-3.5 h-3.5 fill-white" />
                        </Button>

                        <Button
                            onClick={() => sliderRef.current.swiper.slideNext()}
                            bgColor="whiteAlpha.300"
                            _hover={{
                                bgColor: "whiteAlpha.400"
                            }}
                            size="sm"
                            padding={0}
                        >
                            <BsChevronRight className="w-3.5 h-3.5 fill-white" />
                        </Button>
                    </div>
                    :
                    null
            }

        </div>
    )
}

export default Section