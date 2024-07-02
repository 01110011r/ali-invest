import React, {ReactNode, useState} from "react";

interface RSliderProps {
    children: ReactNode[];
}

function RSlider({children}: RSliderProps) {

    const [conf, setConf] = useState({prev:0, current:1, next:2})

    const validChildren = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child)
    ) as React.ReactElement[];

    const handlePrevClick = () => {
        if (conf.current>1) {
            setConf({
                prev: --conf.prev,
                current: --conf.current,
                next: --conf.next
            });
        }
    }

    const handleNextClick = () => {
        if (conf.current<children.length) {
            setConf({
                prev: ++conf.prev,
                current: ++conf.current,
                next: ++conf.next
            });
        }
    }


    const slideHandler= () => React.Children.map(validChildren, (child: React.ReactElement) => {
        //
        // console.log(child.key)
        const arr = []
        if (child.key == '.$'+conf.prev) {
            arr.push(React.cloneElement(child, {
                className: child.props.className+'w-full p-6 rounded-2xl absolute right-full transition-all ease-in-out duration-500 transform -translate-x-full'
            }));
        }
        if (child.key == '.$'+conf.next) {
            arr.push(React.cloneElement(child, {
                className: child.props.className+'w-full p-6 rounded-2xl absolute left-full transition-all ease-in-out duration-500 transform translate-x-full'
            }));
        }
        if(child.key == '.$'+conf.current){
            arr.push(React.cloneElement(child, {
                className: child.props.className+'w-full p-6 rounded-2xl relative transition-all ease-in-out duration-500 transform translate-x-0'
            }));
        }
        console.log(arr)
        return arr;
    })

    return (
        <div className={'flex flex-col'}>
        <div className={'relative transition-all ease-in-out duration-500 overflow-hidden'}>
            {
              slideHandler()
            }
            <div className={'mb-4'}>
                {
                    children.map((_, idx:number) => (<span className={idx===conf.current-1 ? "bg-[#F97B07] inline-block w-1/4 h-2 rounded-lg transition-all ease-in-out duration-100 transform" : "bg-[#EDEDED] rounded-l rounded-r inline-block w-1/4 h-2 transition-all ease-in-out duration-100 transform"}></span>))

                }
            </div>
        </div>
        <div className={'flex justify-between items-center sd:flex-row flex-col gap-6'}>
                <button
                    className={'py-4 px-8 rounded-2xl text-[#0A275E] bg-[#FAFBFA] order-3 sd:w-auto w-full sd:order-1'}
                    onClick={() => handlePrevClick()}
                >
                    Назад
                </button>
                <span className={'text-[#7E8492] sd:order-2 order-1'}>
                   Шаг {" "}
                    {conf.current}
                    {" "} из {" "}
                    {validChildren.length}
                </span>
                <button
                    className={'bg-[#0A275E] text-[#FDFDFD] py-4 px-8 rounded-2xl sd:w-auto w-full order-1 sd:order-3'}
                    onClick={() => handleNextClick()}
                >
                    Далее
                </button>
            </div>
        </div>
    );
}

export default RSlider;