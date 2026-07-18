import fs from 'node:fs'
import path from 'node:path'

const VIRTUAL_ID = 'virtual:certificates'
const RESOLVED_ID = '\0virtual:certificates'

/**
 * Scans public/certificates at build/dev time.
 * Image filenames are never hardcoded in app code.
 */
export function certificatesPlugin(relativeDir = 'public/certificates') {
  const absDir = path.resolve(relativeDir)

  function scan() {
    if (!fs.existsSync(absDir)) return []

    return fs
      .readdirSync(absDir)
      .filter((name) => /\.(jpe?g|png|webp|gif|avif)$/i.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .map((file) => ({
        file,
        src: `/certificates/${encodeURIComponent(file).replace(/%2F/g, '/')}`,
      }))
  }

  return {
    name: 'certificates-manifest',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
      return null
    },
    load(id) {
      if (id !== RESOLVED_ID) return null
      const files = scan()
      return `export default ${JSON.stringify(files, null, 2)}`
    },
    configureServer(server) {
      if (fs.existsSync(absDir)) {
        server.watcher.add(absDir)
      }

      const reload = (file) => {
        if (!file.includes(`${path.sep}certificates${path.sep}`) && !file.endsWith(`${path.sep}certificates`)) {
          return
        }
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
          server.ws.send({ type: 'full-reload' })
        }
      }

      server.watcher.on('add', reload)
      server.watcher.on('unlink', reload)
      server.watcher.on('change', reload)
    },
  }
}
