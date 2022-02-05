import React , {useState, useEffect}from 'react';
import ReactDOM from 'react-dom';


function Content() {
    const [videos, setVideos] =  useState([]);
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
      },
      item: {
        flex: '1 0 25%',
      },
    };

    useEffect(() => {
      const axios = require('axios');

      axios.get('/getdata')
      .then(function (response) {
        setVideos(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      })
    },[]);

    return (
      <div style={styles.container}>
        {
          videos.map((item, i) => {
            return (
              <div key={i} value={i+1} style={styles.item}>
                <iframe 
                  width="250" 
                  height="250" 
                  src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  title={item.snippet.channelTitle} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            );
          })
        }
      </div>
    );
}

export default Content;

if (document.getElementById('content')) {
    ReactDOM.render(<Content />, document.getElementById('content'));
}
