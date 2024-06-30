


export default function Navbar() {
    
    return (
        <div className="min-w-full flex justify-between items-center py-4">
            <div className={'xs:w-auto w-[160px]'}>
                <img src="../../public/Ali-Invest-Logo.svg" alt="Ali Invest logo" className={'w-full'} />
            </div>
            <div className={'flex justify-between items-center xs:gap-x-10 gap-x-8'}>
            <button className={'flex items-center gap-x-2'}>
                <span className={'uppercase'}>ru</span>
                <img src="../../public/languages-menu-btn.svg" alt={'language menu btn'}/>
            </button>
                <button className={'xs:w-auto w-[20px]'}>
                    <img src={'../../public/Menu-icon.svg'} alt={'menu icon'} className={'w-full'}/>
                </button>
            </div>
        </div>
    )
}