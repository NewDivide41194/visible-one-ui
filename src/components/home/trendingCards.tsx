const TrendingCards = () => {
    return (
        <>
            <h4 className="fw-bold p-3">Trending</h4>
            <div className="d-flex flex-row flex-wrap">
                {trendingData.map((item) => (
                    <div className="d-flex flex-column col-12 col-md-6 col-lg-4 p-3">
                    <div className="card bg-light shadow-lg">
                        <img src={item.imageURL} className="card-img-top trending-card-img" alt="trending-images" />
                        <div className="card-body">
                            <p className="card-title fw-bold" key={item.id}>{item.title}</p>
                            <p>
                                {item.description}
                            </p>
                            <span>
                                {item.time}
                            </span>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TrendingCards;

const trendingData = [
    {
        id: 1,
        title: "Title 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        time: "3 hours ago",
        imageURL: require("../assets/images/trending_1.jpg")

    },
    {
        id: 2,
        title: "Title 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        time: "3 hours ago",
        imageURL: require("../assets/images/trending_2.jpeg")

    },
    {
        id: 3,
        title: "Title 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        time: "3 hours ago",
        imageURL: require("../assets/images/trending_3.jpg")

    },
]