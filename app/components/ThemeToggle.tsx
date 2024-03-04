import {useEffect, useState} from "react";
import {HStack, Switch} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const isDarkModeOn = theme === "dark";

  useEffect(() => {
    setTheme(document.body.dataset.theme as Theme);
  }, []);

  return (
    <HStack>
      <Switch
        isChecked={isDarkModeOn}
        onChange={() => {
          const updatedTheme = isDarkModeOn ? "light" : "dark";
          setTheme(updatedTheme);
          document.body.dataset.theme = updatedTheme;
        }}
      />

      {isDarkModeOn ? <MoonIcon /> : <SunIcon />}
    </HStack>
  );
}
