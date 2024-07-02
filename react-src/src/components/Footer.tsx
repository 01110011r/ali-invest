
import {NavLink, useLocation} from "react-router-dom";

function Footer() {

    const location = useLocation();

    return (
        <div className={'mb-10'}>
            <div className={'flex flex-col md:flex-row justify-between gap-8 pb-16 mb-8 pt-32 border-b-4'}>
                <div className={'flex gap-10 content-start '}>
                    <NavLink to={'/'} className={ location.pathname === '/' ? 'text-[#F97A05]' : 'text-[#7E8492]'}>
                        Я Стартап
                    </NavLink>

                    <NavLink to={'/investor'} className={location.pathname === '/investor' ? 'text-[#F97A05]' : 'text-[#7E8492]'}>
                        Я Инвестор
                    </NavLink>
                </div>
                <NavLink to={'/'}>
                <img src={'../../public/Ali-Invest-Logo.svg'} alt={'Ali Invest logo'} className={'text-center'}/>
                </NavLink>
            </div>

            <div className={'flex flex-col lg:flex-row justify-between gap-10 text-[#7E8492]'}>
            <p className={'lg:order-1 order-2'}>
                © 2023. AliInvest. Все Права Защищены.
            </p>
                <div className={'flex gap-6 flex-col lg:flex-row lg:order-2 order-1'}>
                    <p>
                        Политика конфиденциальности
                    </p>
                    <p>
                        Пользовательское соглашение
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;