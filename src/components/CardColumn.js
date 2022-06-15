import * as React from "react";
import ReactDOM from "react-dom";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Smile from "./../assets/smile.png";
import Neutral from "./../assets/neutral.png";
import Bad from "./../assets/bad.png";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    justifyContent: "center",
    minWidth: "250px",
    width: "280px",
    minHeight: "auto",
    cursor: "pointer",
    boxShadow: "0 8px 16px 0 #BDC9D7",
  },
}));
const Label = styled.div`
  width: 20px;
  height: 50px;
  background-color: ${(props) => props.color};
  position: absolute;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 13px;
  z-index: 9;
  img {
    height: 20px;
    align-self: center;
  }
`;
const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  border-radius: 30px;
  background-color
`;

const card = (
  <React.Fragment>
    <Div>
      <CardContent>
        <Typography variant="h6" component="div">
          Carlos Pereira
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Entrada: 01/05/22
        </Typography>
        <Typography variant="body2">Retirada: 23/11/22</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Div>
  </React.Fragment>
);
const Div1 = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;

function Card1(props) {
  const styles = useStyles();
  const color = props.color;
  return (
    <Div1>
      <Label color={props.color}>
        {color == "#3eb93b" && <img src={Smile} />}
        {color == "#E4D442" && <img src={Neutral} />}
        {color == "#EB4D4D" && <img src={Bad} />}
      </Label>
      <Card className={styles.card} variant="outlined">
        {card}
      </Card>
    </Div1>
  );
}

export default Card1;
