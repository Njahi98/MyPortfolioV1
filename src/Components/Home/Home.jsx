import styles from "./Home.module.css";
import devPic from "../../assets/devPicture.jpg";
function Home() {
  return (
    
   
    
    <div className={styles.home}>
      <div>
        <p>Hello there!</p>
        <p>I am Oussama Njahi, I&apos;m a fullstack Developer</p>
        <p>creating amazing websites using React & Spring Boot.</p>
      </div>
     
      <img src={devPic} alt="photo" />
    </div>


   
  );
}
export default Home;
