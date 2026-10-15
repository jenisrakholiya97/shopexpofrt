import React from 'react'

interface VniLogoProps {
  className?: string
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export const VniLogo: React.FC<VniLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isLight = variant === 'light'

  const dimensions = {
    sm: {
      iconSize: 36,
      vniSize: '20px',
      vniLetterSpacing: '0.8px',
      barWidth: '14px',
      barHeight: '2px',
      subSize: '6.5px',
      subLetterSpacing: '2px',
      gap: '3px',
      containerGap: '10px',
    },
    md: {
      iconSize: 44,
      vniSize: '25px',
      vniLetterSpacing: '1px',
      barWidth: '18px',
      barHeight: '2.5px',
      subSize: '7.5px',
      subLetterSpacing: '2.5px',
      gap: '4px',
      containerGap: '12px',
    },
    lg: {
      iconSize: 56,
      vniSize: '32px',
      vniLetterSpacing: '1.5px',
      barWidth: '24px',
      barHeight: '3px',
      subSize: '9.5px',
      subLetterSpacing: '3.2px',
      gap: '5px',
      containerGap: '14px',
    },
  }[size]

  return (
    <div
      className={`vni-logo-wrapper ${isLight ? 'vni-logo-light' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dimensions.containerGap,
        textDecoration: 'none',
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* Exact SVG logo mark from provided design */}
      {isLight ? (
        <svg
          width={dimensions.iconSize}
          height={dimensions.iconSize}
          viewBox="0 0 120 120"
          role="img"
          aria-label="VNI logo mark, reversed"
          style={{ flexShrink: 0 }}
        >
          <circle cx="60" cy="60" r="58" fill="#FFFFFF" />
          <circle
            cx="60"
            cy="60"
            r="51"
            fill="none"
            stroke="#12355B"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M33 40 L60 88 L87 40"
            fill="none"
            stroke="#12355B"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 64 C47 54 49 37 60 27 C71 37 73 54 60 64 Z"
            fill="#3E9B4F"
          />
        </svg>
      ) : (
        <svg
          width={dimensions.iconSize}
          height={dimensions.iconSize}
          viewBox="0 0 120 120"
          role="img"
          aria-label="VNI logo mark"
          style={{ flexShrink: 0 }}
        >
          <circle cx="60" cy="60" r="58" fill="#12355B" />
          <circle
            cx="60"
            cy="60"
            r="51"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
          <path
            d="M33 40 L60 88 L87 40"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 64 C47 54 49 37 60 27 C71 37 73 54 60 64 Z"
            fill="#4FB05F"
          />
        </svg>
      )}

      {/* Typography: VNI + Green Accent Divider + EXPORT & IMPORT */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: dimensions.gap,
          lineHeight: 1,
        }}
      >
        <span
          className="vni-logo-title"
          style={{
            fontSize: dimensions.vniSize,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: dimensions.vniLetterSpacing,
            color: isLight ? '#FFFFFF' : '#12355B',
          }}
        >
          VNI
        </span>

        <span
          className="vni-logo-bar"
          style={{
            width: dimensions.barWidth,
            height: dimensions.barHeight,
            borderRadius: '2px',
            background: isLight ? '#6FCB7E' : '#4FB05F',
            display: 'block',
          }}
        />

        <span
          className="vni-logo-sub"
          style={{
            fontSize: dimensions.subSize,
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: dimensions.subLetterSpacing,
            color: isLight ? '#FFFFFF' : '#12355B',
            textTransform: 'uppercase',
          }}
        >
          EXPORT &amp; IMPORT
        </span>
      </div>
    </div>
  )
}
