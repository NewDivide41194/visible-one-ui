import { JSX } from "react";

const HappeningNowCards = (): JSX.Element => {
    return (
        <>
            <h4 className="fw-bold p-3">HAPPENING NOW</h4>
            <div className="d-flex flex-row flex-wrap">
                <div className="d-flex flex-column col-12 col-lg-8 p-3 gap-3">
                    {trendingData.slice(0, 2).map((item) =>
                        <div className="position-relative d-flex flex-column">
                            <img alt="header-image" className="happening-card-img rounded-corner" src={item.imageURL} />
                            <h4 className="position-absolute top-0 p-4 text-light fw-bold">
                                {item.type}
                            </h4>
                            <div className="position-absolute bottom-0 p-4 text-light">
                                <h4 className="fw-bold">{item.title}</h4>
                                <p className="fw-bold">{item.description}</p>
                                <p className="header-description">{item.time}</p>
                            </div>
                        </div>)}
                </div>
                <div className="d-flex flex-column col-12 col-lg-4 p-3 gap-3">
                    {trendingData.slice(2, 5).map((item) => (
                        <div className="card bg-light shadow-lg">
                            <img src={item.imageURL} className="card-img-top trending-card-img" alt="..." />
                            <div className="card-body">
                                <p className="card-title fw-bold" key={item.id}>{item.title}</p>
                                <span>
                                    {item.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default HappeningNowCards;

const trendingData = [
    {
        id: 1,
        title: "Title 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        time: "3 hours ago",
        imageURL: require("../assets/images/trending_3.jpg"),
        type: "Travel"

    },
    {
        id: 2,
        title: "Title 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        time: "3 hours ago",
        imageURL: require("../assets/images/mountain.jpeg"),
        type: "Travel"

    },
    {
        id: 3,
        title: "Title 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        time: "3 hours ago",
        imageURL: require("../assets/images/trending_1.jpg"),
        type: "Travel"

    },
    {
        id: 4,
        title: "Title 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        time: "3 hours ago",
        imageURL: require("../assets/images/trending_2.jpeg"),
        type: "Travel"

    },
    {
        id: 5,
        title: "Title 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        time: "3 hours ago",
        imageURL: require("../assets/images/trending_3.jpg"),
        type: "Travel"

    },
]