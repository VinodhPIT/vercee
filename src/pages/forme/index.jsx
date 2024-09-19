import React from "react";
// import { GetServerSideProps } from "next";

import Head from "next/head";

import useTranslation from "next-translate/useTranslation";
 import loadTranslation from "next-translate/loadNamespaces";



export default function Tattooartists({translations}) {
  const { t } = useTranslation("common",{i18n:translations});

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="container_full mt_40 overlap_first">
       

        <p>{t("common:testme.content1")}</p>



        
      </section>
    </>
  );
}

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