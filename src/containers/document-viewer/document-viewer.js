import React from "react";
import { Grid } from "@material-ui/core";
import MainDocument from "./components/main-document";
import { StyleSheet, PDFViewer } from "@react-pdf/renderer";

function DocumentViewer(props) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      height: "100%"
    },
    viewer: {
      width: "100%",
      height: "100%"
    },
  });

  return (
    <Grid item xs={12} md={8}>
      <div style={styles.container}>
        <PDFViewer style={styles.viewer}>
          <MainDocument {...props} />
        </PDFViewer>
      </div>
    </Grid>
  );
}

export default DocumentViewer;
