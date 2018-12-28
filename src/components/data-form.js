import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  FormControl,
  TextField,
  Input,
  InputLabel,
  Typography,
  Grid,
  List,
  ListItemText,
  ListItem,
  InputAdornment,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

const styles = theme => ({
  prevImg: {
    width: "100%"
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  listaTitle: {
    marginTop: theme.spacing.unit * 3
  }
});

function DataForm(props) {
  const { classes } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper className={classes.paper}>
        <div className={classes.form}>
          {props.imageURL && (
            <img className={classes.prevImg} src={props.imageURL} alt="file" />
          )}
          <input
            style={{ display: "none" }}
            onChange={props.chargeFile}
            accept="image/*"
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <Button
              fullWidth
              variant="contained"
              color="default"
              component="span"
            >
              Upload diploma PNG
            </Button>
          </label>
          <hr/>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="date">Fecha</InputLabel>
            <Input
              value={props.date}
              onChange={e => {
                props.handleInputChange(e);
              }}
              id="date"
              name="date"
              autoComplete="date"
              autoFocus
            />
          </FormControl>
          <FormControl style={{ flexDirection: "row" }}>
            <Grid item xs={4}>
              <TextField
                id="datePos"
                label="Y Pos %"
                type="number"
                className={classes.textField}
                onChange={e => props.handlePosChange(e, "x")}
                value={props.datePos.x}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="datePos"
                label="X Pos %"
                type="number"
                onChange={e => props.handlePosChange(e, "y")}
                value={props.datePos.y}
                className={classes.textField}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="dateSize"
                label="Font Size"
                type="number"
                onChange={e => props.handleInputChange(e)}
                value={props.dateSize}
                className={classes.textField}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="course">Nombre del curso</InputLabel>
            <Input
              name="course"
              type="text"
              id="course"
              value={props.course}
              onChange={e => {
                props.handleInputChange(e);
              }}
            />
          </FormControl>
          <FormControl style={{ flexDirection: "row" }}>
            <Grid item xs={4}>
              <TextField
                id="coursePos"
                label="Y Pos %"
                type="number"
                className={classes.textField}
                onChange={e => props.handlePosChange(e, "x")}
                value={props.coursePos.x}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="coursePos"
                label="X Pos %"
                type="number"
                onChange={e => props.handlePosChange(e, "y")}
                value={props.coursePos.y}
                className={classes.textField}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="courseSize"
                label="Font Size"
                type="number"
                onChange={e => props.handleInputChange(e)}
                value={props.courseSize}
                className={classes.textField}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <Typography>Name placeholder</Typography>
          </FormControl>
          <FormControl style={{ flexDirection: "row" }}>
            <Grid item xs={4}>
              <TextField
                id="namePos"
                label="Y Pos %"
                type="number"
                className={classes.textField}
                onChange={e => props.handlePosChange(e, "x")}
                value={props.namePos.x}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="namePos"
                label="X Pos %"
                type="number"
                onChange={e => props.handlePosChange(e, "y")}
                value={props.namePos.y}
                className={classes.textField}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="nameSize"
                label="Font Size"
                type="number"
                onChange={e => props.handleInputChange(e)}
                value={props.nameSize}
                className={classes.textField}
                margin="normal"
                style={{ marginRight: 10 }}
                variant="outlined"
              />
            </Grid>
          </FormControl>
          <hr/>
          <Typography className={classes.listaTitle} variant="title">
            Lista de egresados
          </Typography>
          <FormControl margin="normal" required fullWidth>
            <form style={{ display:"contents" }} onSubmit={props.handleAddName}>
            <InputLabel>Nombre del egresado</InputLabel>
              <Input
                id="nameToAdd"
                type='text'
                value={props.nameToAdd}
                onChange={e => {
                  props.handleInputChange(e);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <Button onClick={props.handleAddName} variant="text" size="small" color="primary">
                      Añadir
                    </Button>
                  </InputAdornment>
                }
              />
            </form>
          </FormControl>
          <List dense>
          {
            props.names.map((name, id) =>  
            <ListItem key={id}>
              <ListItemText
                primary={name}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => {props.handleDeleteName(id)}} aria-label="Delete">
                  x
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            )
          }
          </List>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            href={props.PDFBlob}
            target="_blank"
            className={classes.submit}
            download
            component="a"
          >
            Generar PDF
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(DataForm);
