import RSlider from "./RSlider.tsx";

function HowItWorks() {

    return (
        <div className={'flex flex-col gap-10 mb-10'}>
            <h1 className={'font-semibold sm:text-7xl text-5xl text-[#0A275E] text-center'}>
                Как это работает?
            </h1>

            <div className={'shadow-2xl rounded-2xl p-6'}>
                <RSlider>
                    <div
                        key={1}
                        className={'flex lg:flex-row flex-col items-center justify-around gap-6'}
                    >
                        <div>
                            <img src={'../../public/Document.png'} alt={'document png'}/>
                        </div>
                        <div>
                            <h2 className={'text-[#1D1E25] text-4xl font-semibold'}>
                                Заполнение формы
                            </h2>
                            <p className={'text-xl text-[#7E8492] max-w-96'}>
                                Удобная форма поможет первично ознакомиться с вашим проектом и проанализировать его
                            </p>
                        </div>
                    </div>
                    <div key={2} className={'flex lg:flex-row flex-col items-center justify-around gap-6'}>
                        <div>
                            <img src={'../../public/Document.png'} alt={'document png'}/>
                        </div>
                        <div>
                            <h2 className={'text-[#1D1E25] text-4xl'}>
                                Заполнение формы
                            </h2>
                            <p className={'text-xl text-[#7E8492]'}>
                                Удобная форма поможет первично ознакомиться с вашим проектом и проанализировать его
                            </p>
                        </div>
                    </div>
                    <div key={3} className={'flex lg:flex-row flex-col items-center justify-around gap-6'}>
                        <div>
                            <img src={'../../public/Document.png'} alt={'document png'}/>
                        </div>
                        <div>
                            <h2 className={'text-[#1D1E25] text-4xl'}>
                                Заполнение формы
                            </h2>
                            <p className={'text-xl text-[#7E8492]'}>
                                Удобная форма поможет первично ознакомиться с вашим проектом и проанализировать его
                            </p>
                        </div>
                    </div>
                    <div key={4} className={'flex lg:flex-row flex-col items-center justify-around gap-6'}>
                        <div>
                            <img src={'../../public/Document.png'} alt={'document png'}/>
                        </div>
                        <form className={'flex flex-col gap-6'}>
                            <textarea maxLength={50} className={'max-w-96 min-w-60 max-h-16 rounded-xl px-4 py-2 border-2 outline-none'}>

                            </textarea>
                            <button className={'rounded-xl px-4 py-2 border-2 hover:bg-[#F97700] hover:border-[#fdfdfd] hover:text-[#fdfdfd]'}> Submit </button>
                        </form>
                    </div>

                </RSlider>
            </div>
        </div>
    );
}

export default HowItWorks;