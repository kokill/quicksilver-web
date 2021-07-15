import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";


const list = [
  {
    name: 'Mobile', list: [
      { text: 'Java', image: 'angular.svg'},
      { text: 'Swift', image: 'angular.svg'},
      { text: 'React Native', image: 'angular.svg'},
      { text: 'Flutter', image: 'angular.svg'},
    ],
  },
  {
    name: 'Back End', list: [
      { text: 'NodeJS', image: 'angular.svg'},
      { text: 'Golang', image: 'angular.svg'},
      { text: 'SpringBoot', image: 'angular.svg'},
    ]
  },
  {
    name: 'Front End', list: [
      { text: 'React JS', image: 'angular.svg'},
      { text: 'Angular JS', image: 'angular.svg'},
      { text: 'TypeScript', image: 'angular.svg'},
      { text: 'Vue JS', image: 'angular.svg'},
      { text: 'Bootstrap', image: 'angular.svg'},
      { text: 'GraphQL', image: 'angular.svg'},
      { text: 'HTML5', image: 'angular.svg'},
      { text: 'JQuery', image: 'angular.svg'},
    ]
  },
  {
    name: 'Database', list: [
      { text: 'MongoDB', image: 'angular.svg'},
      { text: 'MySQL', image: 'angular.svg'},
      { text: 'PostgreSQL', image: 'angular.svg'},
      { text: 'Redis', image: 'angular.svg'},
    ]
  },
  {
    name: 'CRM', list: [
      { text: 'WordPress', image: 'angular.svg'},
      { text: 'Shopify', image: 'angular.svg'},
      { text: 'Laravel', image: 'angular.svg'},
    ]
  }
];

export default function Technologies() {
  const [activeItem, setActiveItem] = useState(list[0]);
  return (
    <>
    <ul className="nav nav-tabs nav-justified">
      {list.map(item => <li onClick={() => setActiveItem(item)} className="nav-item" key={item.name}>
          <a className={activeItem.name === item.name ? "nav-link active" : "nav-link" } aria-current="page">{item.name}</a>
        </li>
      )}
    </ul>
      
        <div className="row justify-content-center">
        {
          activeItem.list.map(item => <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={item.text}>
            <Card>
              <img src={'/images/technologies/'+item.text.toLowerCase()+'.svg'} />
              <div>{item.text}</div>
            </Card>
          </div>)
        }
        </div>
    </>
  )
}

const CardWrapper = styled.div.attrs({
})`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  padding: 20px 0;
  background: #f7f7f7;
  margin: 30px 0;
  border-radius: 14px;
  > img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 20px;
  }
`;
