import styles from "./workflow.module.css";
import { GiCottonFlower } from "react-icons/gi";
import { FaUserAlt, FaUserFriends, FaCheckCircle } from "react-icons/fa";
import { WorkFlowNavigation } from "./components/WorkFlowNavigation";
import { useState } from "react";

const WorkFlow = ({}) => {
  const [currPage, setCurrPage] = useState(1);

  const pageArr = [firstPage, secondPage, thirdPage, fourthPage];

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
          <WorkFlowNavigation activePage={currPage} arr={pageArr} />
        </div>
      </div>
      <div className={styles.workflow_body}>
        {pageArr.map((item, index) => {
          return (
            <div style={{ display: currPage === item.page ? "block" : "none" }}>
              <div className={styles.icon}>{item.icon}</div>
              <h1 className={styles.workflow_body_title}>{item.title}</h1>
              <h4 className={styles.workflow_body_subtitle}>{item.subtitle}</h4>
              <div className={styles.content_body}>
                {item.content}
                <button
                  className={styles.button}
                  onClick={(e) => {
                    item.onButtonClick(e, setCurrPage);
                  }}
                >
                  {item.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const firstPage = {
  page: 1,
  title: "Welcome! First things first...",
  subtitle: "You can always change them later.",
  button: "Create Workspace",
  onButtonClick: (e, setCurrPage) => {
    setCurrPage((prevState) => {
      return prevState < 4 ? prevState + 1 : 1;
    });
  },
  content: (
    <>
      <div className={styles.input_wrapper}>
        <label className={styles.input_label}>Full Name</label>
        <input placeholder="Steve Jobs" className={styles.input} type="text" />
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
  onButtonClick: (e, setCurrPage) => {
    setCurrPage((prevState) => {
      return prevState < 4 ? prevState + 1 : 1;
    });
  },
  content: (
    <>
      <div className={styles.input_wrapper}>
        <label className={styles.input_label}>Workspace Name</label>
        <input placeholder="Eden" className={styles.input} type="text" />
      </div>
      <div className={styles.input_wrapper}>
        <label className={styles.input_label}>Workspace URL</label>
        <div className={styles.input_link_wrapper}>
          <span className={styles.input_span}>www.eden.com/</span>
          <input
            placeholder="Example"
            className={styles.input_link}
            type="text"
          />
        </div>
      </div>
    </>
  ),
};
const thirdPage = {
  page: 3,
  title: "How are you planning to use Eden?",
  subtitle: "We'll streamline your setup experience accordingly.",
  button: "Create Workspace",
  onButtonClick: (e, setCurrPage) => {
    setCurrPage((prevState) => {
      return prevState < 4 ? prevState + 1 : 1;
    });
  },
  content: (
    <>
      <div className={styles.cards}>
        <div className={styles.select_card}>
          <FaUserAlt className={styles.card_icons} />
          <p className={styles.card_title}>For myself</p>
          <p className={styles.card_subtitle}>
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div className={styles.select_card}>
          <FaUserFriends className={styles.card_icons} />
          <p className={styles.card_title}>With my team</p>
          <p className={styles.card_subtitle}>
            Wikis, tasks, docs & projects all in one place.
          </p>
        </div>
      </div>
    </>
  ),
};
const fourthPage = {
  page: 4,
  icon: <FaCheckCircle />,
  title: "Congratulations, Eren!",
  subtitle: "You have completed onboarding, you can start using the Eden!.",
  button: "Launch Eden",
  onButtonClick: (e, setCurrPage) => {
    setCurrPage((prevState) => {
      return prevState < 4 ? prevState + 1 : 1;
    });
  },
  content: <></>,
};

export { WorkFlow };
