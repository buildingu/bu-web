import { useEffect, useState } from "react";
import { mockData } from "./mock_data";
import ScrollArea from "../../components/ScrollArea/ScrollAreaExpanded";
import s from "./stylesExpanded.module.css";

function formatDate(dateStr) {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(dateStr).toLocaleDateString("en-US", options);
}

export default function BlogExpanded({ expandedId, setExpandedId }) {
    const filterData = (setData, category) => {
        setData((prev) => ({
            ...prev,
            blogs:
                category === "All"
                    ? mockData
                    : mockData.filter((item) =>
                        item.categories.toLowerCase().includes(category.toLowerCase())
                    ),
        }));
    };

    const [data, setData] = useState({ blogs: mockData, category: "All" });

    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log("data.blogs", data.blogs);
        }
    }, [data.blogs]);

    return (
        <main className={s.main}>
            <aside className={s.aside}>
                <div className={s.trapezoid}></div>
                <img
                    src="/images/downtou-logo.png"
                    alt="down to u logo"
                    className={s.logo1}
                />
                <ul className={s.categoryList}>
                    <li className={s.sideTextSmall}>Archives</li>
                    {["All", "Academics", "Climate Change", "Finance", "Growth", "Technology"].map(
                        (cat) => (
                            <li
                                key={cat}
                                onClick={() => filterData(setData, cat)}
                                className={`${s.categoryItem} ${data.category === cat ? s.active : ""
                                    }`}
                            >
                                {cat}
                            </li>
                        )
                    )}
                </ul>
            </aside>

            <div className={s.mainContent}>
                <ScrollArea className={s.content}>
                    {data.blogs.map((item) => {
                        const isExpanded = expandedId === item.id;
                        return (
                            <div key={item.id} className={s.blogCard}>
                                <div className={s.blogHeader}>
                                    <h2 className={s.blogTitle}>{item.title.toUpperCase()}</h2>
                                    <span className={s.blogDate}>{formatDate(item.datePublished)}</span>
                                </div>
                                <p className={s.blogAuthor}>By {item.author}</p>
                                <p className={`${s.blogExcerpt} ${isExpanded ? s.expanded : s.collapsed}`}>
                                    We do our best to do our part. We haul our compost bins to the
                                    town recycling centre, we clear our email inboxes so they take
                                    up less space, and we wash plastic containers before recycling
                                    them. We understand that there are wildfires and melting ice and
                                    dying animals, which is why we alter our daily habits in hopes of making a difference, however small. We bike instead of drive when we can, choose reusable over disposable, and support companies with sustainable practices. These changes may seem insignificant on their own, but together, they are part of a collective effort to slow the damage and protect the only home we have.
                                </p>
                                {!isExpanded && (
                                    <a
                                        href="#"
                                        className={s.readMore}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setExpandedId(item.id);
                                        }}
                                    >
                                        Read More
                                    </a>
                                )}
                            </div>
                        );
                    })}

                </ScrollArea>
            </div>
            <img src="/images/img_mole2.png" className={s.mole2} height={200}></img>
        </main>
    );
}
