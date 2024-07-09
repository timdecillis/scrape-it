import { useEffect, useState } from 'react';

export default async function Home() {


  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/scrape');
      const result = await response.json();
      setArtworks(result);
      // setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Enter your search term</h1>
      <form>
        <input type="text" />
        <input type="submit"/>
      </form>
      <h1>Artworks</h1>
      {/* {artworks.length ? (
        artworks.map((artwork, i) => {
          let year;
          if (artwork.extensions) {
            year = artwork.extensions[0];
          }
          return (
            <>
              <div key={i}>
                {i + 1}.) {artwork.name}
                {year && `, ${year}`}
              </div>
              <div>link: {artwork.link.slice(-5)}</div>
              <div>{artwork.image && `image: ${artwork.image.slice(-5)}`}</div>
            </>
          );
        })
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
}
