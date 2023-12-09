import React, { useState, useEffect } from "react";

export default function PhotosPage() {
  const [photo, setPhoto] = useState(null);
  const getPhoto = async () => {
    try {
      // 오류가 날 수도 있는 코드를 try 안에 넣는다.
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=0&_end=9`
      );
      if (res.ok) {
        const photos = await res.json();
        setPhoto(photos);
        // console.log("photos", photos);
      } else {
        throw Error("존재하지 않는 상품입니다.");
      }

      //   const res = await axios(
      //     `https://jsonplaceholder.typicode.com/photos`
      //   );

      //   const prod = res.data
      //   setProduct(prod);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);
  return (
    <>
      <div>PhotosPage</div>
      {photo ? (
        photo.map((el) => {
          return (
            <>
              <div key={el.id}>
                <img src={el.thumbnailUrl} alt="" />
                <div>{el.id}</div>
                <div>{el.title}</div>
              </div>
              <br />
            </>
          );
        })
      ) : (
        <input />
      )}
      {/* <div>{photo}</div> */}
    </>
  );
}
