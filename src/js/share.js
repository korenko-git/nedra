(function ($) {
  $.fn.shareButtons = function (options) {
    const settings = $.extend(
      {
        url: window.location.href,
        title: document.title,
      },
      options,
    );

    return this.each(function () {
      const $el = $(this);
      const url = encodeURIComponent(settings.url);
      const title = encodeURIComponent(settings.title);

      const buttons = {
        facebook: {
          link: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          svg: `<svg fill="white" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3H14v7A10 10 0 0 0 22 12z"/></svg>`,
        },
        twitter: {
          link: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
          svg: `<svg fill="white" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0a4.48 4.48 0 0 0-4.49 4.48c0 .35.04.7.11 1.03A12.8 12.8 0 0 1 3 1.11a4.49 4.49 0 0 0-.61 2.26 4.48 4.48 0 0 0 2 3.73A4.49 4.49 0 0 1 2 6.11v.06A4.5 4.5 0 0 0 4.48 11a4.5 4.5 0 0 1-2 .08 4.48 4.48 0 0 0 4.18 3.1A9 9 0 0 1 1 18.1a12.76 12.76 0 0 0 6.93 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.3 9.3 0 0 0 23 3z"/></svg>`,
        },
        telegram: {
          link: `https://t.me/share/url?url=${url}&text=${title}`,
          svg: `<svg fill="white" viewBox="0 0 24 24"><path d="M9.993 16.184l-.39 4.243c.557 0 .8-.24 1.09-.526l2.62-2.494 5.438 3.973c.996.55 1.7.26 1.972-.923l3.576-16.82v-.001c.318-1.49-.538-2.072-1.508-1.704L1.082 10.09C-.35 10.66-.333 11.49.888 11.87l5.772 1.803L19.207 4.97c.466-.287.89-.128.542.16L9.993 16.184z"/></svg>`,
        },
      };

      for (const [key, { link, svg }] of Object.entries(buttons)) {
        $el.append(
          `<a class="share-btn share-${key}" href="${link}" target="_blank" rel="noopener noreferrer" title="Share on ${key}">
              ${svg}
            </a>`,
        );
      }
    });
  };
})(jQuery);
