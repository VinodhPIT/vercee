import React from "react";
import { GetServerSideProps } from "next";

import Head from "next/head";

import CountrySelectorModel from "@/components/sss";

import loadTranslation from "next-translate/loadNamespaces";

import useTranslation from "next-translate/useTranslation";

interface KlarnaNewProps {
  translations: '';
}

const KlarnaNew: React.FC<KlarnaNewProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="container_full pt_40 pb_40 m_pb_20">
        <CountrySelectorModel />

        <p>{t("common:testme.content1")}</p>
      </section>
    </>
  );
};
export default KlarnaNew;

export const getServerSideProps: GetServerSideProps = async (context) => {
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