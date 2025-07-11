import s from "./styles.module.css";

export default function ArticleCard() {
  return (
    <>
      <div className={s.articleCard}>
        <div className={s.title}>
          <div className={s.titleName}>
            CLIMATE CHANGE:
            <br />
            SWITCHING THE LENS
          </div>
          <div className={s.verticalLine}></div>
          <div className={s.titleDate}>October 01, 2022</div>
        </div>

        <div className={s.author}>
          By Annoushka Singh, Akila Lingam, Sami Polumohanti, Jessie Li,
          Vanshika Bhramidipati, Allie Liu, Tamara Turchetta
        </div>

        <div>
          <p className={s.clampParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            sapien at ipsum fermentum bibendum. Integer tincidunt, orci at
            tincidunt posuere, metus turpis suscipit magna, a dignissim diam
            risus vel massa. Vivamus non tortor sed sapien dapibus tincidunt.
            Curabitur volutpat, nulla ut feugiat blandit, elit arcu accumsan
            purus, nec sodales nunc nulla id sem. Fusce non velit eu lorem
            ullamcorper blandit.
          </p>
        </div>

        <div className={s.readMore}>
            Read More
        </div>
      </div>
    </>
  );
}
