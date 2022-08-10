import styles from "./workflow.module.css";
import { GiCottonFlower } from "react-icons/gi";
import { WorkFlowNavigation } from "./components/WorkFlowNavigation";
import { useState } from "react";

const WorkFlow = ({}) => {
  const [currPage, setCurrPage] = useState(2);

  const firstPage = {
    page: 1,
    title: "Let's set up a home for all your work",
    subtitle: "You can always create another workspace later.",
    button: "Create Workspace",
    onButtonClick: (e) => {},
    content: (
      <>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label}>Full Name</label>
          <input
            placeholder="Steve Jobs"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label}>Display Name</label>
          <input placeholder="Steve" className={styles.input} type="text" />
        </div>
      </>
    ),
  };
  const secondPage = {
    page: 2,
    title: "Let's set up a home for all your work",
    subtitle: "You can always create another workspace later.",
    button: "Create Workspace",
    onButtonClick: (e) => {},
    content: (
      <>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label}>Workspace Name</label>
          <input placeholder="Eden" className={styles.input} type="text" />
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label}>Workspace URL</label>
          <input placeholder="Example" className={styles.input} type="text" />
        </div>
      </>
    ),
  };

  return (
    <div className={styles.workflow}>
      <div className={styles.workflow_head}>
        <div className={styles.workflow_heading}>
          <div className={styles.workflow_logo}>
            <GiCottonFlower />
          </div>
          <div className={styles.workflow_heading_text}>Eden</div>
        </div>
        <div className={styles.workflow_nav}>
          <WorkFlowNavigation activePage={2} arr={[1, 2, 3, 4]} />
        </div>
      </div>
      <div className={styles.workflow_body}>
        {[firstPage, secondPage].map((item, index) => {
          return (
            <div style={{ display: currPage === item.page ? "block" : "none" }}>
              <h1 className={styles.workflow_body_title}>{item.title}</h1>
              <h4 className={styles.workflow_body_subtitle}>{item.subtitle}</h4>
              {item.content}
              <button className={styles.button} onClick={item.onButtonClick}>
                {item.button}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { WorkFlow };
