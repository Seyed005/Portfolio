/// <reference types="vite/client" />

declare module 'virtual:certificates' {
  const certificates: Array<{ file: string; src: string }>
  export default certificates
}
