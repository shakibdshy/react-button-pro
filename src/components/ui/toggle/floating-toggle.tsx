"use client";

import { useTheme } from "next-themes";
import { IconBrightnessDown, IconBrightnessFilled } from "@tabler/icons-react";
import Button from "../button/button";

export default function FloatingToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      {theme === "light" ? (
        <Button color="secondary" onClick={() => setTheme("dark")}>
          <IconBrightnessDown />
        </Button>
      ) : (
        <Button color="secondary" onClick={() => setTheme("light")}>
          <IconBrightnessFilled />
        </Button>
      )}
    </div>
  );
}
