const nextTranslate = require("next-translate-plugin");

const nextConfig = {
 
  i18n: {
    localeDetection: false,
    defaultLocale: "at-en",
  },
};

module.exports = nextTranslate({
  webpack: (nextConfig) => {
    return { ...nextConfig, ...nextConfig };
  },
  ...nextConfig,

  async rewrites() {
    return [
      {
        source: "/finance",
        destination: "/finance",
      },
      {
        source: "/tattoofinanzierung",
        destination: "/finance",
      },
      {
        source: "/financiacion-de-tatuajes",
        destination: "/finance",
      },

      {
        source: "/finanziamento-dei-tatuaggi",
        destination: "/finance",
      },

      {
        source: "/forme",
        destination: "/forme",
      },
      {
        source: "/tattoo-business",
        destination: "/forme",
      },
      {
        source: "/explorar/negocio-de-tatuajes",
        destination: "/forme",
      },

      { 
        source: "/negozio-di-tatuaggi",
       destination: "/forme" 
    },




      {
        source: "/tattoo-request",
        destination: "/tattoo-request",
      },
      {
        source: "/tattoo-anfrage",
        destination: "/tattoo-request",
      },
      {
        source: "/solicitud-de-tatuaje",
        destination: "/tattoo-request",
      },
      {
        source: "/richiesta-di-tatuaggio",
        destination: "/tattoo-request",
      },


      {
        source: "/tattoo-request-form",
        destination: "/tattoo-request-form",
      },
      {
        source: "/tattoo-anfrage-formular",
        destination: "/tattoo-request-form",
      },
      {
        source: "/formulario-solicitud-de-tatuaje",
        destination: "/tattoo-request-form",
      },

      {
        source: "/modulo-di-richiesta-di-tatuaggio",
        destination: "/tattoo-request-form",
      },


      {
        source: "/contact",
        destination: "/contact",
      },
      {
        source: "/kontakt",
        destination: "/contact",
      },
      {
        source: "/contacto",
        destination: "/contact",
      },

      {
        source: "/contatto",
        destination: "/contact",
      },



      {
        source: "/explore/all",
        destination: "/explore/all",
      },
      {
        source: "/entdecke/alle",
        destination: "/explore/all",
      },
      {
        source: "/explorar/todos",
        destination: "/explore/all",
      },

      {
        source: "/esplora/tutto",
        destination: "/explore/all",
      },


      {
        source: "/explore/tattoos",
        destination: "/explore/tattoos",
      },
      {
        source: "/entdecke/tattoos",
        destination: "/explore/tattoos",
      },
      {
        source: "/explorar/tatuajes",
        destination: "/explore/tattoos",
      },
      {
        source: "/esplora/tatuaggi",
        destination: "/explore/tattoos",
      },


      {
        source: "/explore/flash-tattoos",
        destination: "/explore/flash-tattoos",
      },
      {
        source: "/entdecke/flash-tattoos",
        destination: "/explore/flash-tattoos",
      },
      {
        source: "/explorar/flash-tatuajes",
        destination: "/explore/flash-tattoos",
      },
      {
        source: "/esplora/tatuaggi-flash",
        destination: "/explore/flash-tattoos",
      },


      {
        source: "/explore/tattoo-artists",
        destination: "/explore/tattoo-artists",
      },
      {
        source: "/entdecke/t%C3%A4towierer",
        destination: "/explore/tattoo-artists",
      },
      {
        source: "/explorar/tatuadores",
        destination: "/explore/tattoo-artists",
      },


      {
        source: "/esplora/artisti-dei-tatuaggi",
        destination: "/explore/tattoo-artists",
      },


      // {
      //   source: '/entdecke/tattoos/:slug*',
      //   destination: '/explore/tattoos/:slug*',
      // },

      {
        source: "/explore/tattoos/:slug*",
        destination: "/explore/tattoos/:slug*",
      },

      {
        source: "/entdecke/tattoos/:slug*",
        destination: "/explore/tattoos/:slug*",
      },

      {
        source: "/explorar/tatuajes/:slug*",
        destination: "/explore/tattoos/:slug*",
      },

      {
        source: "/esplora/tatuaggi/:slug*",
        destination: "/explore/tattoos/:slug*",
      },

      {
        source: "/explore/flash-tattoos/:slug*",
        destination: "/explore/flash-tattoos/:slug*",
      },

      {
        source: "/entdecke/flash-tattoos/:slug*",
        destination: "/explore/flash-tattoos/:slug*",
      },

      {
        source: "/explorar/flash-tatuajes/:slug*",
        destination: "/explore/flash-tattoos/:slug*",
      },

      {
        source: "/esplora/tatuaggi-flash/:slug*",
        destination: "/explore/flash-tattoos/:slug*",
      },
    ];},
});
