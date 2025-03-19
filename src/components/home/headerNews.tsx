import { JSX } from "react";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const HeaderNews = (): JSX.Element => {
    return (
        <div className="p-5 bg-light h-100">
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">MORE NEWS</span>
                <span className="d-flex gap-3">
                    <ChevronLeftIcon />
                    <KeyboardArrowRightIcon />
                </span>
            </div>
            <hr />
            <div>
                {
                    news.map((item, index) => {
                        return (
                            <div key={index} className="d-flex flex-column gap-2 mb-4">
                                <span className="fw-bold color-pink">{item.title}</span>
                                <span className="fw-bold">{item.subTitle}</span>
                                <span>{item.description}</span>
                                <span className="text-muted">{item.time}</span>

                            </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default HeaderNews;

const news = [
    {
        title: "Travel",
        subTitle: "Travel to the moon",
        description: "Description 1",
        time: "2 hours ago"
    },
    {
        title: "Technology",
        subTitle: "New technology",
        description: "Description 2",
        time: "3 hours ago"
    }
]