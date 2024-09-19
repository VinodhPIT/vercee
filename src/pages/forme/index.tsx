import React from "react";
import { GetServerSideProps } from "next";

import Head from "next/head";

import useTranslation from "next-translate/useTranslation";
import loadTranslation from "next-translate/loadNamespaces";

import CountrySelectorModel from "@/components/sss";

export default function Tattooartists() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="container_full mt_40 overlap_first">
        <CountrySelectorModel />

        <p>{t("common:testme.content1")}</p>
      </section>
    </>
  );
}

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