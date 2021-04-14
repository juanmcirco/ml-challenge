function Layout(props) {
  return (
    <div>
      {props.children}
      <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            padding-top: 70px;
            font-size: 18px;
            font-weight: 300;
            line-height: 1.8;
            color: #333;
            font-family: "Proxima Nova",-apple-system,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif,sans-serif;
            background: #ebebeb;
          }
          h1 {
            font-weight: 400;
          }
          p {
            margin-bottom: 10px;
          }
        `}</style>
    </div>
  )
}

export default Layout