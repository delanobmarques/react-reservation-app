import "./featured.styles.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ff/05/8b/visita-obrigatoria-para.jpg?w=600&h=500&s=1" alt="RioDeJaneiro" />
            <div className="featuredTitles">
                <h1>Rio de Janeiro</h1>
                <h2>121 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="http://media.planum.bedita.net/f2/3d/Fig.%20_f23d830e5cc125c2c00c888b86277ddd/Fig.%208_Marluce%20Wall_700x_a997d27b8e2f914d571f77be4116674b.jpg" alt="SaoLuis" />
            <div className="featuredTitles">
                <h1>São Luis</h1>
                <h2>101 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/79/e7/a2/catedral-metropolitana.jpg?w=1200&h=-1&s=1" alt="Brasilia" />
            <div className="featuredTitles">
                <h1>Brasilia</h1>
                <h2>115 Properties</h2>
            </div>
        </div>

    </div>
  )
}

export default Featured