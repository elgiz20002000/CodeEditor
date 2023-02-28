import Script from "next/script";
import React, { useContext, useEffect } from "react";
import { context } from "../pages";

const CodeResult = () => {
  const { html, script, style, setScript, setHtml, setStyle } =
    useContext(context);

  //   useEffect(() => {
  //     document.querySelector(".result .body").innerHTML =
  //       ('<h1></h1>' || html) + `<style>${style}</style>` + `<script>${ "document.querySelector('h1').innerHTML = 'hello'" || script}</script>`;
  //   }, [html, script, style]);

  return (
    <>
      <iframe frameBorder={0}
      width="100%"
        srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>${style}</style>
</head>
<body>
    ${html}
</body>
<script>${script}</script>
</html>
`}
      ></iframe>

      {/* <div className="result">
        <div className="body"></div>
      </div> */}
    </>
  );
};

export default CodeResult;
