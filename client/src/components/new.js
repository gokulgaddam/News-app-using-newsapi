import React from 'react';
import { Card, CardHeader, CardImg,CardTitle, CardText, CardBody} from 'reactstrap';

const New = (props) => {
  return (
      <div className="col-md-6 col-12 mt-3">
          
          <Card onClick={props.url} >
          <a href={props.link}>
            <CardImg top width="100%" height="100%" src={props.img} alt="Card image cap" />
            </a>
           <CardHeader>{props.title}</CardHeader>
            <CardBody>
            <CardTitle>{props.desc}</CardTitle>
           
            <CardText>{props.cont}</CardText>
            
            
            </CardBody>
    
            </Card>
          
           
      </div>
   


  );
};

export default New;