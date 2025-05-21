import { getPermalink, getAsset } from './utils/permalinks';
import { getLangFromUrl, useTranslations } from './i18n/utils';

export const headerData = (Astro) => {
  const lang = getLangFromUrl(Astro.url);
  const t = useTranslations(lang);

  return {
    links: [
      {
        text: t('nav.kindergarden'),
        href: getPermalink(lang + '/kindergarden'),
      },
      {
        text: t('nav.communitycenter'),
        href: getPermalink(lang + '/communitycenter'),
      },
      {
        text: t('nav.twinningFriendshipProgam'),
        href: getPermalink(lang + '/twinningFriendshipProgam'),
      },
    ],
    actions: [{ text: 'Donate', href: '', target: '_blank' }],
  };
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};
