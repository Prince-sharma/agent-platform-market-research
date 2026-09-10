import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { cn } from '@/lib/utils'

interface MarkdownProps {
  children: string
  className?: string
  /** Called with a wiki slug when an internal wiki link is clicked. */
  onWikiLink?: (slug: string) => void
}

/**
 * Renders markdown with GFM. Wiki-internal links are written as
 * [text](wiki:slug) in the source data and rendered as buttons that call
 * onWikiLink; external links open in a new tab.
 */
export function Markdown({ children, className, onWikiLink }: MarkdownProps) {
  return (
    <div className={cn('md-body', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            if (href?.startsWith('wiki:')) {
              const slug = href.slice(5)
              return (
                <button
                  type="button"
                  className="text-left font-medium text-primary underline underline-offset-4"
                  onClick={(e) => {
                    e.stopPropagation()
                    onWikiLink?.(slug)
                  }}
                >
                  {children}
                </button>
              )
            }
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            )
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
