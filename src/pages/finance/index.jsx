import React from "react";
// import { GetServerSideProps } from "next";

import Head from "next/head";



 import loadTranslation from "next-translate/loadNamespaces";

import useTranslation from "next-translate/useTranslation";


const KlarnaNew = ({translations}) => {
  
  const { t } = useTranslation("commmon" , {i18n:translations});

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="container_full pt_40 pb_40 m_pb_20">
        

        <p>{t("common:testme.content1")}</p>
      </section>
    </>
  );
};
export default KlarnaNew;

export const getServerSideProps = async (context) => {
  const { locale } = context;

  try {
    const translations = await loadTranslation({
      locale: locale || "en", // Fallback to "en" if locale is undefined
      namespaces: ["common"],
    });

    return {
      props: {
        translations,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        translations: {},
      },
    };
  }
};