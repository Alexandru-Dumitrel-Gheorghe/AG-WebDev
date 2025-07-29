/** @type {import('next').NextConfig} */
const nextConfig = {
  // Alte opțiuni aici...

  async redirects() {
    return [
      // Pagini vechi -> NOU
      {
        source: "/leistungen/webdesign",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/leistungen/webentwicklung",
        destination: "/webentwicklung",
        permanent: true,
      },
      {
        source: "/leistungen/seo-marketing",
        destination: "/seo",
        permanent: true,
      },
      {
        source: "/leistungen/google-indexierung",
        destination: "/google-indexierung",
        permanent: true,
      },
      {
        source: "/leistungen/wartung-support",
        destination: "/wartung-support",
        permanent: true,
      },
      {
        source: "/leistungen/beratung",
        destination: "/beratung",
        permanent: true,
      },
      { source: "/barrierefreiheit", destination: "/about", permanent: true }, // sau unde vrei tu
      { source: "/projekte", destination: "/referenzen", permanent: true }, // sau altă pagină proiecte

      // Blog-guides și blog-performance vechi -> Blog nou
      { source: "/blog-guides", destination: "/blog", permanent: true },
      { source: "/blog-guides/:slug*", destination: "/blog", permanent: true },
      {
        source: "/blog-performance/:slug*",
        destination: "/blog",
        permanent: true,
      },

      // City pages vechi -> NOU sau /webdesign (dacă nu există direct)
      {
        source: "/webdesign/berlin",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/dresden",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/duesseldorf",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/frankfurt",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/hamburg",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/koeln",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/leipzig",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/muenchen",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/nuernberg",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/stuttgart",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/webdesign/fuerstenfeldbruck",
        destination: "/fuerstenfeldbruck",
        permanent: true,
      }, // Dacă ai această pagină nouă

      // Referenzen vechi -> Referenzen NOU
      {
        source: "/referenzen/certussolutions",
        destination: "/referenzen/certus-solutions",
        permanent: true,
      },
      {
        source: "/referenzen/fraga",
        destination: "/referenzen/fraga-online-shop",
        permanent: true,
      },
      {
        source: "/referenzen/oberholzer",
        destination: "/referenzen/oberholzer-umzugservice",
        permanent: true,
      },

      // Pagini vechi care nu mai există deloc (ex: /impressum există și nou, deci nu redirect)
      // Poți redirecta la homepage sau la /about
      // Exemplu:
      // { source: '/pagina-veche', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
