import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

import countriesData from "@/data/countries.json";

import UsePathTranslation from "@/hooks/usePathTranslation";

interface Country {
  id: number;
  country: string;
  language: string;
  image: string;
  countryCode: string;
  lng: string;
  set: string;
}


const CountrySelectorModel = () => {
  const router = useRouter();
  const [country, setCountry] = useState<Country[]>([]); // Define the state with the Country type

  const { t } = useTranslation();

  useEffect(() => {
    setCountry(countriesData as Country[]); 
  }, []);

  const chooseLanguage = async (countryCode: string, lng: string) => {
    const newLocale = `${countryCode}-${lng}`;
    await setLanguage(newLocale);

    const currentPath = router.asPath;
    const translatedPath = UsePathTranslation(currentPath, newLocale);

    // Construct the new URL with the new locale and the translated path
    const newUrl = `/${newLocale}${translatedPath}`;
    router.replace(newUrl);
  };

  return (
    <div className={`popup_wrap`}>
      <div className="popup_container">
        <div className="language_popup">
          <div className="language_popup_block">
            <ul>
              {country.map((el) => {
                return (
                  <li key={el.id}>
                    <button
                      className={
                        router.locale === el.set
                          ? "activeCountry"
                          : "inActivecountry"
                      }
                      disabled={router.locale === el.set}
                      onClick={() =>
                        chooseLanguage(el.countryCode, el.lng)
                      }
                    >
                      <Image
                        alt={`${el.country}${"-"}${el.language}`}
                        src={el.image}
                        width={32}
                        height={32}
                      />
                      <span>
                        <h4>{el.country}</h4>
                        <p>{el.language}</p>
                      </span>
                      {/* <Image
                            width={24}
                            height={25}
                            src="/icon_language_link.svg"
                            alt=""
                            className="icon_language_link"
                          /> */}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Link href={`/${router.locale}/${t("common:routes.klarna")}`}>
          klarna ,
        </Link>

        <Link
          href={`/${router.locale}/${t("common:routes.for-tattoo-artists")}`}
        >
          tatttoo
        </Link>
      </div>
    </div>
  );
};

export default CountrySelectorModel;
