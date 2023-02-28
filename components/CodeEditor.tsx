import { langs } from "@uiw/codemirror-extensions-langs";
import CodeMirror from "@uiw/react-codemirror";
import { useContext, useState } from "react";
import { context } from "../pages";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import all from '@uiw/codemirror-themes-all'
import { style } from "@mui/system";

const CodeEditor = () => {
  const {style ,html,  script, setScript, setHtml, setStyle, theme } =
    useContext(context);

  const [pLanguage, setPLanguage] = useState<'javascript'>('javascript');
  

  const handleChange = (event: SelectChangeEvent) => {
    event.stopPropagation()
    setPLanguage(event.target.value);
  };

  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{ width:'100%' , display: "flex", justifyContent: "space-between", alignItems:'center'}}>
            <Typography>
            {langs.javascript().language.name.toUpperCase() }
          </Typography>
          </div>
          
        </AccordionSummary>
        <AccordionDetails>
          <CodeMirror
            placeholder={langs.javascript().language.name}
            value={script}
            onChange={(e) => setScript(e)}
            theme={theme}
            extensions={[langs.javascript()]}
            height="200px"
            style={{ height: "33%" }}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              indentOnInput: false,
              autocompletion:true,
              closeBrackets:true,
              searchKeymap:true,
              syntaxHighlighting:true,

            }}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{langs.html().language.name.toUpperCase()}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CodeMirror
            placeholder={langs.html().language.name}
            value={html}
            onChange={(e) => setHtml(e)}
            theme={theme}
            extensions={[langs.html()]}
            height="200px"
            style={{ height: "33%" }}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              indentOnInput: false,
              lintKeymap:true
            }}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{langs.css().language.name.toUpperCase()}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CodeMirror
            placeholder={langs.css().language.name}
            value={style}
            onChange={(e) => setStyle(e)}
            theme={theme}
            extensions={[langs.css()]}
            height="200px"
            style={{ height: "33%" }}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              indentOnInput: false,
            }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CodeEditor;
