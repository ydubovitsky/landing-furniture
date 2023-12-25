import styles from './jewelry-list.module.css';

const items = [
  {
    id: 0,
    name: 'Шкаф купе',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Шкаф купе',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Шкаф купе',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Шкаф купе',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Шкаф купе',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Шкаф купе',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Шкаф купе',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 0,
    name: 'Шкаф купе',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: 'https://images.unsplash.com/photo-1631048499455-4f9e26f23b9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

export const JewelryList = () => {
  return (
    <div className={styles.container}>
      {items.map(item => (
        <div className={styles.item}>
          <img src={item.imgUrl} alt="" srcset="" />
          <div className={styles.priceContainer}>
            <p className={styles.price}>{item.price}</p>
            <p className={styles.oldPrice}>{item.oldPrice}</p>
            <p className={styles.discount}>{item.discount}</p>
          </div>
          <h1>{item.name}</h1>
          <div className={styles.ratingContainer}>
            <p>☆ {item.rating}</p>
            <p>Коментарии: {item.commentsCount}</p>
            <p>+ {item.bonuses} бонусов</p>
          </div>
        </div>
      ))}
    </div>
  )
}