// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const categories = [
      {
        id: 1,
        title: 'Comics',
        entity: 'comics',
        thumbnail:
          'https://1.bp.blogspot.com/-8Bo8lSl1zuE/Xr2V9xmrT5I/AAAAAAABNIc/szvrK7leniA3SF1nIjs-Lc_GR3zudUpsQCK4BGAsYHg/w640-h640/2020-04-05-panini-comics-brasil-marvel-comics-blog-leitora-viciada-checklist.jpg',
      },
      {
        id: 2,
        title: 'Characters',
        entity: 'characters',
        thumbnail:
          'https://i.pinimg.com/originals/38/5b/b2/385bb26fbba75fc2c87760006b289cb4.jpg',
      },
      {
        id: 3,
        title: 'Series',
        entity: 'series',
        thumbnail:
          'https://i.pinimg.com/originals/67/71/1f/67711f74d01670bbefd8a28bd0036f7a.jpg',
      },
      {
        id: 4,
        title: 'Events',
        entity: 'events',
        thumbnail:
          'https://1.bp.blogspot.com/-8Bo8lSl1zuE/Xr2V9xmrT5I/AAAAAAABNIc/szvrK7leniA3SF1nIjs-Lc_GR3zudUpsQCK4BGAsYHg/w640-h640/2020-04-05-panini-comics-brasil-marvel-comics-blog-leitora-viciada-checklist.jpg',
      },
    ];
    res.status(200).json(categories);
  } else {
    res.status(405).end('method no allowed');
  }
}
