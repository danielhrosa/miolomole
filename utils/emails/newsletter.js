const newsletterEmail = (data) => `
    <body style="display: flex; height: 100vh">
      <div
      style="
          text-align: center;
          margin: auto;
          width: 80%;
          height: auto;
          background-color: #FFFFFF;
          padding: 20px;
          border-radius: 15px;
          background-size: 137%;
      "
      >
        <p>O email deseja receber novidades</>
        <h2>${data.email}</h2>
      </div>
    </body>
`
export default newsletterEmail;
