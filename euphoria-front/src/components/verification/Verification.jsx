import React from "react";
import verificationStyle from "./verification.module.scss";
import { useTranslation } from "react-i18next";

function Verification() {
  const { t } = useTranslation();
  return (
    <div className={verificationStyle.verificationContainer}>
      <img src="/img/verification.png" alt="verification image..." />
      <div className={verificationStyle.container}>
        <div>
          <h2>{t("Verification")}</h2>
          <p>{t("Verify your code.")}</p>
        </div>
        <div className={verificationStyle.verificationInput}>
          <p>{t("Verification Code")}</p>
          <input type="text" name="" id="" />
        </div>
        <button>{t("Verify Code")}</button>
      </div>
    </div>
  );
}

export default Verification;
