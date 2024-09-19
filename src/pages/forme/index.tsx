import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

import { useNavigation } from "@/hooks/useRouter";


import useTranslation from "next-translate/useTranslation";
import loadTranslation from "next-translate/loadNamespaces";

import CountrySelectorModel from '@/components/sss'


export default function Tattooartists({translations}) {
  
  const { router } = useNavigation();

  const { t } = useTranslation("common", { i18n: translations });

  return (
    <>
      <Head>
      
        <meta name="robots" content="noindex, nofollow" />
       
      </Head>

      

      <section className="container_full mt_40 overlap_first">

        <CountrySelectorModel/>
        
      
   <p>{t("common:testme.content1")}</p>


          
      </section>

  
    </>
  );
}

export async function getServerSideProps(context:any) {
  const { locale } = context;

  try {
    const translations = await loadTranslation("common", locale);
    return {
      props: {
        translations,
      },
    };
  } catch (error) {
    return {
      props: {
        translations: {}, 
      },
    };
  }
}
