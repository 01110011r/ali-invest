

function CreariveCard({data}: {data: {mainText:string, secondaryText: string, imgUrl: string }}) {
    return (
        <div className={'w-[360px] border-2 p-6 rounded-[20px] flex flex-col gap-6 md:mt-6 hover:scale-105 cursor-pointer duration-150 shadow-lg'}>
            <h1 className={'font-semibold text-[#1D1E25]'}>
                {data.mainText}
            </h1>
            <p className={'font-normal text-[#7E8492]'}>
                {data.secondaryText}
            </p>
            <img src={data.imgUrl} alt={data.mainText + " logo"} className={'w-[80px]'}/>
        </div>
    );
}

export default CreariveCard;