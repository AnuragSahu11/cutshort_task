import styles from "./workflowComponents.module.css";

const WorkFlowNavigation = ({ activePage, arr }) => {
  return (
    <div className={styles.navigation_wrapper}>
      {arr.map((item, i) => (
        <NavigationBall
          key={i}
          index={i + 1}
          activePage={activePage}
          lastIndex={arr.length}
        />
      ))}
    </div>
  );
};

const NavigationBall = ({ index, activePage, lastIndex }) => {
  return (
    <div className={styles.navigation_ball_wrapper}>
      {index > 1 && (
        <span
          className={
            activePage >= index ? styles.span_left : styles.span_left_empty
          }
        ></span>
      )}
      <span
        className={
          activePage >= index ? styles.span_ball_filled : styles.span_ball_empty
        }
      >
        {index}
      </span>
      {index < lastIndex && (
        <span
          className={
            activePage >= index ? styles.span_right : styles.span_right_empty
          }
        ></span>
      )}
    </div>
  );
};

export { WorkFlowNavigation };
