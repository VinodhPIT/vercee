import React from 'react'
import useTranslation from "next-translate/useTranslation";

export default function Inded() {
  const { t } = useTranslation();
  return (
    <div>
      <h5>{t("common:testme.content1")}</h5>
      
    </div>
  )
}
