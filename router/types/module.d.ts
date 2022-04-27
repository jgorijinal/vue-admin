/// <reference util="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-util
  const component: DefineComponent<{}, {}, any>
  export default component
}
