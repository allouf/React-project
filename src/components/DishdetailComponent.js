import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

    function RenderComments({comments}){
        if(comments !=null){
            const commentsList = comments.map(
                (arrayItem, arrayItemIndex, wholeArray) => { return(
                    <li key={arrayItem.id}>
                        <p>
                            {arrayItem.comment}
                            <br/>
                            --{arrayItem.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(arrayItem.date)))}
                        </p>
                    </li>
                );
            }
            );
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsList}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    function RenderDish({dish}){
        if(dish !=null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{<h5>{dish.name}</h5>}</CardTitle> 
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) =>{
        const dish = props.dish;
        if(dish !=null){
            return (
                <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={dish.comments} />
                </div>
                </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    export default DishDetail;