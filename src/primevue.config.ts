import CustomPreset from "@/styles/presets/CustomPreset";

const primevueConfig = {
    ripple: true,
    inputVariant: 'outlined',
    theme: {
        preset: CustomPreset,
        options: {
            darkModeSelector: '.app-dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities',
            }
        }
    }
};

export default primevueConfig;