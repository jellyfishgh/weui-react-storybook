import React from 'react'

export const content = [
  {
    title: '大标题',
    sections: [
      {
        title: '第一章',
        sections: [
          {
            title: '1.1 节',
            sections: [
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates, exercitationem distinctio architecto explicabo numquam provident iste asperiores. Obcaecati quae tempore cumque similique ducimus. Repudiandae dicta corporis a suscipit animi.',
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero animi quisquam delectus consectetur esse necessitatibus reiciendis nesciunt quibusdam, amet, reprehenderit eligendi! Odit harum voluptate aliquam laudantium exercitationem quam ipsam officia.'
            ]
          },
          {
            title: '1.2 节',
            sections: [
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates, exercitationem distinctio architecto explicabo numquam provident iste asperiores. Obcaecati quae tempore cumque similique ducimus. Repudiandae dicta corporis a suscipit animi.',
              () => (
                <img
                  src={require('@/assets/imgs/pic_article.png')}
                  alt="pic_article"
                />
              )
            ]
          }
        ]
      },
      {
        title: '第二章',
        sections: [
          {
            sections: ['Loream', 'ipSum']
          },
          {
            title: '2.1 节',
            sections: [
              {
                title: '2.1.1 段',
                sections: ['Hello', 'World']
              }
            ]
          }
        ]
      }
    ]
  }
]
