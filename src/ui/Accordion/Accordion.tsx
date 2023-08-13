import classNames from "classnames"
import React, { ReactNode, useRef, useState } from "react"

import { Arrow } from "../icons/Arrow"

import styles from "./Accordion.module.css"

export const Accordion = ({ title, children }: { title: string; children?: ReactNode }) => {
  const [isActive, setActiveState] = useState("")

  function toggleAccordion() {
    setActiveState(isActive === "" ? "active" : "")
  }
  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <Arrow
          className={classNames(styles.accordionArrow, { [styles.rotate]: isActive })}
          width={20}
          height={20}
          color={"var(--color-black-typo-primary)"}
        />
        <div className={styles.accordionTitle}>{title}</div>
      </div>
      {isActive ? <div className={styles.accordionContent}>{children}</div> : null}
    </div>
  )
}

