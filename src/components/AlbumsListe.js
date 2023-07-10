import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

export default function AlbumsListe() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const getAlbums = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        console.log(res);
        setAlbums(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAlbums();
  }, []);

  return (
    <div className="card-container">
      {albums.length > 0 ? (
        albums.map((el) => <ImageCard album={el} />)
      ) : (
        <img src="https://media.tenor.com/XasjKGMk_wAAAAAC/load-loading.gif" />
      )}
    </div>
  );
}
