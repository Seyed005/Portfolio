import certificateFiles from 'virtual:certificates'
import { certificateCatalog } from '../data/portfolio'

function humanizeFilename(file) {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function findMeta(file) {
  const lower = file.toLowerCase()
  return certificateCatalog.find((entry) =>
    entry.match.some((keyword) => lower.includes(keyword.toLowerCase())),
  )
}

/**
 * Resolves every image in public/certificates/ into display-ready cards.
 * New images appear automatically after refresh / rebuild.
 */
export function resolveCertificates() {
  return certificateFiles
    .map(({ file, src }) => {
      const meta = findMeta(file)
      return {
        id: file,
        image: src,
        title: meta?.title ?? humanizeFilename(file),
        issuer: meta?.issuer ?? 'Certificate',
        date: meta?.date ?? '',
        featured: Boolean(meta?.featured),
        order: meta?.order ?? 900,
      }
    })
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order
      return a.title.localeCompare(b.title)
    })
}

export function splitCertificates(certificates) {
  // order < 10 = primary gallery (shown first); featured flag controls badge only
  const primary = certificates.filter((c) => c.order < 10)
  const additional = certificates.filter((c) => c.order >= 10)
  return { featured: primary, additional }
}
