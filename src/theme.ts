import { createSystem, defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react"

const theme  = defineConfig({
    theme: {
        recipes: {

        },
        tokens: {

        }
    }
});

// Extends default theme
const config = mergeConfigs(defaultConfig, theme);
const system = createSystem(config);

export default system;
