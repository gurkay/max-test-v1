import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

interface DifferentTitle {
    title: string,
    viteLogo: string,
    reactLogo: string,
}

export const headerComponentData: DifferentTitle[] = [
    {
        title: "Vite + React",
        viteLogo: viteLogo,
        reactLogo: reactLogo,
    },
    {
        title: "Vite",
        viteLogo: viteLogo,
        reactLogo: reactLogo,
    },
    {
        title: "React",
        viteLogo: viteLogo,
        reactLogo: reactLogo,
    }
];