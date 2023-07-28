import React, { FC } from 'react'
import { Card } from './card';

type Props = {
    list:{
        name: string;
        link: string;
        image: any;
    }[]
}

export const CardContainer:FC<Props> = ({list}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
      {list.map(({ name, link, image }) => (
        <Card key={name} name={name} link={link} image={image} />
      ))}
    </div>
  )
}
