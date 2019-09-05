import React from 'react';
import Slick from 'react-slick';
import style from '../../../App.css';
import { Link } from 'react-router-dom';

const SliderTemplates = props => {
  //console.log(props);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings //this checks if any of the above is changed as a prop and
    //overwrites its value with the one that is passed as a prop
  };

  let template = null;

  switch (props.type) {
    case 'featured':
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={style.featured_item}>
              <div
                className={style.featured_image}
                style={{
                  background: `url(../images/articles/${item.image})`
                }}
              >
                <Link to={`/articles/${item.id}`}>
                  <div className={style.featured_caption}>{item.title}</div>
                </Link>
              </div>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplates;
