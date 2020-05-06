import React, { Component } from 'react';
import New from './new';
import './news.css';
import axios from 'axios';
import {Spinner} from 'reactstrap';
//import { ObjectID } from 'mongodb';

class News extends Component {
  
  constructor() {
    super();
    this.state = {
      news: [],
      fileteredNews:[]
    };
  }

  componentDidMount() {
    
    axios.get('http://localhost:5000/entertainment')
    
      .then((res)=>{
        
       
        
        
        this.setState({news:res.data.articles.slice(0,8)});
         
     //.then(news => this.setState({news:recNews}, () => console.log('news fetched...', this.state.news)));
  })}
 
  render() {
   console.log(this.state.news);

   if(this.state.news.length!='0'){
    return (
      <div className="container">
      
        
       <ul>
         <div className="row">
        {this.state.news.map((news,index) => 
        
            <New key={index} title={news.title} desc={news.description} 
            cont={news.content} img={news.urlToImage} link={news.url}/>
      
         
        )}
        </div>
        </ul>
      </div>
    );
   }
   else{
     return(
        <div className='spinner'>
         
        <Spinner animation="grow" />
        
               
      </div>
     )

   }
   
  }
}

export default News;
