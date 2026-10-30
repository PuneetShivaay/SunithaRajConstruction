/**
 * TEMPORARY stock photos (Unsplash) used until real site photos are supplied.
 * To switch to a real photo: put the file in /public/images/... and change the
 * value here to the local path, e.g. "/images/projects/stp.jpg".
 */
const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: [
    u("photo-1486406146926-c627a92ad1ab", 2000),
    u("photo-1541888946425-d81bb19240f5", 2000),
    u("photo-1503387762-592deb58ef4e", 2000),
  ],
  whyUs: u("photo-1504307651254-35680f356dfd", 1200),
  services: {
    construction: u("photo-1541888946425-d81bb19240f5", 1400),
    interiors: u("photo-1618221195710-dd6b41faaea6", 1400),
    electrical: u("photo-1621905251189-08b45d6a269e", 1400),
    waterproofing: u("photo-1504307651254-35680f356dfd", 1400),
  },
  projects: {
    residentialHouse: u("photo-1545324418-cc1a3fa10c00"),
    pmgsyRoad: u("photo-1621544402532-78c290378588"),
    terraceGarden: u("photo-1600585154340-be6161a56a0c"),
    shoppingMall: u("photo-1503387762-592deb58ef4e"),
    roof: u("photo-1504307651254-35680f356dfd"),
    stp: u("photo-1581094794329-c8112a89af12"),
    bathroom: u("photo-1618221195710-dd6b41faaea6"),
    wtp: u("photo-1541888946425-d81bb19240f5"),
  },
} as const;
