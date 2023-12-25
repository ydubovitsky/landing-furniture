import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Интернет-магазин мебели</p>
      </div>
      <div className={styles.promo}>
        <p>до 17 декабря по коду: <span>Мебель</span></p>
        <p className={styles.promoAdditional}>Распродажа кухонных гарнитуров до 10% предоставляется последовательно к оплате бонусами 50% по программе лояльности</p>
      </div>
    </div>
  )
}