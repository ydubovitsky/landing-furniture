import styles from './footer.module.css';

const FooterComponent = () => {

  return (
    <footer className={styles.footer} data-testid="footer-component">
      <div className={styles.footer__topSide}>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu__title}>О нас</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}>Каталог</li>
            <li className={styles.topSideMenu__item}>Главная</li>
            <li className={styles.topSideMenu__item}>О компании</li>
          </ul>
        </div>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu}>Покупателям</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}>Вызвать замерщика</li>
            <li className={styles.topSideMenu__item}>Часто задаваемые вопросы - FAQ</li>
            <li className={styles.topSideMenu__item}>Доставка и оплата</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottomSide}>
        <div className={styles.bottomSideMenu}>
          <h3 className={styles.bottomSideMenu__title}>Оптовикам</h3>
          <ul className={styles.bottomSideMenu__listContainer}>
            <li className={styles.bottomSideMenu__item}>Полезная информация</li>
            <li className={styles.bottomSideMenu__item}>Особенности</li>
            <li className={styles.bottomSideMenu__item}>Галерея</li>
            <li className={styles.bottomSideMenu__item}>Каталог</li>
          </ul>
        </div>
        <div className={styles.copyRightContainer}>
          <p>© 2021–{new Date().getFullYear()}, ИНТЕРНЕТ-МАГАЗИН МЕБЕЛИ, официальный сайт</p>
        </div>
      </div>
    </footer >
  )
}
export default FooterComponent;
