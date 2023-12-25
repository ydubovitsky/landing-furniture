import styles from "./menu.module.css";

const Menu = [
  {
    class: "https://images.unsplash.com/photo-1561778233-89714b6f2033?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Верхняя меховая одежда",
  },
  {
    class: "https://images.unsplash.com/photo-1621788454959-4bdde3fe86ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Женские головные уборы",
  },
  {
    class: "https://images.unsplash.com/photo-1676762242012-be37dfa07c7b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Мужские головные уборы",
  },
  {
    class: "https://images.unsplash.com/photo-1518060166183-bc631456a140?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Меховые капюшоны",
  },
  {
    class: "https://images.unsplash.com/photo-1547496278-11c1427976e1?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Меховые комплекты",
  },
];

const MenuComponent = () => {
  const showMenuEl = () => {
    return Menu.map((el) => (
      <div className={styles.featureContainer} key={el.text}>
        <div className={styles.featureIcon}>
          <img src={el.class} alt="" srcset="" />
        </div>
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
    <div id="Menu" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.line} />
      </div>
      <div className={styles.menu}>{showMenuEl()}</div>
    </div>
  );
};

export default MenuComponent;
