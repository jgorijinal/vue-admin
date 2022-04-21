import {App} from 'vue';
import {setupTailwindcss} from '@/plugins/tailwindcss';

export function setupPlugins(app:App) {
  setupTailwindcss()
}