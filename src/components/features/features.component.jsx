import styles from "./features.module.css";

const features = [
  {
    title: "Каталог мебели",
    text: "Интернет-магазин мебели - вы можете купить мебель от производителя с доставкой по Москве, широкий ассортимент и выгодные цены.",
  },
  {
    title: "Кухни и Столовые группы",
    text: "Столы и стулья для кухни и обеденные группы купить по доступной цене. ✓ В наличии огромный выбор моделей ✓ Гарантия на всю купленную мебель 12 мес ",
  },
  {
    title: "Распродажа кухонных гарнитуров",
    text: "Распродажа недорогих кухонных гарнитуров от производителя. Бесплатная доставка , более 100 цветов, любые размеры кухонь Акции и скидки",
  },
];

const FeaturesComponent = () => {
  const showFeaturesEl = () => {
    return features.map((el) => (
      <div className={styles.featureContainer} key={el.text}>
        <div className={styles.featureHeader}>
          <p>{el.title}</p>
        </div>
        <div className={styles.featureDescription}>
          <p>{el.text}</p>
        </div>
      </div>
    ));
  };

  return (
    <div id="features" className={styles.container}>
      <div className={styles.header}>
        <h1>Наши особенности</h1>
        <div className={styles.line} />
      </div>
      <div className={styles.features}>{showFeaturesEl()}</div>
    </div>
  );
};

export default FeaturesComponent;
