import styles from './Home.module.css'
function Home(){
    return(
        <div className={styles.home}>
            <span>
            <p className={styles.colored}>Hello there!</p> 
            <p className={styles.normal}>I am Oussama Njahi, I&apos;m a fullstack Developer</p>
            <p className={styles.normal}>creating amazing websites using React & Spring Boot.</p>
            </span>
            <img src="" alt="photo" />

        </div>
    );
}
export default Home;