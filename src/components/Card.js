import * as React from "react";
import ReactDOM from "react-dom";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    justifyContent: "center",
    minWidth: "220px",
    minHeight: "auto",
    cursor: "pointer",
    boxShadow: "0 8px 16px 0 #BDC9D7",
  },
}));
const Label = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  position: absolute;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 13px;
  z-index: 9;
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
        <Typography sx={{ fontSize: 14 }} color="#3eb93b" gutterBottom>
          Novo cliente!
        </Typography>
        <Typography variant="h6" component="div">
          Beatriz Souza
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Entrada: 12/03/22
        </Typography>
        <Typography variant="body2">Retirada: 12/05/22</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Div>
  </React.Fragment>
);
const Div1 = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

function Card1(props) {
  const styles = useStyles();
  return (
    <Div1>
      <Label color={props.color} />
      <Card className={styles.card} variant="outlined">
        {card}
      </Card>
    </Div1>
  );
}

export default Card1;
