


export default function Navbar() {
    
    return (
        <div className="min-w-full flex justify-between items-center gap-x-2 py-4">
            <div className={'xs:w-auto w-[160px]'}>
                <img src="../../public/Ali-Invest-Logo.svg" alt="Ali Invest logo" className={'cursor-pointer'}/>
            </div>
            <div className={'flex justify-between items-center xs:gap-x-10 gap-x-6'}>
            <button className={'flex items-center gap-x-2 cursor-no-drop'} title={'in the process'}>
                <span className={'uppercase'}>ru</span>
                <img src="../../public/languages-menu-btn.svg" alt={'language menu btn'}/>
            </button>
                <button className={'xs:w-auto w-[20px] cursor-no-drop'} title={'in the process'}>
                    <img src={'../../public/Menu-icon.svg'} alt={'menu icon'} className={'w-full'}/>
                </button>
            </div>
        </div>
    )
}