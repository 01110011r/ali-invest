import Header from "../components/Header.tsx";
import Advantages from "../components/Advantages.tsx";
import HowItWorks from "../components/HowItWorks.tsx";
import Partners from "../components/Partners.tsx";

export default function Startup() {
    return (
        <div className={''}>
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
        </div>
    )
}