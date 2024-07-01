import React from "react";


export default function Header() {

    return (
        <div className={'flex items-center justify-between mt-6 mb-8'}>
            <div className={'flex flex-col content-start gap-y-6 md:max-w-[60%] '}>
                <h1 className={'md:text-7xl lg:text-6xl text-4xl text-[#0A275E;] font-semibold'}>
                    Привлечь <br/> инвестиции <br/> теперь
                    <span className={'text-[#F97B07]'}>
                        {" "}
                        проще
                    </span>
                </h1>
                <p className={'text-[#7E8492] md:text-2xl text-xl'}>
                    Помогаем стартапам привлекать инвестиции, собирая 100+ венчурных фондов, бизнес-ангелов и частных инвесторов в одном месте
                </p>
                <div className={'lg:flex-row flex-col flex gap-6'}>
                    <button className={'bg-[#F97B07] text-[#FDFDFD] py-3 px-8 rounded-lg text-xl'}>
                        Привлечь инвестиции
                    </button>
                    <button className={' text-xl text-[#F97B07] border-[#EDEDED] border-2 py-3 px-8 rounded-2xl'}>
                        Вы инвестор?
                    </button>
                </div>
            </div>
            <div className={'md:inline-block hidden'}>
                <img src={'../../public/union-bg.png'} alt={'hero image'} className={'w-full'} />
            </div>
        </div>
    )
}