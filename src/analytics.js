export const init = () => {
  Promise.all([
    import('autotrack/lib/plugins/clean-url-tracker'),
    import('autotrack/lib/plugins/event-tracker'),
    import('autotrack/lib/plugins/url-change-tracker'),
    import('autotrack/lib/plugins/max-scroll-tracker'),
    import('autotrack/lib/plugins/media-query-tracker'),
    import('autotrack/lib/plugins/outbound-link-tracker'),
    import('autotrack/lib/plugins/page-visibility-tracker')
  ]).then(() => {
    window.ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args));
    ga.l = +new Date();

    ga('create', 'UA-158104348-1', 'auto');
    ga('set', 'transport', 'beacon');

    ga('require', 'cleanUrlTracker');
    ga('require', 'eventTracker');
    ga('require', 'urlChangeTracker');
    ga('require', 'maxScrollTracker');
    ga('require', 'mediaQueryTracker');
    ga('require', 'outboundLinkTracker');
    ga('require', 'pageVisibilityTracker');
    ga('send', 'pageview');
  });
};
