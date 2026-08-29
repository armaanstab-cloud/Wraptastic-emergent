import React, { useEffect } from "react";

// Live Instagram grid, hosted by Behold (behold.so). Behold holds the Instagram
// token and refreshes it, so new posts show up here on their own - no rebuild
// and no deploy. Change what it shows (post count, columns, spacing) in the
// Behold dashboard for this feed; nothing here needs to change.
const FEED_ID = "DZn9fb8c0Loay7GIlEBX";

export const BeholdFeed = () => {
  // <behold-widget> is a custom element defined by this script. Inject it once
  // per page load - the guard also covers React's double-invoked dev effects.
  useEffect(() => {
    if (window._bhldScript) return;
    window._bhldScript = true;
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.append(s);
  }, []);

  return (
    <div data-testid="behold-feed" className="behold-shell">
      <behold-widget feed-id={FEED_ID} />
    </div>
  );
};
