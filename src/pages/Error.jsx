import React from 'react'

function Error() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.message}>Oops.. page not found</p>
        {/* <Link to="/" style={styles.link}>Вернуться на главную</Link> */}
      </div>
    );
  }
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#fdf6f0",
      color: "#7f2549",
      textAlign: "center",
    },
    title: {
      fontSize: "100px",
      margin: "0",
    },
    message: {
      fontSize: "20px",
      margin: "10px 0",
    },
    link: {
      marginTop: "20px",
      padding: "10px 20px",
      background: "#7f2549",
      color: "white",
      textDecoration: "none",
      borderRadius: "8px",
    }
  };

export default Error