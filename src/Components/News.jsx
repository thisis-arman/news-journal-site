import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "./EditorsInsights";
import { FaArrowLeft } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const {title,image_url,_id,details,category_id}=news;
  return (
    <div>
        <Card style={{ width: "" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft/> All News in this Category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInsights/>
    </div>
  );
};

export default News;
