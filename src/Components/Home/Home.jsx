import styles from './Home.module.css';
import devPic from '../../assets/devPicture.jpg';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <p>Hello There!</p>
        <h2>I&apos;m <span className={styles.name}>Oussama Njahi</span></h2>
        <p className={styles.description}>
          A passionate fullstack developer, creating amazing websites using React & Spring Boot.
        </p>
        <div className={styles.skills}>
          <span>React</span>
          <span>Spring Boot</span>
          <span>JavaScript</span>
          <span>Java</span>
          <span>HTML/CSS</span>
        </div>
        <div className={styles.linkBtns}>
          <a href="#projects" className={styles.button}>View My Work</a>
          <a href="#contact" className={styles.button}>Get in Touch</a>
        </div>
      </div>
      <div className={styles.imageContainer}>
          <img src={devPic} alt="Developer" />
        </div>
    </div>
  );
}

export default Home;