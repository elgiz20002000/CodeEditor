import {
  AppBar,
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Radio,
  RadioGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import { ChangeEvent, createContext, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import CodeResult from "../components/CodeResult";

export const context = createContext({
  script: "",
  style: "",
  html: "",
  setScript: () => {},
  setHtml: () => {},
  setStyle: () => {},
});

export default function Home() {
  const [script, setScript] = useState("");
  const [html, setHtml] = useState("");
  const [style, setStyle] = useState("");
  const { Provider } = context;
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Code Editor
            </Typography>

            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={(e) => setTheme(e.target.value)}>
                
                <div style={{display:'flex'}}>
                <FormControlLabel
                  value="dark"
                  control={<Radio checked={theme == "dark"} color="secondary" />}
                  label="Dark"
                  
                />
                <FormControlLabel
                  value="light"
                  control={<Radio checked={theme == 'light'} color="secondary"  />}
                  label="Light"
                />
                </div>
                
              </RadioGroup>
            </FormControl>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Provider value={{ script, html, style, setScript, setHtml, setStyle, theme }}>
          <CodeEditor />
          <CodeResult />
        </Provider>
      </div>
    </>
  );
}
