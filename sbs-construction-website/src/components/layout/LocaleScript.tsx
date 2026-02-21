export function LocaleScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){var l=localStorage.getItem("sbs-locale")||"en";document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";})();`,
      }}
    />
  );
}
