import {definePreset} from "@primevue/themes";

import Lara from "@primevue/themes/lara";

export default definePreset(Lara, {
    primitive: {
        blue: {
            50: "#f1f9fe",
            100: "#e2f1fc",
            200: "#bee3f9",
            300: "#85cdf4",
            400: "#44b3ec",
            500: "#1b9adc",
            600: "#0e7bbb",
            700: "#0d659c",
            800: "#0f547d",
            900: "#124568",
            950: "#0c2c45",
        }
    },
    semantic: {
        primary: {
            50: "{blue.50}",
            100: "{blue.100}",
            200: "{blue.200}",
            300: "{blue.300}",
            400: "{blue.400}",
            500: "{blue.500}",
            600: "{blue.600}",
            700: "{blue.700}",
            800: "{blue.800}",
            900: "{blue.900}",
            950: "{blue.950}",
        }
    },
    components: {
        progressspinner: {
            colorScheme: {
                light: {
                    root: {
                        'color.1': '#fff',
                        'color.2': '#fff',
                        'color.3': '#fff',
                        'color.4': '#fff'
                    }
                },
                dark: {
                    root: {
                        'color.1': '#fff',
                        'color.2': '#fff',
                        'color.3': '#fff',
                        'color.4': '#fff'
                    }
                }
            }
        }
        // ... other components
    }
});