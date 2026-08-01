/* @ds-bundle: {"format":4,"namespace":"LexiSnowDesignSystem_f12512","components":[{"name":"ArchFrame","sourcePath":"components/brand/ArchFrame.jsx"},{"name":"Illustration","sourcePath":"components/brand/Illustration.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"StripeRule","sourcePath":"components/brand/StripeRule.jsx"},{"name":"StripeSurface","sourcePath":"components/brand/StripeSurface.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/ArchFrame.jsx":"dca41cc5dc00","components/brand/Illustration.jsx":"dd495b700e10","components/brand/SectionHeading.jsx":"82247423f322","components/brand/StripeRule.jsx":"2ae915c1ce2e","components/brand/StripeSurface.jsx":"3d4014b663dd","components/core/Badge.jsx":"6f342a0ec105","components/core/Button.jsx":"624aa65e1dd5","components/core/Card.jsx":"3ea2881e900c","components/core/IconButton.jsx":"ac71c2d609f2","components/core/Tag.jsx":"198298f18129","components/feedback/Dialog.jsx":"9a788dae501d","components/feedback/Toast.jsx":"1ce794a0febc","components/feedback/Tooltip.jsx":"f4d5b2ba15f2","components/forms/Checkbox.jsx":"d0f0b751af8b","components/forms/Field.jsx":"0680270df654","components/forms/Input.jsx":"6e8250591e76","components/forms/Radio.jsx":"b7f116542c84","components/forms/Select.jsx":"697864249c8c","components/forms/Switch.jsx":"b791de03f917","components/forms/Textarea.jsx":"d96ddc537309","components/navigation/NavBar.jsx":"3901144e7f09","components/navigation/Tabs.jsx":"9d6874c945fb","ui_kits/wedding-site/BoothMarquee.jsx":"3f64d7192b58","ui_kits/wedding-site/Faq.jsx":"bcec009e9bb0","ui_kits/wedding-site/Footer.jsx":"76de7df0af11","ui_kits/wedding-site/Hero.jsx":"a657946c7c7d","ui_kits/wedding-site/Home.jsx":"bbcd1b4d64fd","ui_kits/wedding-site/KeepInTouch.jsx":"bdeb0f4086bf","ui_kits/wedding-site/Photos.jsx":"793f5979cda7","ui_kits/wedding-site/Shared.jsx":"334b82088b11","ui_kits/wedding-site/Story.jsx":"015cc53c8ed7","ui_kits/wedding-site/StoryCta.jsx":"becbb52d4efa","ui_kits/wedding-site/TheDay.jsx":"53589470ead8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LexiSnowDesignSystem_f12512 = window.LexiSnowDesignSystem_f12512 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ArchFrame.jsx
try { (() => {
function ArchFrame({
  src,
  alt = '',
  ratio = '3 / 4',
  outline = true,
  tone = 'cream',
  children,
  style,
  ...rest
}) {
  const s = Object.assign({
    aspectRatio: ratio,
    borderRadius: 'var(--radius-arch)',
    overflow: 'hidden',
    background: tone === 'green' ? 'var(--garden-600)' : tone === 'sky' ? 'var(--sky-100)' : 'var(--cream-200)',
    border: outline ? 'var(--border-ink)' : 'none',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }, style);
  return React.createElement('div', Object.assign({
    style: s
  }, rest), src ? React.createElement('img', {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : children);
}
Object.assign(__ds_scope, { ArchFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ArchFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/Illustration.jsx
try { (() => {
function Illustration({
  name,
  src,
  basePath = 'assets/illustrations',
  size = 160,
  rotate = 0,
  flip = false,
  sway = false,
  style,
  ...rest
}) {
  const url = src || basePath.replace(/\/$/, '') + '/' + name + '.png';
  const id = React.useRef('sway' + Math.random().toString(36).slice(2, 8)).current;
  const s = Object.assign({
    width: typeof size === 'number' ? size + 'px' : size,
    height: 'auto',
    display: 'block',
    transform: 'rotate(' + rotate + 'deg)' + (flip ? ' scaleX(-1)' : ''),
    transformOrigin: 'center',
    pointerEvents: 'none'
  }, sway ? {
    animation: id + ' 6s ease-in-out infinite'
  } : {}, style);
  return React.createElement(React.Fragment, null, sway ? React.createElement('style', null, '@keyframes ' + id + '{0%,100%{transform:rotate(' + (rotate - 1.5) + 'deg)' + (flip ? ' scaleX(-1)' : '') + '}50%{transform:rotate(' + (rotate + 1.5) + 'deg)' + (flip ? ' scaleX(-1)' : '') + '}}@media (prefers-reduced-motion:reduce){*{animation:none!important}}') : null, React.createElement('img', Object.assign({
    src: url,
    alt: '',
    'aria-hidden': true,
    style: s
  }, rest)));
}
Object.assign(__ds_scope, { Illustration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Illustration.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  script,
  align = 'left',
  tone = 'ink',
  stripe = false,
  style
}) {
  const color = tone === 'light' ? 'var(--cream-100)' : tone === 'orange' || tone === 'terracotta' ? 'var(--miami-orange)' : 'var(--text-display)';
  return React.createElement('div', {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align
    }, style)
  }, eyebrow ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: tone === 'light' ? 'var(--butter-300)' : 'var(--garden-600)'
    }
  }, eyebrow) : null, title ? React.createElement('h2', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      color: color
    }
  }, title) : null, script ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '2rem',
      lineHeight: 1.1,
      color: tone === 'light' ? 'var(--bougain-400)' : 'var(--bougain-600)'
    }
  }, script) : null, stripe ? React.createElement('div', {
    'aria-hidden': true,
    style: {
      height: '10px',
      width: '160px',
      background: 'var(--stripe-pink)',
      borderRadius: 'var(--radius-xs)',
      marginTop: '6px'
    }
  }) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/StripeRule.jsx
try { (() => {
function StripeRule({
  variant = 'cabana',
  height = 14,
  width = 14,
  vertical = false,
  style,
  ...rest
}) {
  const bg = variant === 'awning' ? 'var(--stripe-awning)' : 'var(--stripe-pink)';
  const s = Object.assign({
    background: bg,
    borderRadius: 'var(--radius-xs)'
  }, vertical ? {
    width: width + 'px',
    height: '100%',
    backgroundImage: bg.replace('90deg', '180deg')
  } : {
    height: height + 'px',
    width: '100%'
  }, style);
  return React.createElement('div', Object.assign({
    'aria-hidden': true,
    style: s
  }, rest));
}
Object.assign(__ds_scope, { StripeRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StripeRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/StripeSurface.jsx
try { (() => {
const FILLS = {
  sage: 'var(--stripe-soft-sage)',
  butter: 'var(--stripe-soft-butter)',
  sky: 'var(--stripe-soft-sky)',
  pink: 'var(--stripe-soft-pink)',
  green: 'var(--stripe-soft-green)'
};
function StripeSurface({
  tone = 'sage',
  direction = 'vertical',
  scale = 1,
  rounded = false,
  as = 'div',
  children,
  style,
  ...rest
}) {
  const bg = FILLS[tone] || FILLS.sage;
  const angle = direction === 'horizontal' ? '180deg' : direction === 'diagonal' ? '45deg' : '90deg';
  const s = Object.assign({
    backgroundImage: bg.replace('90deg', angle),
    backgroundSize: 68 * scale + 'px ' + 68 * scale + 'px',
    position: 'relative'
  }, rounded ? {
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden'
  } : {}, style);
  return React.createElement(as, Object.assign({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { StripeSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StripeSurface.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'terracotta',
  children,
  style,
  ...rest
}) {
  const tones = {
    terracotta: ['var(--terracotta-100)', 'var(--terracotta-600)'],
    garden: ['var(--sage-100)', 'var(--garden-700)'],
    butter: ['var(--butter-100)', 'var(--terracotta-600)'],
    sky: ['var(--sky-100)', 'var(--sky-600)'],
    pink: ['var(--bougain-200)', 'var(--bougain-600)'],
    ink: ['var(--ink-800)', 'var(--cream-100)']
  };
  const t = tones[tone] || tones.terracotta;
  return React.createElement('span', Object.assign({
    style: Object.assign({
      display: 'inline-block',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      background: t[0],
      color: t[1],
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.2
    }, style)
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-display)',
  letterSpacing: '0.06em',
  border: '1.5px solid transparent',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  textDecoration: 'none',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)'
};
const sizes = {
  sm: {
    fontSize: '14px',
    padding: '10px 18px'
  },
  md: {
    fontSize: '17px',
    padding: '14px 26px'
  },
  lg: {
    fontSize: '21px',
    padding: '18px 36px'
  }
};
const variants = {
  primary: {
    background: 'var(--miami-orange)',
    color: 'var(--ink-900)',
    boxShadow: 'var(--shadow-card)'
  },
  secondary: {
    background: 'var(--villa-green)',
    color: 'var(--villa-cream)',
    boxShadow: 'var(--shadow-card)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-800)',
    borderColor: 'var(--ink-800)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--garden-600)'
  },
  butter: {
    background: 'var(--butter-yellow)',
    color: 'var(--ink-900)',
    boxShadow: 'var(--shadow-card)'
  }
};
const hovers = {
  primary: {
    background: 'var(--orange-600)',
    color: 'var(--cream-50)'
  },
  secondary: {
    background: 'var(--garden-700)'
  },
  outline: {
    background: 'var(--ink-800)',
    color: 'var(--cream-50)'
  },
  ghost: {
    background: 'var(--sage-100)',
    color: 'var(--terracotta-500)'
  },
  butter: {
    background: 'var(--butter-600)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  href,
  iconLeft,
  iconRight,
  children,
  style,
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = Object.assign({}, base, sizes[size] || sizes.md, variants[variant] || variants.primary, h && !disabled ? hovers[variant] || {} : {}, h && !disabled && variant !== 'ghost' ? {
    boxShadow: 'var(--shadow-lift)',
    transform: 'translateY(-1px)'
  } : {}, p && !disabled ? {
    transform: 'translateY(1px)',
    boxShadow: 'var(--shadow-press)'
  } : {}, disabled ? {
    opacity: .45,
    cursor: 'not-allowed',
    boxShadow: 'none'
  } : {}, fullWidth ? {
    width: '100%'
  } : {}, style);
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, Object.assign({
    style: s,
    href: href,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = 'default',
  interactive = false,
  tone = 'cream',
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const tones = {
    cream: {
      background: 'var(--surface-card)'
    },
    sage: {
      background: 'var(--sage-100)'
    },
    butter: {
      background: 'var(--butter-100)'
    },
    sky: {
      background: 'var(--sky-100)'
    },
    green: {
      background: 'var(--garden-600)',
      color: 'var(--cream-100)'
    }
  };
  const s = Object.assign({
    borderRadius: 'var(--radius-md)',
    padding: padding,
    position: 'relative',
    transition: 'transform var(--dur-med) var(--ease-soft), box-shadow var(--dur-med) var(--ease-soft)'
  }, tones[tone] || tones.cream, variant === 'feature' ? {
    border: 'var(--border-ink)',
    boxShadow: 'none'
  } : {
    border: 'var(--border-hair)',
    boxShadow: 'var(--shadow-card)'
  }, variant === 'arch' ? {
    border: 'var(--border-ink)',
    boxShadow: 'none',
    borderRadius: 'var(--radius-arch)',
    paddingTop: 'var(--space-8)'
  } : {}, interactive ? {
    cursor: 'pointer'
  } : {}, interactive && h ? {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lift)'
  } : {}, style);
  return React.createElement('div', Object.assign({
    style: s,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  label,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  children,
  style,
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const d = sizes[size] || 40;
  const fills = {
    ghost: {
      background: 'transparent',
      color: 'var(--ink-800)'
    },
    solid: {
      background: 'var(--garden-600)',
      color: 'var(--cream-100)'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--ink-800)',
      border: '1.5px solid var(--ink-800)'
    }
  };
  const s = Object.assign({
    width: d,
    height: d,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid transparent',
    cursor: 'pointer',
    padding: 0,
    transition: 'background var(--dur-fast) var(--ease-soft)'
  }, fills[variant], h && !disabled ? {
    background: variant === 'solid' ? 'var(--garden-700)' : 'var(--sage-100)'
  } : {}, disabled ? {
    opacity: .45,
    cursor: 'not-allowed'
  } : {}, style);
  return React.createElement('button', Object.assign({
    'aria-label': label,
    style: s,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onSelect,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const s = Object.assign({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-small)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '8px 16px',
    borderRadius: 'var(--radius-pill)',
    cursor: onSelect ? 'pointer' : 'default',
    border: '1.5px solid var(--ink-800)',
    background: selected ? 'var(--ink-800)' : 'transparent',
    color: selected ? 'var(--cream-100)' : 'var(--ink-800)',
    transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)'
  }, h && !selected ? {
    background: 'var(--cream-200)'
  } : {}, style);
  return React.createElement('button', Object.assign({
    type: 'button',
    style: s,
    'aria-pressed': selected,
    onClick: onSelect,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  script,
  onClose,
  footer,
  width = 520,
  children
}) {
  if (!open) return null;
  return React.createElement('div', {
    role: 'dialog',
    'aria-modal': 'true',
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'rgba(34,31,27,.42)'
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: function (e) {
      e.stopPropagation();
    },
    style: {
      width: '100%',
      maxWidth: width + 'px',
      background: 'var(--surface-card)',
      border: 'var(--border-ink)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lift)',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    'aria-hidden': true,
    style: {
      height: '12px',
      background: 'var(--stripe-pink)'
    }
  }), React.createElement('div', {
    style: {
      padding: 'var(--space-6)'
    }
  }, title ? React.createElement('h3', {
    style: {
      margin: '0 0 4px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-title)',
      lineHeight: 'var(--leading-heading)',
      color: 'var(--ink-800)'
    }
  }, title) : null, script ? React.createElement('p', {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-script)',
      fontSize: '1.75rem',
      lineHeight: 1.1,
      color: 'var(--bougain-600)'
    }
  }, script) : null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      lineHeight: 'var(--leading-body)'
    }
  }, children), footer ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-6)'
    }
  }, footer) : null)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'garden',
  visible = true,
  onDismiss,
  style
}) {
  if (!visible) return null;
  const tones = {
    garden: ['var(--garden-600)', 'var(--cream-100)'],
    terracotta: ['var(--terracotta-500)', 'var(--cream-50)'],
    butter: ['var(--butter-500)', 'var(--ink-800)']
  };
  const t = tones[tone] || tones.garden;
  return React.createElement('div', {
    role: 'status',
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      background: t[0],
      color: t[1],
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      padding: '14px 20px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lift)'
    }, style)
  }, React.createElement('span', null, message), onDismiss ? React.createElement('button', {
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      background: 'transparent',
      border: 'none',
      color: 'inherit',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, 'Close') : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = 'top',
  children,
  style
}) {
  const [v, setV] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return React.createElement('span', {
    style: Object.assign({
      position: 'relative',
      display: 'inline-flex'
    }, style),
    onMouseEnter: () => setV(true),
    onMouseLeave: () => setV(false),
    onFocus: () => setV(true),
    onBlur: () => setV(false)
  }, children, v ? React.createElement('span', {
    role: 'tooltip',
    style: Object.assign({
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      background: 'var(--ink-800)',
      color: 'var(--cream-100)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '6px 10px',
      borderRadius: 'var(--radius-xs)',
      zIndex: 40
    }, pos)
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return React.createElement('label', {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)'
    }, style)
  }, React.createElement('input', {
    type: 'checkbox',
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 22,
      height: 22,
      flex: '0 0 22px',
      border: '1.5px solid var(--ink-800)',
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--garden-600)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-soft)'
    }
  }, checked ? React.createElement('span', {
    style: {
      width: 11,
      height: 6,
      borderLeft: '2px solid var(--cream-100)',
      borderBottom: '2px solid var(--cream-100)',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return React.createElement('div', {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }, style)
  }, label ? React.createElement('label', {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--ink-600)'
    }
  }, label) : null, children, error ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontSize: 'var(--text-small)',
      color: 'var(--terracotta-600)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontSize: 'var(--text-small)',
      color: 'var(--ink-400)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const s = Object.assign({
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-md)',
    color: 'var(--ink-800)',
    background: 'var(--surface-card)',
    border: '1.5px solid var(--ink-200)',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color var(--dur-fast) var(--ease-soft)'
  }, f ? {
    borderColor: 'var(--garden-600)'
  } : {}, invalid ? {
    borderColor: 'var(--terracotta-500)'
  } : {}, disabled ? {
    opacity: .45,
    cursor: 'not-allowed'
  } : {}, style);
  return React.createElement('input', Object.assign({
    style: s,
    disabled: disabled,
    'aria-invalid': invalid || undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style
}) {
  return React.createElement('label', {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)'
    }, style)
  }, React.createElement('input', {
    type: 'radio',
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 22,
      height: 22,
      flex: '0 0 22px',
      border: '1.5px solid var(--ink-800)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('span', {
    style: {
      width: 12,
      height: 12,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--terracotta-500)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-soft)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  disabled = false,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const s = Object.assign({
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-md)',
    color: 'var(--ink-800)',
    background: 'var(--surface-card)',
    border: '1.5px solid var(--ink-200)',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color var(--dur-fast) var(--ease-soft)'
  }, {
    appearance: 'none',
    backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--ink-600) 50%),linear-gradient(135deg,var(--ink-600) 50%,transparent 50%)',
    backgroundPosition: 'calc(100% - 20px) 50%,calc(100% - 14px) 50%',
    backgroundSize: '6px 6px,6px 6px',
    backgroundRepeat: 'no-repeat',
    paddingRight: '40px',
    cursor: 'pointer'
  }, f ? {
    borderColor: 'var(--garden-600)'
  } : {}, disabled ? {
    opacity: .45
  } : {}, style);
  return React.createElement('select', Object.assign({
    style: s,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest), options.map(function (o) {
    var v = typeof o === 'string' ? o : o.value;
    var l = typeof o === 'string' ? o : o.label;
    return React.createElement('option', {
      key: v,
      value: v
    }, l);
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return React.createElement('label', {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)'
    }, style)
  }, React.createElement('input', {
    type: 'checkbox',
    role: 'switch',
    checked: checked,
    disabled: disabled,
    onChange: function (e) {
      if (onChange) onChange(e.target.checked, e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 48,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--ink-800)',
      background: checked ? 'var(--garden-600)' : 'var(--cream-200)',
      position: 'relative',
      transition: 'background var(--dur-med) var(--ease-soft)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 22 : 2,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--cream-50)',
      boxShadow: 'var(--shadow-card)',
      transition: 'left var(--dur-med) var(--ease-spring)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  rows = 4,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const s = Object.assign({
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-md)',
    color: 'var(--ink-800)',
    background: 'var(--surface-card)',
    border: '1.5px solid var(--ink-200)',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color var(--dur-fast) var(--ease-soft)'
  }, {
    resize: 'vertical',
    lineHeight: 'var(--leading-body)'
  }, f ? {
    borderColor: 'var(--garden-600)'
  } : {}, invalid ? {
    borderColor: 'var(--terracotta-500)'
  } : {}, disabled ? {
    opacity: .45
  } : {}, style);
  return React.createElement('textarea', Object.assign({
    rows: rows,
    style: s,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  brand = 'LEXI & SNOW',
  script = '4 · 23 · 27',
  items = [],
  active,
  onNavigate,
  action,
  sticky = true,
  style
}) {
  return React.createElement('header', {
    style: Object.assign({
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 50,
      background: 'rgba(251,243,228,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-hairline)'
    }, style)
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--gutter-page)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, React.createElement('a', {
    href: '#',
    onClick: function (e) {
      e.preventDefault();
      if (onNavigate) onNavigate(items.length ? typeof items[0] === 'string' ? items[0] : items[0].value : '');
    },
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      textDecoration: 'none'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      letterSpacing: '0.05em',
      color: 'var(--accent-primary)',
      whiteSpace: 'nowrap'
    }
  }, brand), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '1.25rem',
      color: 'var(--villa-green)',
      whiteSpace: 'nowrap'
    }
  }, script)), React.createElement('nav', {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'nowrap'
    }
  }, items.map(function (it) {
    var v = typeof it === 'string' ? it : it.value;
    var l = typeof it === 'string' ? it : it.label;
    var on = v === active;
    return React.createElement('a', {
      key: v,
      href: '#' + v,
      onClick: function (e) {
        e.preventDefault();
        if (onNavigate) onNavigate(v);
      },
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '0.9375rem',
        letterSpacing: 'var(--tracking-caps)',
        textDecoration: 'none',
        color: on ? 'var(--accent-primary)' : 'var(--ink-800)',
        borderBottom: on ? '2px solid var(--accent-primary)' : '2px solid transparent',
        paddingBottom: '2px',
        whiteSpace: 'nowrap'
      }
    }, l);
  }), action)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  align = 'left',
  style
}) {
  return React.createElement('div', {
    role: 'tablist',
    style: Object.assign({
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }, style)
  }, items.map(function (it) {
    var v = typeof it === 'string' ? it : it.value;
    var l = typeof it === 'string' ? it : it.label;
    var on = v === value;
    return React.createElement('button', {
      key: v,
      role: 'tab',
      'aria-selected': on,
      onClick: function () {
        if (onChange) onChange(v);
      },
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        fontFamily: 'var(--font-display)',
        fontSize: '1.0625rem',
        letterSpacing: '0.08em',
        color: on ? 'var(--accent-primary)' : 'var(--ink-600)',
        borderBottom: on ? '3px solid var(--accent-primary)' : '3px solid transparent',
        marginBottom: '-1px',
        transition: 'color var(--dur-fast) var(--ease-soft)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/BoothMarquee.jsx
try { (() => {
const FRAMES = [1, 2, 3, 4, 5, 6, 7];
function BoothMarquee() {
  const row = FRAMES.concat(FRAMES);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      background: 'var(--villa-green)',
      padding: 'var(--space-7) 0',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes boothScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.booth-track{animation:none!important}}'), /*#__PURE__*/React.createElement("div", {
    className: "booth-track",
    style: {
      display: 'flex',
      gap: 0,
      width: 'max-content',
      animation: 'boothScroll 60s linear infinite'
    }
  }, row.concat(row).map((n, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: PHOTO + '/booth-' + n + '.png',
    alt: "",
    style: {
      display: 'block',
      height: 200,
      width: 'auto',
      flex: '0 0 auto'
    }
  }))));
}
window.BoothMarquee = BoothMarquee;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/BoothMarquee.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Faq.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Illustration
} = window.LexiSnowDesignSystem_f12512;
const QA = [['DO I NEED TO RSVP NOW?', 'Nope. The card in your hands is the save-the-date. The formal invitation with the full schedule, meal choices and RSVP follows closer to the day.'], ['HOW DO I GET THERE?', 'Miami International (MIA) is about 20 minutes from the Grove. Fort Lauderdale (FLL) is often cheaper and roughly an hour out, worth a look if you\u2019re coming from the Northeast.'], ['HOW DO I GET AROUND?', "Rideshare is easy and everywhere in Miami, so take one. You're going to want a drink, and nobody should be finding their car at midnight."], ["WHAT'S THE WEATHER LIKE IN APRIL?", 'Sunny, mid 80s, breezy by dinner. Perfect, basically.'], ['IS THERE AN AFTERPARTY?', "The venue turns the lights on at 11:00 pm, and we have plans. We're just not telling you yet. Wear shoes you can keep going in."]];
const HOTELS = [['MAYFAIR HOUSE HOTEL & GARDEN', 'garden', 'our pick', 'Boutique and beautifully done, so it looks like the wedding. In the heart of the Grove, across from CocoWalk.', 'https://www.mayfairhousehotel.com'], ['COURTYARD BY MARRIOTT COCONUT GROVE', 'sky', 'the easy one', 'Kinder on the wallet and still walkable to the Grove restaurants and shops.', 'https://www.marriott.com']];
function Faq() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "faq",
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(ScriptHeading, {
    script: "Good questions",
    eyebrow: "Most of you are flying in",
    title: "EVERYTHING WE KNOW SO FAR"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lede)',
      marginTop: 18
    }
  }, "We're still working out the final details. More will land here when the formal invitations go out.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: 'var(--space-7) auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, QA.map(([q, a]) => /*#__PURE__*/React.createElement(Card, {
    key: q
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      color: 'var(--villa-green)'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-600)',
      margin: '8px 0 0'
    }
  }, a))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      color: 'var(--villa-green)'
    }
  }, "WHERE SHOULD WE STAY?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-600)',
      margin: '8px 0 0'
    }
  }, "Coconut Grove, if you can: walkable, leafy, minutes from the venue. Two we'd pick, both about five minutes from Villa Woodbine."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-5)'
    }
  }, HOTELS.map(([n, tone, tag, desc, url]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      border: 'var(--border-ink)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.1875rem',
      color: 'var(--villa-green)',
      marginTop: 4
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontWeight: 600,
      fontSize: '1.25rem',
      color: 'var(--olive-600)',
      lineHeight: 1.2
    }
  }, "5 minutes from Villa Woodbine"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink-600)',
      margin: '2px 0 12px'
    }
  }, desc), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    href: url,
    target: "_blank",
    rel: "noopener",
    style: {
      marginTop: 'auto'
    }
  }, "HAVE A LOOK")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: "champagne-bottle",
    basePath: ILL,
    size: 110,
    rotate: -5
  })));
}
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Footer.jsx
try { (() => {
const {
  Illustration
} = window.LexiSnowDesignSystem_f12512;
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--villa-green)',
      color: 'var(--villa-cream)',
      textAlign: 'center',
      padding: 'var(--space-9) var(--gutter-page) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display-outline)',
      fontSize: 'clamp(2.75rem,8.5vw,6.5rem)',
      lineHeight: 1,
      letterSpacing: '.02em'
    }
  }, "SEE YOU IN MIAMI"), /*#__PURE__*/React.createElement(Illustration, {
    name: "monogram-bow",
    basePath: ILL,
    size: 110,
    rotate: 0,
    style: {
      margin: '22px auto 0',
      filter: 'invert(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(2.25rem,5vw,3.5rem)',
      lineHeight: 1.05,
      marginTop: 14
    }
  }, "Matthew & Alexis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1rem',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--garden-200)',
      marginTop: 12
    }
  }, "APRIL 23, 2027 \xB7 VILLA WOODBINE \xB7 COCONUT GROVE, MIAMI"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 'var(--space-6)'
    }
  }, [['day', 'The day'], ['faq', 'Good questions'], ['photos', 'Photos'], ['keep', 'Get updates']].map(([v, l]) => /*#__PURE__*/React.createElement("a", {
    key: v,
    href: '#' + v,
    onClick: e => {
      e.preventDefault();
      go(v);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      color: 'var(--villa-cream)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "story.html",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      color: 'var(--villa-cream)',
      textDecoration: 'none'
    }
  }, "Our story")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--garden-200)',
      marginTop: 'var(--space-7)'
    }
  }, "Registry & RSVP coming with the invitation \xB7 #MatthewAndAlexis"));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Hero.jsx
try { (() => {
const {
  Button,
  Illustration
} = window.LexiSnowDesignSystem_f12512;
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    style: {
      position: 'relative',
      background: 'var(--cream-100)',
      padding: 'var(--space-8) var(--gutter-page) var(--space-7)',
      overflow: 'hidden',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: "disco-ball",
    basePath: ILL,
    size: 104,
    rotate: 4,
    sway: true,
    style: {
      position: 'absolute',
      top: 8,
      left: '6%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--olive)'
    }
  }, "You found us. Start planning."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(2.25rem,4.6vw,3.25rem)',
      color: 'var(--bougainvillea)',
      lineHeight: 1.05,
      marginTop: 6
    }
  }, "We're getting married"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.75rem,7vw,5.75rem)',
      lineHeight: 'var(--leading-tight)',
      margin: '10px 0 0',
      color: 'var(--villa-green)'
    }
  }, "MATTHEW ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--miami-orange)'
    }
  }, "&"), " ALEXIS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontWeight: 600,
      fontSize: 'clamp(1.875rem,3vw,2.375rem)',
      color: 'var(--orange-600)',
      marginTop: 8
    }
  }, "or Lexi & Snow, if you know us")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: 'var(--space-7) auto 0'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "venice-bridge",
    alt: "Matthew and Alexis on a bridge over a Venice canal",
    ratio: "16 / 10"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1rem,1.8vw,1.375rem)',
      letterSpacing: 'var(--tracking-caps)',
      marginTop: 'var(--space-6)',
      color: 'var(--olive)'
    }
  }, "FRIDAY \xB7 APRIL 23, 2027 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--butter-600)'
    }
  }, "\xB7"), " VILLA WOODBINE ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--butter-600)'
    }
  }, "\xB7"), " COCONUT GROVE, MIAMI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('day')
  }, "WHAT WE KNOW SO FAR"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('keep')
  }, "GET UPDATES")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Home.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Illustration,
  StripeRule
} = window.LexiSnowDesignSystem_f12512;
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--cream-100)',
      padding: 'var(--space-9) var(--gutter-page) var(--space-8)',
      overflow: 'hidden',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: "cupid",
    basePath: ILL,
    size: 130,
    rotate: -8,
    style: {
      position: 'absolute',
      top: 24,
      right: '7%'
    }
  }), /*#__PURE__*/React.createElement(Illustration, {
    name: "disco-ball",
    basePath: ILL,
    size: 110,
    rotate: 4,
    sway: true,
    style: {
      position: 'absolute',
      top: 0,
      left: '6%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--olive)'
    }
  }, "You found us"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(2.5rem,5.5vw,4rem)',
      color: 'var(--bougainvillea)',
      lineHeight: 1.05,
      marginTop: 8
    }
  }, "We're getting married"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(3rem,8vw,6.5rem)',
      lineHeight: 'var(--leading-tight)',
      margin: '12px 0 0',
      color: 'var(--villa-green)'
    }
  }, "MATTHEW", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--miami-orange)'
    }
  }, "&"), " ALEXIS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script-slanted)',
      fontSize: 'clamp(1.3rem,2.4vw,1.9rem)',
      color: 'var(--ink-600)',
      marginTop: 10
    }
  }, "or Lexi & Snow, if you know us"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.0625rem',
      letterSpacing: 'var(--tracking-caps)',
      marginTop: 20,
      color: 'var(--villa-green)'
    }
  }, "APRIL 23, 2027 \xB7 VILLA WOODBINE \xB7 COCONUT GROVE, MIAMI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('keep')
  }, "SAVE THE DATE"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('day')
  }, "WHAT WE KNOW SO FAR")), /*#__PURE__*/React.createElement(StripeRule, {
    height: 12,
    style: {
      maxWidth: 240,
      margin: '32px auto 0'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScriptHeading, {
    align: "left",
    script: "Our story",
    eyebrow: "From fast friends to forever",
    title: "IT STARTED IN MIAMI"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '62ch',
      fontSize: 'var(--text-body-lg)',
      marginTop: 18
    }
  }, "We met completely by chance. Or fate, depending on who's telling it. There was a street, a birthday, and a \"shut up\" that turned into a year of friendship before it turned into this."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '62ch',
      fontSize: 'var(--text-body-lg)'
    }
  }, "Today we call Miami home and run our own animation studio together. If you know us, you know we're a good time."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('story')
  }, "READ THE LONG VERSION")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "venice-bridge",
    alt: "Matthew kissing Alexis in a gondola in Venice",
    ratio: "4 / 3",
    style: {
      width: 420
    }
  }), /*#__PURE__*/React.createElement(Illustration, {
    name: "record-player",
    basePath: ILL,
    size: 130,
    rotate: 5
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "green"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ScriptHeading, {
    align: "left",
    tone: "light",
    script: "The day",
    eyebrow: "Friday \xB7 April 23, 2027",
    title: "VILLA WOODBINE, COCONUT GROVE"
  }), /*#__PURE__*/React.createElement(Illustration, {
    name: "champagne-tower",
    basePath: ILL,
    size: 120,
    rotate: -4,
    style: {
      filter: 'invert(1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, [['THE PLACE', 'garden', 'Villa Woodbine', '2167 S Bayshore Dr', 'Coconut Grove, Miami FL', 'cake-flowers'], ['THE TIMING', 'butter', 'Doors at 5:00 pm', 'Ceremony at 5:30 sharp', "We'll dance until 11", 'coupe-pair'], ['THE DRESS CODE', 'pink', 'Garden party formal', 'Be as extra as you want', "Dress light. It's warm, but lovely", 'tablescape']].map(([k, tone, t, script, note, ill]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    interactive: true,
    tone: "cream",
    onClick: () => go('day'),
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      marginTop: 12,
      color: 'var(--villa-green)'
    }
  }, t.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 26,
      color: 'var(--bougainvillea)',
      lineHeight: 1.15
    }
  }, script), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)',
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--ink-600)'
    }
  }, note), /*#__PURE__*/React.createElement(Illustration, {
    name: ill,
    basePath: ILL,
    size: 84,
    rotate: -3,
    style: {
      margin: '12px auto 0'
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, [['GETTING HERE', 'Fly into MIA, twenty minutes from the Grove. FLL is often cheaper if you\u2019re coming from the Northeast.', 'travel', 'TRAVEL', 'cream'], ['GOOD QUESTIONS', 'Plus-ones, kids, April weather, the afterparty we\u2019re not telling you about yet.', 'faq', 'THE FAQ', 'butter'], ['SAVE THE DATE', 'No RSVP yet. Leave an email and we\u2019ll write when the invitation goes out.', 'keep', 'KEEP IN TOUCH', 'sky']].map(([k, c, to, btn, tone]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    variant: "feature",
    tone: tone
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.75rem',
      color: 'var(--villa-green)'
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-600)'
    }
  }, c), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    onClick: () => go(to)
  }, btn))))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/KeepInTouch.jsx
try { (() => {
const NSKeep = window.LexiSnowDesignSystem_f12512;
const StripeSurfaceKeep = NSKeep.StripeSurface || function ({
  tone,
  direction,
  scale,
  rounded,
  as = 'div',
  children,
  style,
  ...p
}) {
  const F = {
    sage: 'var(--stripe-soft-sage)',
    butter: 'var(--stripe-soft-butter)',
    sky: 'var(--stripe-soft-sky)',
    pink: 'var(--stripe-soft-pink)',
    green: 'var(--stripe-soft-green)'
  };
  return React.createElement(as, {
    style: {
      backgroundImage: F[tone] || F.sage,
      backgroundSize: '68px 68px',
      position: 'relative',
      ...(rounded ? {
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden'
      } : {}),
      ...style
    },
    ...p
  }, children);
};
const {
  Button,
  Card,
  Field,
  Input,
  Dialog,
  StripeRule,
  Illustration
} = NSKeep;
function KeepInTouch() {
  const [name, setName] = React.useState('');
  const [err, setErr] = React.useState('');
  const [open, setOpen] = React.useState(false);
  function send() {
    if (!name.trim()) {
      setErr('We need a name to put on the list.');
      return;
    }
    setErr('');
    setOpen(true);
  }
  return /*#__PURE__*/React.createElement(StripeSurfaceKeep, {
    as: "section",
    tone: "butter",
    id: "keep",
    style: {
      padding: 'var(--space-9) var(--gutter-page)',
      scrollMarginTop: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(ScriptHeading, {
    script: "Keep in touch",
    eyebrow: "No RSVP needed yet",
    title: "WE'LL EMAIL YOU WHEN THE INVITATION GOES OUT"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lede)',
      marginTop: 20
    }
  }, "You've got the card, so we've got your address, and no RSVP is needed yet. Most of you are flying in, so leave an email and we'll write as we lock things in: room block, the formal invitation, the parts we haven't figured out. Tell us the one song that will get you on the dance floor while you're here.")), /*#__PURE__*/React.createElement(Card, {
    variant: "feature",
    style: {
      maxWidth: 760,
      margin: 'var(--space-7) auto 0',
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StripeRule, {
    height: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)',
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    htmlFor: "kn",
    error: err
  }, /*#__PURE__*/React.createElement(Input, {
    id: "kn",
    invalid: !!err,
    value: name,
    placeholder: "Jamie Rivera",
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "ke"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ke",
    type: "email",
    placeholder: "jamie@email.com"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "One song that gets you dancing",
    htmlFor: "ks",
    hint: "We're building the playlist early. No skips allowed."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ks",
    placeholder: "Artist / Song"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: send
  }, "KEEP ME POSTED")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: "couple-on-cake",
    basePath: ILL,
    size: 140,
    rotate: -3
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "YOU'RE ON THE LIST",
    script: "see you in the garden",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "butter",
      onClick: () => setOpen(false)
    }, "LOVELY")
  }, "Thanks, ", name || 'friend', ". We'll write when the invitation goes out. Your song is going straight on the playlist.")));
}
window.KeepInTouch = KeepInTouch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/KeepInTouch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Photos.jsx
try { (() => {
function Photos() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "photos",
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(ScriptHeading, {
    script: "Us, lately",
    eyebrow: "A few favorites",
    title: "PHOTOS"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "the-proposal",
    alt: "Matthew kissing Alexis in a gondola in Venice",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement(Photo, {
    name: "terrace",
    alt: "Alexis and Matthew on a terrace in Tuscany",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement(Photo, {
    name: "dancing",
    alt: "Alexis and Matthew out dancing",
    ratio: "4 / 5"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(1.5rem,2.6vw,2rem)',
      color: 'var(--olive)',
      marginTop: 'var(--space-6)'
    }
  }, "Venice, Tuscany, and a night we don't fully remember."));
}
window.Photos = Photos;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Photos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Shared.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Illustration,
  ArchFrame,
  StripeRule
} = window.LexiSnowDesignSystem_f12512;
const ILL = '../../assets/illustrations';
const PHOTO = '../../assets/photos';
function Section({
  id,
  tone = 'cream',
  children,
  style
}) {
  const bg = {
    cream: 'var(--cream-100)',
    card: 'var(--cream-50)',
    green: 'var(--villa-green)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": id,
    style: {
      background: bg,
      padding: 'var(--space-9) var(--gutter-page)',
      position: 'relative',
      overflow: 'hidden',
      scrollMarginTop: 70,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
function ScriptHeading({
  script,
  eyebrow,
  title,
  tone = 'ink',
  align = 'center',
  style
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(2.75rem,6vw,4.5rem)',
      lineHeight: 1.02,
      color: light ? 'var(--bougain-400)' : 'var(--bougainvillea)'
    }
  }, script), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: light ? 'var(--butter-300)' : 'var(--olive)',
      marginTop: 6
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--leading-display)',
      color: light ? 'var(--villa-cream)' : 'var(--villa-green)'
    }
  }, title));
}
function Photo({
  name,
  alt,
  ratio = '3 / 4',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: 'var(--border-hair)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTO + '/' + name + '.jpg',
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }));
}
function PhotoSlot({
  label,
  ratio = '3 / 4',
  style
}) {
  return /*#__PURE__*/React.createElement(ArchFrame, {
    tone: "cream",
    ratio: ratio,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '0 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, "Photo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 26,
      color: 'var(--ink-400)',
      lineHeight: 1.15,
      marginTop: 4
    }
  }, label)));
}
Object.assign(window, {
  Section,
  ScriptHeading,
  Photo,
  PhotoSlot,
  ILL,
  PHOTO
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Story.jsx
try { (() => {
function Story() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "story",
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "gondola",
    alt: "Matthew and Alexis on a Venice canal ledge, rose petals at their feet, ring in the air",
    ratio: "2 / 3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '58ch'
    }
  }, /*#__PURE__*/React.createElement(ScriptHeading, {
    align: "left",
    script: "Our story",
    eyebrow: "It started in Miami",
    title: "FROM FAST FRIENDS TO FOREVER"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-body-lg)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We met completely by chance. Or fate, depending on who's telling it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We were both on vacation when we ran into each other on the street. Lexi mentioned it was her birthday, Snow looked at her and said, \"Shut up.\" Without missing a beat, she replied, \"No, you shut up.\" It was the start of an unexpected friendship."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "For the next year, we were just friends. But our shared love of art eventually brought us together, and the rest is history."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Today, we call Miami home, run our own animation studio together, and have even had our work featured in Times Square."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "If you know us, you know we're a good time. Bring that same energy."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-script)',
      fontSize: '2.25rem',
      lineHeight: 1.15,
      color: 'var(--olive)'
    }
  }, "We can't wait to celebrate with you. xo, Lexi & Snow")))));
}
window.Story = Story;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Story.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/StoryCta.jsx
try { (() => {
const {
  Button,
  Illustration
} = window.LexiSnowDesignSystem_f12512;
function StoryCta() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: "cupid",
    basePath: ILL,
    size: 100,
    rotate: -6
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(2rem,4vw,2.75rem)',
      color: 'var(--bougainvillea)',
      lineHeight: 1.05
    }
  }, "Our story"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      margin: '6px 0 16px',
      maxWidth: '46ch'
    }
  }, "We ran into each other on vacation. Neither of us has left since."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: "story.html"
  }, "READ THE LONG VERSION")), /*#__PURE__*/React.createElement(Illustration, {
    name: "record-player",
    basePath: ILL,
    size: 110,
    rotate: 5
  })));
}
window.StoryCta = StoryCta;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/StoryCta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/TheDay.jsx
try { (() => {
const NSDay = window.LexiSnowDesignSystem_f12512;
const StripeSurfaceDay = NSDay.StripeSurface || function ({
  tone,
  direction,
  scale,
  rounded,
  as = 'div',
  children,
  style,
  ...p
}) {
  const F = {
    sage: 'var(--stripe-soft-sage)',
    butter: 'var(--stripe-soft-butter)',
    sky: 'var(--stripe-soft-sky)',
    pink: 'var(--stripe-soft-pink)',
    green: 'var(--stripe-soft-green)'
  };
  return React.createElement(as, {
    style: {
      backgroundImage: F[tone] || F.sage,
      backgroundSize: '68px 68px',
      position: 'relative',
      ...(rounded ? {
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden'
      } : {}),
      ...style
    },
    ...p
  }, children);
};
const {
  Badge,
  Card,
  Illustration
} = NSDay;
const RUN = [['5:30', 'Ceremony', 'cupid'], ['6:00', 'Cocktail hour', 'champagne-tower'], ['7:00', 'Dinner', 'banquet-table'], ['8:45', 'Dancing!', 'disco-ball'], ['11:00', 'Afterparty??', 'record-player']];
function TheDay() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    id: "day",
    tone: "cream",
    style: {
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: "villa-woodbine",
    basePath: ILL,
    size: 430,
    rotate: 0,
    style: {
      margin: '0 auto 4px',
      maxWidth: '100%'
    }
  }), /*#__PURE__*/React.createElement(ScriptHeading, {
    script: "The day",
    eyebrow: "Friday \xB7 April 23, 2027",
    title: "VILLA WOODBINE, COCONUT GROVE"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lede)',
      marginTop: 20
    }
  }, "A garden wedding at a 1930s Mediterranean villa a block from Biscayne Bay. Ceremony and reception are both on site, so settle in for the night.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, [['THE PLACE', 'garden', 'Villa Woodbine', 'Coconut Grove, Miami'], ['THE TIMING', 'butter', 'Doors at 5:00 pm', 'Ceremony at 5:30 sharp'], ['THE DRESS CODE', 'pink', 'Garden party formal', 'Be as extra as you want']].map(([k, tone, t, script]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.625rem',
      marginTop: 12,
      color: 'var(--villa-green)',
      lineHeight: 1.15,
      minHeight: '2.3em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, t.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 26,
      color: 'var(--bougainvillea)',
      lineHeight: 1.2,
      marginTop: 6,
      minHeight: '2.4em'
    }
  }, script))))), /*#__PURE__*/React.createElement(StripeSurfaceDay, {
    as: "section",
    tone: "sage",
    style: {
      padding: 'var(--space-9) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-ui)',
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--bougain-600)',
      background: 'var(--cream-50)',
      border: '2px solid var(--bougainvillea)',
      borderRadius: 'var(--radius-pill)',
      padding: '14px 34px'
    }
  }, "How the evening goes")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, RUN.map(([t, label, ill]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '92px 1fr 84px',
      gap: 20,
      alignItems: 'center',
      padding: '18px 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      color: 'var(--olive)',
      letterSpacing: '.04em'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.6rem,3vw,2.125rem)',
      color: 'var(--villa-green)',
      lineHeight: 1.15
    }
  }, label.toUpperCase()), /*#__PURE__*/React.createElement(Illustration, {
    name: ill,
    basePath: ILL,
    size: 72,
    rotate: -3,
    style: {
      justifySelf: 'end'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      background: 'var(--cream-50)',
      border: '1.5px solid var(--miami-orange)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontWeight: 600,
      fontSize: 'clamp(1.875rem,3.2vw,2.5rem)',
      lineHeight: 1.25,
      color: 'var(--orange-600)',
      textAlign: 'center',
      margin: 0
    }
  }, "Villa Woodbine kicks us out at 11, rude. If you're still standing and want to keep the party going, stick with us. We know a place. That's all we're saying.")))));
}
window.TheDay = TheDay;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/TheDay.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArchFrame = __ds_scope.ArchFrame;

__ds_ns.Illustration = __ds_scope.Illustration;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StripeRule = __ds_scope.StripeRule;

__ds_ns.StripeSurface = __ds_scope.StripeSurface;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
