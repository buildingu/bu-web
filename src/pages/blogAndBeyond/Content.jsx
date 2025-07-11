import ArticleCard from "./ArticleCard";
import s from "./styles.module.css";

export default function Content() {
  return (
    <>
      <div className={s.content}>
        <div className={s.content_left}>
          <div>Archives</div>
          <div>All</div>
          <div>Academics</div>
          <div>Climate Change</div>
          <div>Finance</div>
          <div>Growth</div>
          <div>Technology</div>
        </div>
        <div className={s.content_right}>
            <ArticleCard/>
        </div>
      </div>
    </>
  );
}
