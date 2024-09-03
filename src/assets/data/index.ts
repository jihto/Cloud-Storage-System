type ColorType = "primary" | "secondary" | "danger" | "default";


interface DataRecentsFoldersProps{
    icon: string;
    color: ColorType;
    title: string;
    subTitle: string;
    data: string;
    date: string;
    url: string;
    users: string[]
}

export const dataRecentsFolders: DataRecentsFoldersProps[] = [
    {
        icon: 'assets/icons/image_primary.svg',
        title: "File project",
        color: "primary",
        subTitle: "Video, Image",
        data: '14md',
        date: "Sun, 2023-12-17",
        url: "file",
        users: ["S", "H"]
    },
    {
        icon: 'assets/icons/file_secondary.svg',
        color: "secondary",
        title: "Design project",
        subTitle: "Figma, XD",
        data: '12md',
        date: "Mon, 2023-12-18",
        url: "design",
        users: ["A", "B"]
    },
    {
        icon: 'assets/icons/pdf_danger.svg',
        color: "danger",
        title: "Code project",
        subTitle: "HTML, CSS, JS",
        data: '20md',
        date: "Tue, 2023-12-19",
        url: "code",
        users: ["C", "D"]
    },
    {
        icon: 'assets/icons/file_secondary.svg',
        color: "secondary",
        title: "Document project",
        subTitle: "Word, Excel",
        data: '8md',
        date: "Wed, 2023-12-20",
        url: "document",
        users: ["E", "F"]
    },
    {
        icon: 'assets/icons/file_secondary.svg',
        color: "secondary",
        title: "Presentation project",
        subTitle: "PowerPoint",
        data: '5md',
        date: "Thu, 2023-12-21",
        url: "presentation",
        users: ["G", "H"]
    }
];