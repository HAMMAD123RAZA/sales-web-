import * as React from "react";
import {
  Button,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";

const List = ({title,content}) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="product.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            <Typography variant="body2" color="text.secondary">
           {content}          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" >
            learn more
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default List;
