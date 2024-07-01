import CreariveCard from "./CreariveCard.tsx";


export default function Advantages () {

//     data fetching will be here

    const creativeCardsData = [
        {
            mainText:"Сотни инвесторов",
            secondaryText:"Активные инвесторы в поисках перспективных стартапов",
            imgUrl:"../../public/advantage-cards/investors.svg"
        },
        {
            mainText:"Экономия времени",
            secondaryText:"Умещаем долгий процесс поиска инвестиций в одном месте",
            imgUrl:"../../public/advantage-cards/clock.svg"
        },
        {
            mainText:"Оплата за результат",
            secondaryText:"Вы платите лишь за финальный результат по итогам нашей работы",
            imgUrl:"../../public/advantage-cards/case.svg"
        },
        {
            mainText:"Целевая аудитория",
            secondaryText:"Ваш проект будет предложен инвесторам, которым он будет интересен",
            imgUrl:"../../public/advantage-cards/auditory.svg"
        },
        {
            mainText:"Сопровождение",
            secondaryText:"Составим предложение и материалы, чтобы инвестор понял все тонкости",
            imgUrl:"../../public/advantage-cards/notes.svg"
        },
        {
            mainText:"Оптимизация усилий",
            secondaryText:"Расскажите о себе один раз, мы сделаем теплое интро десяткам инвесторов",
            imgUrl:"../../public/advantage-cards/glass.svg"
        },

    ]

    return (
        <div className={'flex flex-wrap items-center lg:justify-between justify-center gap-y-6 mb-10 sm:mb-16'}>
            {
                creativeCardsData.map((data) => <CreariveCard data={data}/>)
            }
        </div>
    )
}