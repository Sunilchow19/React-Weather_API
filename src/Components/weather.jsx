import { useState } from "react";

// import "./we.css";

function Weather() {
  let [inp, setInp] = useState("");
  let [obj, setObj] = useState({});
  let [a, seta] = useState("");

  let enter = (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=187bcf7f727f31b0cd581fdb7b19c089`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setObj(res);
        return res;
      })
      
  };


  function sty() {
    if (obj.main.temp < 273.15) {
      return (
        <>
          <img src="https://i.pinimg.com/originals/61/2a/67/612a677c31da6f703d79ed41a0f3dd7e.jpg" alt="" width={400} />
          <h1>{obj.name}</h1>
          <h1>{Math.round(obj.main.temp - 273.15)}<sup>o</sup>C</h1>
        </>
      );
    } else if (obj.main.temp >= 273.15 && obj.main.temp < 283.15) {
      return (
        <>
          <img src="https://th.bing.com/th/id/OIP.QcFHZet_hrkpxNdVMjSZigHaE7?rs=1&pid=ImgDetMain" alt="" width={400} />
          <h1>{obj.name}</h1>
          <h1>{Math.round(obj.main.temp - 273.15)}<sup>o</sup>C</h1>
        </>
      );
    } else if (obj.main.temp >= 283.15 && obj.main.temp < 303.15) {
      return (
        <>
          <img src="https://1471793142.rsc.cdn77.org/data/images/full/6325/weather.jpg" alt="" width={400} />
          <h1>{obj.name}</h1>
          <h1>{Math.round(obj.main.temp - 273.15)}<sup>o</sup>C</h1>
        </>
      );
    } else {
      return (
        <>
          <img src="https://wallpapercave.com/wp/wp4555644.jpg" alt="" width={400} />
          <h1>{obj.name}</h1>
          <h1>{Math.round(obj.main.temp - 273.15)}<sup>o</sup>C</h1>
        </>
      );
    }
  }
  


  function chn(e) {
    setInp(e.target.value);
  }

  return (
    <>
      {/* {console.log(inp)
        } */}

        <h1>Weather</h1>
      <form action="" onSubmit={enter}>
        <input type="text" onChange={chn} value={inp}/>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      {Object.keys(obj).length == 0 ? "" : sty()}
    </>
  );
}

export default Weather;
