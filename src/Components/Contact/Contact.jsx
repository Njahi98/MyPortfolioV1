import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { motion } from "framer-motion";
import { BsSendFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
function Contact() {
  const isDark = useContext(ThemeContext);
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // reset the form after submission
  } = useForm();

  const errorVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } },
  };

  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
      )
      .then(
        () => {
          console.log("SUCCESS!");
          reset(); // Reset the form after successful submission
          toast.success("Thank you for reaching out! Your message has been successfully sent. ")
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Oops, something went wrong.");
        }
      );
  };

  return (
    <div
      className={styles.contactComponent}
      data-theme={isDark ? "Dark" : "Light"}
      id="Contact"
    >
      <p>Get in Touch</p>
      <div
        className={
          isDark ? `${styles.contact}` : `${styles.contact} ${styles.light}`
        }
      >
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <p>
            Whether you&apos;re interested in discussing a job opportunity, have
            a project in mind, or just want to say hello, feel free to drop me a
            message using the form below. I&apos;d love to connect!
          </p>
          <div className={styles.formgrid}>
            <div className="nameField">
              <input
                {...register("user_name", { required: true, minLength: 3 })}
                name="user_name"
                placeholder="Your Name"
              />
              {errors.user_name && (
                <motion.p
                  className={styles.error}
                  onClick={(e) => e.stopPropagation()}
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Name must be at least 3 characters.
                </motion.p>
              )}
            </div>
            <div className="emailField">
              <input
                {...register("user_email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                name="user_email"
                placeholder="Your Email"
              />
              {errors.user_email && (
                <motion.p
                  className={styles.error}
                  onClick={(e) => e.stopPropagation()}
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Please enter a valid email address.
                </motion.p>
              )}
            </div>
          </div>
          <textarea
            {...register("message", { required: true, minLength: 3 })}
            name="message"
            placeholder="Your Message"
          />
          {errors.message && (
            <motion.p
              className={styles.error}
              onClick={(e) => e.stopPropagation()}
              variants={errorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Please provide a message with at least 3 words.
            </motion.p>
          )}
          <button type="submit" data-theme={isDark ? "Dark" : "Light"}>
            Send Message <BsSendFill />
          </button>
        </form>
      </div>
      {isDark ? (
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "black", color:"white"
            },
          }}
        />
      ) : (
        <Toaster position="top-right"/>
      )}
    </div>
  );
}

export default Contact;
