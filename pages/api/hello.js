// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Covid-live',
      desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  ",
      category: '#React',
      view: 'https://covid-india-live-state.netlify.app/',
      url: 'https://github.com/riponhaldar/india-covid-19--tracker',
      img: 'https://scontent.fccu1-1.fna.fbcdn.net/v/t1.6435-9/241329463_168577268706977_8063368125125022995_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=7RZ71WkYsZAAX8qI4e5&_nc_ht=scontent.fccu1-1.fna&oh=8770fe5e3311e22465877cce264198e5&oe=615F54A2',
    },
    {
      id: 2,
      title: 'BLogs',
      desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  ",
      category: 'html',
      view: 'https://kolkata-blogs.netlify.app/',
      url: 'https://github.com/riponhaldar/kolkata_Blogs',
      img: 'https://scontent.fccu1-1.fna.fbcdn.net/v/t1.6435-9/241329463_168577268706977_8063368125125022995_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=7RZ71WkYsZAAX8qI4e5&_nc_ht=scontent.fccu1-1.fna&oh=8770fe5e3311e22465877cce264198e5&oe=615F54A2',
    },
  ]);
}
