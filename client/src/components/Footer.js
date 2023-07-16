// import React from "react";
// import { Container, Col, Row } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className="text-center py-3">Copyright &copy; آنلاین شاپ</Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">آنلاین شاپ</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            </p>
            <div className="social-icons">
              <a href="#" className="icon-link">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h3>لینک های سریع</h3>
            <ul>
              <li>
                <a href="../">خانه</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">سرویس ها</a>
              </li>
              <li>
                <a href="#">ارتباط با ما</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h3>ارتباط با ما</h3>
            <form>
              <input
                type="email"
                name="email"
                className="text-input contact-input"
                placeholder="آدرس ایمیل شما"
              />
              <textarea
                name="message"
                className="text-input contact-input"
                placeholder="پیام شما"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                ارسال
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} آنلاین شاپ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
