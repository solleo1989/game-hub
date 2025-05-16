import { createSystem, defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react"

const theme  = defineConfig({
    theme: {
        recipes: {

        },
        tokens: {
            fonts: {

            }, 
            colors: {
                gray: {
                    // 50: "#f9f9f9",
                    // 100: "#ededed",
                    // 200: "#d3d3d3",
                    // 300: "#b3b3b3",
                    // 400: "#a0a0a0",
                    // 500: "#898989",
                    // 600: "#6c6c6c",
                    // 700: "#202020",
                    // 800: "#121212",
                    // 900: "#010101",
                }
            }
        }
    }
});

// Extends default theme
const config = mergeConfigs(defaultConfig, theme);
const system = createSystem(config);

export default system;
