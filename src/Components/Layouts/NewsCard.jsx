import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye, FaRegStar } from "react-icons/fa";
import moment from "moment/moment";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, author, image_url, total_view,rating } = news;
  return (
    <div>
      <Card className="mt-5">
        <Card.Header className="d-flex  justify-content-between align-items-center">
          <div className="d-flex">
            <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
            <div className="ps-2 align-items-center">
              <p className="mb-0 ">{author?.name}</p>
              <p>{moment(author?.published_date).format("yyyy-mm-d")}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="text-black h-5 w-5" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details?.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}
                <Link to={`/news/${_id}`}>..see more</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
          <div className="">
            <Rating
            readonly
              placeholderRating={rating?.number}
              emptySymbol={
                <FaRegStar/>
              }
              placeholderSymbol={
                <FaStar className="text-warning"/>
              }
              fullSymbol={
            <FaStar/>
              }
              /> {rating.number}
          </div>
          <div>
            <FaEye /> <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
