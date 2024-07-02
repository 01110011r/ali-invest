import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcons from '@mui/icons-material/ExpandMore';

function AccordionProvider() {
    return (
        <div className={'flex flex-col gap-6'}>
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcons/>}
                aria-controls={'panel1-content'}
                id={'panel1-header'}
                className={'text-[#1D1E25] font-semibold text-xl'}
                >
                    Венчурные фонды
                </AccordionSummary>
                <AccordionDetails
                className={'text-[#7E8492] text-lg'}
                >
                    Международные и российские фонды с капиталом от $10М и до $200M. Представлены фонды с фокусом на проекты от Pre-seed стадии до Series A.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcons/>}
                    aria-controls={'panel1-content'}
                    id={'panel1-header'}
                    className={'text-[#1D1E25] font-semibold text-xl'}
                >
                    Бизнес-Ангелы
                </AccordionSummary>
                <AccordionDetails
                    className={'text-[#7E8492] text-lg'}
                >
                    Международные и российские фонды с капиталом от $10М и до $200M. Представлены фонды с фокусом на проекты от Pre-seed стадии до Series A.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcons/>}
                    aria-controls={'panel1-content'}
                    id={'panel1-header'}
                    className={'text-[#1D1E25] font-semibold text-xl'}
                >
                    Частные инвесторы
                </AccordionSummary>
                <AccordionDetails
                    className={'text-[#7E8492] text-lg'}
                >
                    Международные и российские фонды с капиталом от $10М и до $200M. Представлены фонды с фокусом на проекты от Pre-seed стадии до Series A.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcons/>}
                    aria-controls={'panel1-content'}
                    id={'panel1-header'}
                    className={'text-[#1D1E25] font-semibold text-xl'}
                >
                    Бизнес-Акселераторы
                </AccordionSummary>
                <AccordionDetails
                    className={'text-[#7E8492] text-lg'}
                >
                    Международные и российские фонды с капиталом от $10М и до $200M. Представлены фонды с фокусом на проекты от Pre-seed стадии до Series A.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcons/>}
                    aria-controls={'panel1-content'}
                    id={'panel1-header'}
                    className={'text-[#1D1E25] font-semibold text-xl'}
                >
                    Корпоративные фонды
                </AccordionSummary>
                <AccordionDetails
                    className={'text-[#7E8492] text-lg'}
                >
                    Международные и российские фонды с капиталом от $10М и до $200M. Представлены фонды с фокусом на проекты от Pre-seed стадии до Series A.
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

export default AccordionProvider;