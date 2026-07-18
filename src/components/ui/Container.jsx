export default function Container({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:max-w-7xl ${className}`.trim()}>
      {children}
    </Tag>
  )
}
