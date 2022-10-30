import styles from "./Footer.module.scss";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
        <nav>
            <a href='https://github.com/team-AFAD/AFAD' target='_blank'>Github</a>
        </nav>
        <p>
            <span>team member : 김정화, 이수림, 문서영, 함유정</span><br/>
            <span>SeSAC web 4기</span><br/>
            <span><BiCopyright /> Copyright 2022. AFAD. All Rights Reserved.</span>
        </p>
        <p/>
      {/* <div className={styles.footer__content}>
        <div className={styles.footer__content__logo}>
          <h2>Logo</h2>
        </div>
        <address className={styles.footer__content__team}>
          
        </address>
        <div className={styles.footer__content__copyright}>
          <BiCopyright />
          저작권표시
        </div>
        <div className={styles.footer__content__site}>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;