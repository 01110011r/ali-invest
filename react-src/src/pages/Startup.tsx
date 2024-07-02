import Header from "../components/Header.tsx";
import Advantages from "../components/Advantages.tsx";
import HowItWorks from "../components/HowItWorks.tsx";
import Partners from "../components/Partners.tsx";
import AccordionProvider from "../components/AccordionProvider.tsx";
import Footer from "../components/Footer.tsx";

export default function Startup() {
    return (
        <div>
            <Header/>

            <Advantages/>

            <HowItWorks/>

            {/*На нашей платформе*/}
            <div className={'mb-10 text-center'}>
                <h2 className={'text-[#0A275E] mb-7 lg:text-7xl text-5xl font-semibold'}>
                    На нашей платформе
                </h2>
                <div className={'border-t-2 border-b-2 py-10 flex flex-col lg:flex-row items-center justify-between'}>
                    <div className={'flex flex-col gap-y-4 max-w-80'}>
                        <h3 className={'text-[#F97B07] lg:text-6xl text-4xl font-semibold'}>
                            80+
                        </h3>
                        <h3 className={'text-[#1D1E25] text-5xl font-semibold'}>
                            Cтартапов
                        </h3>
                        <p className={'text-[#7E8492]'}>
                            Присоединились к Angel Invests
                            в поиске финансирования
                        </p>
                    </div>
                    <div className={'flex flex-col gap-y-4 max-w-80'}>
                        <h3 className={'text-[#F97B07] lg:text-6xl text-4xl font-semibold'}>
                            30+
                        </h3>
                        <h3 className={'text-[#1D1E25] text-5xl font-semibold'}>
                            Новых проектов
                        </h3>
                        <p className={'text-[#7E8492]'}>
                            Ежемесячно подключается к нам для получения помощи в привлечении инвестиций
                        </p>
                    </div>
                    <div className={'flex flex-col gap-y-4 max-w-80'}>
                        <h3 className={'text-[#F97B07] lg:text-6xl text-4xl font-semibold'}>
                            100+
                        </h3>
                        <h3 className={'text-[#1D1E25] text-5xl font-semibold'}>
                            Инвесторов
                        </h3>
                        <p className={'text-[#7E8492]'}>
                            Сотрудничает с нами и доверяет
                            в подборе перспективных проектов
                        </p>
                    </div>
                </div>
            </div>

            {/*partners slider*/}
            <Partners/>

            {/*startup*/}
            <div className={'mb-16'}>

                <h2 className={'text-[#0A275E] sm:text-7xl text-5xl font-semibold text-center mb-12'}>
                    Какие стартапы мы ищем
                </h2>

                <div className={'grid lg:grid-cols-3 grid-cols-1 gap-6'}>
                    <div className={'p-6 flex flex-col border-2 rounded-3xl'}>
                        <h3 className={'text-[#1D1E25] font-semibold xs:text-4xl text-2xl border-b-4 pb-6 border-[#F97B07] lg:mb-10 mb-7'}>
                            Объемы инвестиций
                        </h3>
                        <div className={'flex flex-col gap-6'}>
                            <p className={'text-[#F97B07] font-semibold text-2xl'}>Pre-seed: <span
                                className={'text-[#7E8492] font-semibold'}>$200-500k</span></p>

                            <p className={'text-[#F97B07] font-semibold text-2xl'}>Pre-seed: <span
                                className={'text-[#7E8492] font-semibold'}>до $1М</span></p>

                            <p className={'text-[#F97B07] font-semibold text-2xl'}>Pre-seed: <span
                                className={'text-[#7E8492] font-semibold'}>до $5М</span></p>
                        </div>
                    </div>

                    <div className={'p-6 flex flex-col border-2 rounded-3xl'}>
                        <h3 className={'text-[#1D1E25] font-semibold xs:text-4xl text-2xl border-b-4 pb-6 border-[#F97B07] lg:mb-10 mb-7'}>
                            Индустрии
                        </h3>
                        <div className={'flex flex-col gap-6'}>
                            <p className={'text-[#7E8492] font-semibold'}>
                                Мы смотрим только IT стартапы.
                            </p>
                            <button className={'bg-[#0A275E] text-[#FDFDFD] py-4 px-10 rounded-2xl'}>
                                Подробнее
                            </button>
                        </div>
                    </div>

                    <div className={'p-6 flex flex-col border-2 rounded-3xl'}>
                        <h3 className={'text-[#1D1E25] font-semibold xs:text-4xl text-2xl border-b-4 pb-6 border-[#F97B07] lg:mb-10 mb-7 break-words'}>
                            Дополнительно
                        </h3>
                        <div className={'flex flex-col gap-6'}>
                            <p className={'text-[#F97B07] font-semibold text-2xl'}>Обязательно: <span
                                className={'text-[#7E8492] font-semibold'}>наличие как минимум первой выручки</span></p>

                            <p className={'text-[#F97B07] font-semibold text-2xl'}>Желательно: <span
                                className={'text-[#7E8492] font-semibold'}>выход на зарубежный рынок в течение следующего года</span>
                            </p>

                            <p className={'text-[#F97B07] font-semibold text-2xl'}>Отлично: <span
                                className={'text-[#7E8492] font-semibold'}>наличие международной выручки</span></p>
                        </div>
                    </div>
                </div>

            </div>

            {/*Условия сотрудничества*/}
            <div className={'bg-[#F97B07] rounded-3xl py-10 mb-16 px-2'}>
                <h2 className={'font-semibold lg:text-6xl sm:text-4xl text-3xl text-white text-center mb-4'}>
                    2%
                    <br/>
                    Условия сотрудничества
                </h2>
                <p className={'text-2xl text-white text-center'}>
                    Стартап платит 2% от суммы привлеченных инвестиций после закрытия сделки.
                </p>
            </div>

            {/*Ваши будущие инвесторы  */}
            <div className={'mb-16'}>
                <h2 className={'text-[#0A275E] font-semibold text-4xl lg:text-7xl text-center mb-12'}>
                    Ваши будущие инвесторы
                </h2>
                <div className={'grid grid-cols-1 lg:grid-cols-2'}>
                    <div>
                        <AccordionProvider/>
                        <button className={'bg-[#0A275E] px-8 py-4 rounded-2xl mt-10 text-white'}>
                            Привлечь инвестиции
                        </button>
                    </div>
                    <div className={'lg:flex hidden items-center justify-center flex-col '}>
                        <img src={'../../public/Document.png'} alt={'startup web'}/>
                    </div>
                </div>
            </div>

        {/*    what they say about us */}
            <div className={'mb-24'}>
                <h2 className={'text-[#0A275E] font-semibold lg:text-7xl text-4xl mb-12 text-center '}>
                    Что говорят о нас инвесторы и стартапы
                </h2>
                <div className={'grid lg:grid-cols-6 grid-rows-2 md:grid-cols-2 grid-cols-1 gap-6'}>
                    <div className={'border-2 rounded-2xl col-span-2 py-10 px-4'}>
                        <div className={'flex items-center justify-center sm:gap-8 gap-4 mb-6'}>
                            <img src={'../../public/accaunt-img.jpeg'} alt={"person's img for accaunt"}
                                 className={'rounded-full sm:w-24 sm:h-24 w-20 h-20'}/>
                            <div>
                                <h3 className={'text-[#1D1E25] font-semibold'}>Михаил Инишев</h3>
                                <p className={'text-[#7E8492]'}>Основатель, Boomerangme</p>
                            </div>
                            <h4 className={'sm:text-7xl text-4xl'}>“</h4>
                        </div>
                        <p className={'text-[#7E8492]'}>
                            AliInvest помогли нам привлечь первый раунд инвестиций на $400k. Ребята взяли на себя работу
                            по первичной коммуникации с инвесторами, а нас звали на встречи только с заинтересованными.
                            В итоге мы сэкономили время и получили быстрый результат.
                        </p>
                    </div>

                    <div className={'border-2 rounded-2xl col-span-2 py-10 px-4'}>
                        <div className={'flex items-center justify-center sm:gap-8 gap-4 mb-6'}>
                            <img src={'../../public/accaunt-img.jpeg'} alt={"person's img for accaunt"}
                                 className={'rounded-full sm:w-24 sm:h-24 w-20 h-20'}/>
                            <div>
                                <h3 className={'text-[#1D1E25] font-semibold'}>Михаил Инишев</h3>
                                <p className={'text-[#7E8492]'}>Основатель, Boomerangme</p>
                            </div>
                            <h4 className={'sm:text-7xl text-4xl'}>“</h4>
                        </div>
                        <p className={'text-[#7E8492]'}>
                            AliInvest помогли нам привлечь первый раунд инвестиций на $400k. Ребята взяли на себя работу
                            по первичной коммуникации с инвесторами, а нас звали на встречи только с заинтересованными.
                            В итоге мы сэкономили время и получили быстрый результат.
                        </p>
                    </div>

                    <div className={'border-2 rounded-2xl col-span-2 py-10 px-4 sm:block hidden'}>
                        <div className={'flex items-center justify-center sm:gap-8 gap-2 mb-6'}>
                            <img src={'../../public/accaunt-img.jpeg'} alt={"person's img for accaunt"}
                                 className={'rounded-full sm:w-24 sm:h-24 w-20 h-20'}/>
                            <div>
                                <h3 className={'text-[#1D1E25] font-semibold'}>Михаил Инишев</h3>
                                <p className={'text-[#7E8492]'}>Основатель, Boomerangme</p>
                            </div>
                            <h4 className={'text-7xl'}>“</h4>
                        </div>
                        <p className={'text-[#7E8492]'}>
                            AliInvest помогли нам привлечь первый раунд инвестиций на $400k. Ребята взяли на себя работу
                            по первичной коммуникации с инвесторами, а нас звали на встречи только с заинтересованными.
                            В итоге мы сэкономили время и получили быстрый результат.
                        </p>
                    </div>

                    <div className={'border-2 rounded-2xl col-span-3 py-10 px-4 sm:block hidden'}>
                        <div className={'flex items-center justify-center sm:gap-8 gap-2 mb-6'}>
                            <img src={'../../public/accaunt-img.jpeg'} alt={"person's img for accaunt"}
                                 className={'rounded-full sm:w-24 sm:h-24 w-20 h-20'}/>
                            <div>
                                <h3 className={'text-[#1D1E25] font-semibold'}>Михаил Инишев</h3>
                                <p className={'text-[#7E8492]'}>Основатель, Boomerangme</p>
                            </div>
                            <h4 className={'text-4xl sm:text-7xl'}>“</h4>
                        </div>
                        <p className={'text-[#7E8492]'}>
                            AliInvest помогли нам привлечь первый раунд инвестиций на $400k. Ребята взяли на себя работу
                            по первичной коммуникации с инвесторами, а нас звали на встречи только с заинтересованными.
                            В итоге мы сэкономили время и получили быстрый результат.
                        </p>
                    </div>

                    <div className={'border-2 rounded-2xl col-span-3 py-10 px-4 sm:block hidden'}>
                        <div className={'flex items-center justify-center sm:gap-8 gap-2 mb-6'}>
                            <img src={'../../public/accaunt-img.jpeg'} alt={"person's img for accaunt"}
                                 className={'rounded-full sm:w-24 sm:h-24 w-20 h-20'}/>
                            <div>
                                <h3 className={'text-[#1D1E25] font-semibold'}>Михаил Инишев</h3>
                                <p className={'text-[#7E8492]'}>Основатель, Boomerangme</p>
                            </div>
                            <h4 className={'text-4xl sm:text-7xl'}>“</h4>
                        </div>
                        <p className={'text-[#7E8492]'}>
                            AliInvest помогли нам привлечь первый раунд инвестиций на $400k. Ребята взяли на себя работу
                            по первичной коммуникации с инвесторами, а нас звали на встречи только с заинтересованными.
                            В итоге мы сэкономили время и получили быстрый результат.
                        </p>
                    </div>
                </div>
            </div>

        {/*    Мы открыты к сотрудничеству*/}
            <div className={'flex bg-[#FFF9F4] rounded-3xl p-12 mb-32 relative'}>
                <div className={'lg:max-w-[50%] flex flex-col gap-8 items-start'}>
                    <h2 className={'text-[#1D1E25] font-semibold font-norma sm:text-4xl text-2xl'}>
                        Мы открыты к сотрудничеству
                    </h2>
                    <p className={'text-[#7E8492]'}>
                        Если вы вовлечены в венчурный рынок (но не стартап или инвестор), напишите нам. Мы будем рады найти точки общего взаимодействия.
                    </p>
                    <button className={'bg-[#F97A05] text-white rounded-2xl py-4 px-8'}>
                        Написать
                    </button>
                </div>

                <div className={'lg:inline-block hidden absolute right-[-50px] top-[-70px]'}>
                    <img src={'../../public/Contents-img.png'} alt={'union bg'} className={'w-full'}/>
                </div>
            </div>

            <Footer/>

        </div>
    )
}