import React,{useState} from "react";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";


import CountrySelectorModel from '@/components/sss'

import loadTranslation from "next-translate/loadNamespaces";

import useTranslation from "next-translate/useTranslation";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import { useNavigation } from "@/hooks/useRouter";
import useWindowResize from "@/hooks/useWindowSize";



interface KlarnaNewProps {
  translations: any
}

interface I18n {
  // Add properties for the i18n object here
  language: string;
  // ...
}


const KlarnaNew: React.FC<KlarnaNewProps> = ({ translations }) => { 


  const { t } = useTranslation("common", {i18n: translations });

  
  const { router } = useNavigation();

  const { isMobileView } = useWindowResize();

  const klarnaOptions = [
    {
      id: "1",
      tag: t("common:klarnaPage.tag1"),
      title: t("common:klarnaPage.optionTitle-1"),
      content: t("common:klarnaPage.optionContent-1"),
    },

    {
      id: "2",
      tag: t("common:klarnaPage.tag2"),
      title: t("common:klarnaPage.optionTitle-2"),
      content: t("common:klarnaPage.optionContent-2"),
    },

    {
      id: "3",
      tag: t("common:klarnaPage.tag3"),
      title: t("common:klarnaPage.optionTitle-3"),
      content: t("common:klarnaPage.optionContent-3"),
    },

    {
      id: "4",
      tag: t("common:klarnaPage.tag4"),
      title: t("common:klarnaPage.optionTitle-4"),
      content: t("common:klarnaPage.optionContent-4"),
    },
  ];

  const list = [
    {
      title: t("common:klarnaPage.workingStep1"),
      content: t("common:klarnaPage.workingStepContent-1"),
      num: "1",
    },
    {
      title: t("common:klarnaPage.workingStep2"),
      content: t("common:klarnaPage.workingStepContent-2"),
      num: "2",
    },

    {
      title: t("common:klarnaPage.workingStep3"),
      content: t("common:klarnaPage.workingStepContent-3"),
      num: "3",
    },

    {
      title: t("common:klarnaPage.workingStep4"),
      content: t("common:klarnaPage.workingStepContent-4"),
      num: "4",
    },

    {
      title: t("common:klarnaPage.workingStep5"),
      content: t("common:klarnaPage.workingStepContent-5"),
      num: "5",
    },

    {
      title: t("common:klarnaPage.workingStep6"),
      content: t("common:klarnaPage.workingStepContent-6"),
      num: "6",
    },
  ];
  const [expandedItems, setExpandedItems] = useState(['1']); // Initial expanded item

  const handleChange = (uuids:any) => {
    setExpandedItems(uuids);
  };

  return (
    <>
      <Head>

       
        <meta name="robots" content="noindex, nofollow" />
    
        
      </Head>

      

     
      <section className="container_full pt_40 pb_40 m_pb_20"> 


      <CountrySelectorModel/>


      <p>{t("common:testme.content1")}</p>

       
      </section>

      
    </>
  );
}
export default KlarnaNew;


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  try {
    const translations = await loadTranslation({ locale:locale, namespaces: ['common'] });
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
