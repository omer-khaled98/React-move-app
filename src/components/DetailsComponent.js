export default function ({ img, title, desc, rate }) {
  return (
    <>
      <div
        className="bgdel"
        style={{
          width: "100%",
          height: "calc(100vh - 56px)",

          backgroundImage: `URL(${img})`,
          backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          color: "white",
        }}
      >
        <div
          style={{
            zIndex: "1",
            opacity: "0.9",
            position: "absolute",
            top: "56px",
            right: "0px",
            bottom: "0px",
            left: "0px",
            backgroundColor: "rgb(23, 32, 42 , 0.9)",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            alignContent: "center",
            position: "relative",
            zIndex: "1000",
            marginLeft: "200px",
            paddingTop: "50px",
            // justifyContent: "center",
            gap: "50px",
          }}
        >
          <div>
            <img
              src={img}
              style={{
                width: "300px",
                zIndex: "1",
                borderRadius: "3px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            />
          </div>
          <div style={{ width: "500px" }}>
            <h1>{title}</h1>
            <h5 style={{ marginTop: "30px", marginBottom: "50px" }}>
              {" "}
              Rate : {Number(rate).toFixed(1)}
            </h5>
            <p> {desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
