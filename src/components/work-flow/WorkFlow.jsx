import styles from "./workflow.module.css";
import { GiCottonFlower } from "react-icons/gi";

const WorkFlow = ({}) => {
  return (
    <div className={styles.workflow}>
      <div className={styles.workflow_head}>
        <div className={styles.workflow_heading}>
          <div className={styles.workflow_logo}>
            <GiCottonFlower />
          </div>
          <div className={styles.workflow_heading_text}>Eden</div>
        </div>
      </div>
      <div className={styles.workflow_body}></div>
    </div>
  );
};

export { WorkFlow };
