import React from 'react'
//import css stylesheet
import '../../Styles/Banner.css'
//import images
import HeroImages from '../../images/photo-1618588488736-c9419743dd12.avif'
import { containerClasses } from '@mui/system'

export default function Banner() {
  return (
    <div>
      <img 
          src={HeroImages} 
          style={{ 
              width: "100%",
              height: "35rem",
              objectFit: "none",
              objectPosition: "35% 0",
              maxWidth: "1280px",
              margin: "30px 0" }}
      />
      <h1>CBD JOINT HOMEPAGE</h1>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    </div>
  )
}