import React from 'react'
import useTranslation from "next-translate/useTranslation";


export default function Artists() {

    const { t } = useTranslation();
  return (
    <div>
        <p>artist page</p>

        <h5>{t("common:testme.content1")}</h5>
      
      
    </div>
  )
}
