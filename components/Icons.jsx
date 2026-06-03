// Inline SVG icon library — keep stroke-based, no emoji.
const Icon = ({ name, size = 20, stroke = 'currentColor', fill = 'none', strokeWidth = 1.8, ...rest }) => {
  const paths = {
    search: <path d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm10 17-4.3-4.3" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    cart: <><path d="M3 4h2l2.5 12a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" /><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    sparkle: <><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.5 5.5l4 4M14.5 14.5l4 4M5.5 18.5l4-4M14.5 9.5l4-4" /></>,
    play: <path d="M7 4.5v15l13-7.5-13-7.5Z" fill="currentColor" />,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
    timer: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5M9 2h6" /></>,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    shield: <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />,
    leaf: <path d="M5 19c0-9 6-14 14-14 0 9-6 14-14 14Z M5 19c4-4 8-6 12-7" />,
    truck: <><path d="M3 7h11v8H3z" /><path d="M14 10h4l3 3v2h-7" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></>,
    heart: <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />,
    star: <path d="m12 3 2.6 6 6.4.6-4.8 4.4 1.4 6.4L12 17l-5.6 3.4 1.4-6.4L3 9.6l6.4-.6L12 3Z" fill="currentColor" />,
    check: <path d="m4 12 5 5 11-12" />,
    chevron: <path d="m9 6 6 6-6 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    flame: <path d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-2 2-3 2-5 0-2-1-3-1-3 0 2-2 4-2 7a5 5 0 0 0 10 0c0-4-5-7-5-7Z" />,
    drop: <path d="M12 3s-6 7-6 12a6 6 0 0 0 12 0c0-5-6-12-6-12Z" />,
    flask: <path d="M9 3h6 M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3L14 9V3" />,
    pkg: <><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" /><path d="M4 7l8 4 8-4M12 11v10" /></>,
    lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
    chat: <path d="M21 12a8 8 0 0 1-12 7L4 21l1.5-4A8 8 0 1 1 21 12Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></>,
    tiktok: <path d="M15 3v9.5a3.5 3.5 0 1 1-3.5-3.5h.5V12a1 1 0 1 0 1 1V3h2a4 4 0 0 0 4 4" />,
    whatsapp: <path d="M21 12a9 9 0 1 1-3.5-7L21 4l-1 3.7A9 9 0 0 1 21 12Z M8 9c0 4 3 7 7 7l1.5-1.5-2-1-1.5 1c-1 0-3-2-3-3l1-1.5-1-2L8.5 8 8 9Z" />,
    youtube: <><rect x="2.5" y="6" width="19" height="12" rx="3" /><path d="M10 9.5v5l5-2.5-5-2.5Z" fill="currentColor" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths[name] || null}
    </svg>
  );
};

window.Icon = Icon;
